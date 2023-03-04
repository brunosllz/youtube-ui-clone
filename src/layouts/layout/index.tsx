import { ReactNode } from 'react'
import { useShortSidebar } from '@/hooks/useShortSidebar'
import clsx from 'clsx'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { isShortSidebar } = useShortSidebar()

  return (
    <div
      className={clsx('flex flex-[1_1_auto] overflow-hidden pt-[3.625rem]', {
        'pl-[240px]': !isShortSidebar,
        'pl-[70px]': isShortSidebar,
      })}
    >
      <div className="flex flex-[1_1_auto] overflow-hidden">
        <div className="flex flex-[1_1_auto] h-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
