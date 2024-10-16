// src/App.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import sendPromptToChatGPT from "@/lib/sendPromptToChatGPT";
import React, { useEffect, useState } from "react";
import { YoutubeTranscript } from "youtube-transcript";
import Local from "./Local";
import { Results } from "./Results";

interface TranscriptItem {
  text: string;
}

const App: React.FC = () => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [transcript, setTranscript] = useState<string | null>(null);
  const [isLoadingTranscript, setIsLoadingTranscript] =
    useState<boolean>(false);
  const [isLoadingRecipe, setIsLoadingRecipe] = useState<boolean>(false);
  const [errorTranscript, setErrorTranscript] = useState<string | null>(null);
  const [errorRecipe, setErrorRecipe] = useState<string | null>(null);
  const [openaiApiKey, setOpenaiApiKey] = useState<string>();
  const [recipe, setRecipe] = useState<string>();

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

    setIsLoadingTranscript(true);
    setErrorTranscript(null);
    setErrorRecipe(null);
    setTranscript(null);

    try {
      const transcriptText = await fetchTranscript(videoId);
      if (transcriptText) {
        setTranscript(transcriptText);
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
        const recipe = await sendPromptToChatGPT({
          prompt: formatText,
          apiKey: openaiApiKey,
        });
        // If is string then setRecipe
        if (typeof recipe === "string") {
          setRecipe(recipe);
        }
      } else {
        setErrorTranscript("No se pudo obtener el transcript del video.");
      }
    } catch (error) {
      setErrorTranscript("Ocurrió un error al procesar la solicitud.");
      console.error(error);
    } finally {
      setIsLoadingTranscript(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        YouTube Recipe Transcript Extractor
      </h1>
      <p className="text-center text-gray-600">
        Obtiene el prompt para que una IA te extraiga la receta
      </p>
      <Local inputName="openaiApiKey" label="OpenAI Api Key" />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Introduce el enlace del video de YouTube"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
        />
        <Button type="submit" disabled={isLoadingTranscript}>
          {isLoadingTranscript ? "Cargando..." : "Obtener Transcript"}
        </Button>
      </form>
      <Results
        transcript={transcript}
        recipe={recipe}
        isLoadingRecipe={isLoadingRecipe}
        isLoadingTranscript={isLoadingTranscript}
        errorRecipe={errorRecipe}
        errorTranscript={errorTranscript}
      />
    </div>
  );
};

export default App;
