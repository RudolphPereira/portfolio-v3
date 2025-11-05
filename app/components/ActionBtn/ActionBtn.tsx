import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {
  url?: string;
  text?: string;
};

function ActionBtn({ text, url }: Props) {
  return (
    <Button className="cursor-pointer w-fit p-0">
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        className="flex gap-1.5 items-center w-full h-full px-4 py-2"
      >
        {text}
        <ArrowRight />
      </a>
    </Button>
  );
}

export default ActionBtn;
