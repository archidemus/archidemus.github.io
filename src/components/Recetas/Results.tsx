// src/App.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ClipboardCopyIcon } from "lucide-react";
import Spinner from "../Spinner";
import Markdown from "react-markdown";

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
        <AccordionTrigger className="flex justify-start">
          <span className="flex gap-2 mr-2">
            Transcript {isLoadingTranscript && <Spinner />}
          </span>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          {transcript}
          <Button
            className="mt-4"
            disabled={!transcript}
            onClick={() => copyToClipboard({ text: transcript })}
          >
            <ClipboardCopyIcon className="w-5 h-5 mr-2" />
            Copiar transcripción
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="flex justify-start">
          <span className="flex gap-2 mr-2">
            Receta {isLoadingRecipe && <Spinner />}
          </span>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          <Markdown>{recipe}</Markdown>
          <Button
            className="mt-4"
            disabled={!recipe}
            onClick={() => copyToClipboard({ text: recipe })}
          >
            <ClipboardCopyIcon className="w-5 h-5 mr-2" />
            Copiar receta
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
