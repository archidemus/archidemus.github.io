import { useQuery } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ky from "ky";
import { useState } from "react";

// Definimos la interfaz para los objetos en los archivos JSON
interface ObjetoConMonto {
  monto: number;
  // Otros campos que puedan tener los objetos
  [key: string]: any;
}

const queryClient = new QueryClient();

const Expenses = () => (
  <QueryClientProvider client={queryClient}>
    <SumadorMontos />
  </QueryClientProvider>
);

const SumadorMontos: React.FC = () => {
  // Estado para almacenar la suma total
  const [sumaTotal, setSumaTotal] = useState<number>(0);

  // Consulta para obtener el HTML del directorio
  const directorioQuery = useQuery({
    queryKey: ["directorio"],
    queryFn: async () => {
      const htmlTexto = await ky
        .get("http://localhost:8000/expenses/transacciones")
        .text();

      // Analizar el HTML para extraer los enlaces a archivos JSON
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(htmlTexto, "text/html");

      // Encontrar todos los enlaces y filtrar solo los JSON
      const enlaces = Array.from(htmlDoc.querySelectorAll("a"))
        .map((enlace) => enlace.getAttribute("href"))
        .filter((href) => href && href.endsWith(".json")) as string[];

      return enlaces;
    },
    // No reutilizar datos anteriores
    staleTime: 0,
  });

  // Consulta para obtener los archivos JSON y calcular la suma
  const sumaTotalQuery = useQuery({
    queryKey: ["sumaMontos", directorioQuery.data],
    queryFn: async () => {
      if (!directorioQuery.data || directorioQuery.data.length === 0) {
        return 0;
      }

      let sumaTotalMontos = 0;

      // Para cada archivo en la carpeta
      for (const nombreArchivo of directorioQuery.data) {
        // Descargar el contenido del archivo usando ky
        const contenido = await ky
          .get(`http://localhost:8000/expenses/transacciones/${nombreArchivo}`)
          .json<ObjetoConMonto[]>();

        // Sumar los montos de todos los objetos en este archivo
        const sumaArchivo = contenido.reduce(
          (suma, objeto) => suma + (objeto.monto || 0),
          0
        );

        // Acumular en la suma total
        sumaTotalMontos += sumaArchivo;
      }

      // Establecer el estado para la suma total
      setSumaTotal(sumaTotalMontos);
      return sumaTotalMontos;
    },
    // Solo se ejecuta cuando directorioQuery.data cambia y está disponible
    enabled: !!directorioQuery.data,
    // No reutilizar datos anteriores
    staleTime: 0,
  });

  // Manejo de estados de carga y error
  if (directorioQuery.isPending || sumaTotalQuery.isPending) {
    return (
      <div className="text-center p-4">Cargando y procesando archivos...</div>
    );
  }

  if (directorioQuery.isError || sumaTotalQuery.isError) {
    const errorMessage = directorioQuery.isError
      ? directorioQuery.error instanceof Error
        ? directorioQuery.error.message
        : "Error desconocido"
      : sumaTotalQuery.error instanceof Error
      ? sumaTotalQuery.error.message
      : "Error desconocido";

    return <div className="text-red-600 p-4">Error: {errorMessage}</div>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Suma de Montos</h1>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">
          Archivos procesados: {directorioQuery.data?.length || 0}
        </h2>
        <ul className="list-disc pl-5 mt-2">
          {directorioQuery.data?.map((archivo, index) => (
            <li key={index} className="text-gray-700">
              {archivo}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-green-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold">Suma total de montos:</h2>
        <p className="text-3xl font-bold text-green-700">
          {sumaTotal.toLocaleString("es", {
            style: "currency",
            currency: "USD", // Cambia a la moneda que necesites
          })}
        </p>
      </div>
    </div>
  );
};

export default Expenses;
