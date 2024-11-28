"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { BotIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";
import { generateAiReport } from "../_actions/generate-ai-report";

interface AiReportButtonProps {
  month: string;
}

const AiReportButton = ({ month }: AiReportButtonProps) => {
  const [report, setReport] = useState<string | null>();
  const [reportIsLoading, setReportIsLoading] = useState(false);

  const handleGenerateReportClick = async () => {
    try {
      setReportIsLoading(true);
      const aiReport = await generateAiReport({ month });
      setReport(aiReport);
    } catch (error) {
      console.error(error);
    } finally {
      setReportIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          Relatório AI
          <BotIcon />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Relatório IA</DialogTitle>

          <DialogDescription>
            Use inteligencia artificial para gerar um relatórios com insights
            sobre suas finanças.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="prose max-h-[450px] w-full text-white prose-h3:text-white prose-h4:text-white prose-strong:text-white">
          <Markdown className="w-full">{report}</Markdown>
        </ScrollArea>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>

          <Button
            onClick={handleGenerateReportClick}
            disabled={reportIsLoading}
          >
            {reportIsLoading && <Loader2Icon className="animate-spin" />}
            Gerar relatório
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AiReportButton;
