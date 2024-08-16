"use client";
import React from "react";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import { LoadingSpinner } from "../loadingSpinner/LoadingSpinner";
import { LiveCursorProvider } from "../liveCursorProvider/LiveCursorProvider";

export function LiveBlocksRoomProvider({
  children,
  roomId,
}: {
  children: React.ReactNode;
  roomId: string;
}) {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY) {
    throw new Error("Missing NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY");
  }
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={<LoadingSpinner />}>
        <LiveCursorProvider>{children}</LiveCursorProvider>
      </ClientSideSuspense>
    </RoomProvider>
  );
}
