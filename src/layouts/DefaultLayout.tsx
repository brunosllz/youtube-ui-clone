'use client'

import { ReactNode } from 'react'
import { SidebarContextProvider } from '@/contexts/SidebarContext'

import { Header } from '@/Components/Header'
import { Sidebar } from '@/Components/Sidebar'
import { Layout } from './layout'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <SidebarContextProvider>
      <Header />
      <Sidebar />

      <Layout>{children}</Layout>
    </SidebarContextProvider>
  )
}
