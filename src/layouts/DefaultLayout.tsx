'use client'

import { ReactNode } from 'react'
import { SidebarContextProvider } from '@/contexts/SidebarContext'

import { Header } from '@/Components/Header'
import { Sidebar } from '@/Components/Sidebar'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <SidebarContextProvider>
      <Header />
      <div className="flex pt-[3.6rem]">
        <Sidebar />
        {children}
      </div>
    </SidebarContextProvider>
  )
}
