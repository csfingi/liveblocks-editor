"use client";

import { useLiveblocksExtension, FloatingToolbar } from "@liveblocks/react-tiptap";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Threads } from "./Threads";

export function Editor() {
  const liveblocks = useLiveblocksExtension();

  const editor = useEditor({
    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false,
      }),
    ],
    immediatelyRender: false,
  });

  return (
    <div>
      <EditorContent editor={editor} className="editor" />
      <Threads editor={editor} />
      <FloatingToolbar editor={editor} />
    </div>
  );
}
