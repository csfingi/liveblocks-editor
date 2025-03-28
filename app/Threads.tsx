import { ClientSideSuspense } from "@liveblocks/react";
import { useThreads } from "@liveblocks/react-comments";
import {
  AnchoredThreads,
  FloatingComposer,
  FloatingThreads,
} from "@liveblocks/react-tiptap";
import { Editor } from "@tiptap/react";

export function Threads({ editor }: { editor: Editor | null }) {
  const { threads } = useThreads({ query: { resolved: false } });

  return (
    <ClientSideSuspense fallback={null}>
      <div className="anchored-threads">
        <AnchoredThreads editor={editor} threads={threads} />
      </div>
      <FloatingThreads
        editor={editor}
        threads={threads}
        className="floating-threads"
      />
      <FloatingComposer editor={editor} className="floating-composer" />
    </ClientSideSuspense>
  );
}
