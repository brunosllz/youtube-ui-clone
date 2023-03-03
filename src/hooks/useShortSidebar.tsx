import { SidebarContext } from '@/contexts/SidebarContext'
import { useContext } from 'react'

export function useShortSidebar() {
  const context = useContext(SidebarContext)

  return context
}
