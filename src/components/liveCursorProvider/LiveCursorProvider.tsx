'use client'
import { useMyPresence, useOthers } from '@liveblocks/react/suspense'
import React, { PointerEvent } from 'react'
import { FollowPointer } from '../followPointer/FollowPointer'


export function LiveCursorProvider({children}: {children: React.ReactNode}) {
  const [myPresence, updateMyPresence] = useMyPresence()
  const others = useOthers()


  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const cursor = {
      x: Math.floor(e.pageX), y: Math.floor(e.pageY)
    }
    updateMyPresence({cursor})
  }

  const handlePointerLeave = () => {
    updateMyPresence({cursor: null})
  }

  return (
    <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      {others.filter(other => other.presence.cursor !== null).map(user => {
        const { connectionId, presence, info } = user
        return (
          <FollowPointer
            key={connectionId}
            info={info}
            x={presence.cursor?.x ?? 0}
            y={presence.cursor?.y ?? 0}
          />
        )
      })}
      {children}
      </div>

  )
}

