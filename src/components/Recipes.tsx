// src/App.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import sendPromptToChatGPT from "@/lib/sendPromptToChatGPT";
import { CheckCircleIcon, ClipboardCopyIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { YoutubeTranscript } from "youtube-transcript";
import Local from "./Local";

interface TranscriptItem {
  text: string;
}

const App: React.FC = () => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [transcript, setTranscript] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [openaiApiKey, setOpenaiApiKey] = useState<string>();

  useEffect(() => {
    const savedValue = localStorage.getItem("openaiApiKey");
    if (savedValue) {
      setOpenaiApiKey(savedValue);
    }
  });

  const getVideoId = (url: string): string | null => {
    const regExp =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const fetchTranscript = async (videoId: string): Promise<string | null> => {
    try {
      const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
      const fullTranscript = transcriptData
        .map((item: TranscriptItem) => item.text)
        .join(" ");
      return fullTranscript;
    } catch (error) {
      console.error("Error fetching transcript: ", error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const videoId = getVideoId(youtubeUrl);
    if (!videoId) {
      alert("Por favor, ingresa un enlace válido de YouTube.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setTranscript(null);
    setTitle(null);
    setIsCopied(false);

    try {
      const transcriptText = await fetchTranscript(videoId);
      if (transcriptText) {
        setTranscript(transcriptText);
        const videoTitle = "Título de la receta"; // Esto se puede mejorar para obtener el título real del video
        setTitle(videoTitle);

        // Copiar automáticamente al portapapeles
        const formatText = `Quiero un resumen de la receta con sus ingredientes. El link es ${youtubeUrl}. El formato de salida quiero que sea:

<Titulo que tenga sentido>

Link: ${youtubeUrl}

Ingredientes

<lista de ingredientes>

Instrucciones

<pasos de la receta>

La transcripción es:

${transcriptText}
`;

        navigator.clipboard.writeText(formatText);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
        const recipe = await sendPromptToChatGPT({
          prompt: formatText,
          apiKey: openaiApiKey,
        });
        console.log("🚀 ~ handleSubmit ~ recipe:", recipe);
      } else {
        setError("No se pudo obtener el transcript del video.");
      }
    } catch (error) {
      setError("Ocurrió un error al procesar la solicitud.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        YouTube Recipe Transcript Extractor
      </h1>
      {/* Descripcion */}
      <p className="text-center text-gray-600">
        Obtiene el prompt para que una IA te extraiga la receta
      </p>
      <Local inputName="openaiApiKey" />
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <Input
          type="text"
          placeholder="Introduce el enlace del video de YouTube"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Obtener Transcript"}
        </Button>
      </form>

      {isLoading && <p className="text-center mt-4">Cargando transcript...</p>}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}

      {transcript && (
        <Card className="mt-6 max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              Link:{" "}
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {youtubeUrl}
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h2 className="font-semibold">Transcript:</h2>
            <p className="whitespace-pre-line">{transcript}</p>

            <Button
              className="mt-4"
              onClick={() => navigator.clipboard.writeText(transcript || "")}
            >
              <ClipboardCopyIcon className="w-5 h-5 mr-2" />
              "Copiar Transcript"
            </Button>

            {isCopied && (
              <div className="flex items-center space-x-2 mt-2 text-green-600">
                <CheckCircleIcon className="w-5 h-5" />
                <span>Formato copiado al portapapeles</span>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default App;
