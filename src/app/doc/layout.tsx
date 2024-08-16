import { LiveBlocksProvider } from '@/components/liveBlocksProvider/LiveblocksProvider'
import React, { Children } from 'react'

export default function PageLayout({children}: {children: React.ReactNode}) {
  return (
    <LiveBlocksProvider>
      {children}
    </LiveBlocksProvider>
  )
}
