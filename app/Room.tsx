"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react";

export function Room({ children, roomId }: { children: ReactNode; roomId: string }) {
  return (
    <LiveblocksProvider publicApiKey="pk_prod_NRXq1kSWGTHHr7Ph_gPrz9s08itLHemKG86kfnIO7xeHgzAYa2FjDIcgOrXy0HU7">
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
