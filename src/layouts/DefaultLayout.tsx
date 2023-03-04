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
      <Sidebar />

      <div className="flex flex-[1_1_auto] overflow-hidden pt-[3.625rem] pl-[240px]">
        <div className="flex flex-[1_1_auto] overflow-hidden">
          <div className="flex flex-[1_1_auto] h-full overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </SidebarContextProvider>
  )
}
