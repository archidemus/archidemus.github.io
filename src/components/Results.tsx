// src/App.tsx
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClipboardCopyIcon } from "lucide-react";

export function Results({
  transcript,
  recipe,
  isLoadingRecipe,
  isLoadingTranscript,
  errorRecipe,
  errorTranscript,
}: {
  transcript?: null | string;
  recipe?: string;
  isLoadingRecipe?: boolean;
  isLoadingTranscript?: boolean;
  errorRecipe?: null | string;
  errorTranscript?: null | string;
}) {
  function copyToClipboard({ text }: { text?: null | string }) {
    if (!text) return;
    navigator.clipboard.writeText(text);
  }
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="Recipe"
    >
      <AccordionItem value="transcript">
        <AccordionTrigger>Transcript</AccordionTrigger>
        <AccordionContent>
          {isLoadingTranscript && "Cargando transcript..."}
          {transcript}

          <Button
            className="mt-4"
            disabled={!transcript}
            onClick={() => copyToClipboard({ text: transcript })}
          >
            <ClipboardCopyIcon className="w-5 h-5 mr-2" />
            "Copiar Transcript"
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Recipe</AccordionTrigger>
        <AccordionContent>
          {isLoadingRecipe && "Cargando receta..."}
          {recipe}
          <Button
            className="mt-4"
            disabled={!recipe}
            onClick={() => copyToClipboard({ text: recipe })}
          >
            <ClipboardCopyIcon className="w-5 h-5 mr-2" />
            "Copiar Recipe"
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
