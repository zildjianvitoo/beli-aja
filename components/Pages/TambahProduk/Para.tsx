"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import cn from "@/utils/cn";
import TextEditor from "./TextEditor";

type Props = {
  setDescriptions: Dispatch<SetStateAction<any>>;
  description: string;
};

export default function Para({ setDescriptions, description }: Props) {
  const [focus, setFocus] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose w-full focus:outline-none leading-5 prose-a:text-pink-600 prose-a:font-semibold prose-a:no-underline",
      },
    },
    content: description,
  });

  const html = editor?.getHTML();

  useEffect(() => {
    setDescriptions(html);
  }, [html]);

  useEffect(() => {
    const handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setFocus(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [html]);

  return (
    <div
      className={cn("mx-auto border mt-4 rounded-xl", {
        "border-pink-500 border-2 ml-0": focus,
      })}
      ref={menuRef}
    >
      {/* <TextEditor editor={editor} /> */}
      <EditorContent
        editor={editor}
        className="p-[18px]"
        onClick={() => setFocus(true)}
      />
    </div>
  );
}
