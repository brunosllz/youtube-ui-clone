import { SidebarContext } from '@/contexts/SidebarContext'
import { useContextSelector } from 'use-context-selector'

export function useShortSidebar() {
  const context = useContextSelector(SidebarContext, (context) => {
    return context
  })

  return context
}
