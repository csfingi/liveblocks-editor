"use client";

import { useSearchParams } from "next/navigation";
import { Room } from "./Room";
import { Editor } from "./Editor";

export default function Page() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId") || "default-room";

  return (
    <Room roomId={roomId}>
      <Editor />
    </Room>
  );
}
