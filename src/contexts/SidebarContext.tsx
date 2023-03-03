import { createContext, ReactNode, useState } from 'react'

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

  function setShortSidebar() {
    setIsShortSidebar((state) => {
      return !state
    })
  }

  return (
    <SidebarContext.Provider value={{ setShortSidebar, isShortSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
