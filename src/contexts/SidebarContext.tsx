import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'

interface SidebarContextProps {
  isShortSidebar: boolean
  setShortSidebar: () => void
}

export const SidebarContext = createContext({} as SidebarContextProps)

interface SidebarContextProviderProps {
  children: ReactNode
}

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const [isShortSidebar, setIsShortSidebar] = useState(false)

  const setShortSidebar = useCallback(() => {
    setIsShortSidebar((state) => {
      return !state
    })
  }, [])

  return (
    <SidebarContext.Provider value={{ setShortSidebar, isShortSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
