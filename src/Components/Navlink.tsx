'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { IconContext } from 'phosphor-react'

interface NavlinkProps {
  title: string
  children: ReactNode
  href: string
}

export function Navlink({ children, title, href }: NavlinkProps) {
  const path = usePathname()

  const currentRoute = path === href

  return (
    <Link
      href={href}
      className={clsx(
        'flex items-center gap-6 py-2 px-6 rounded-md hover:bg-zinc-600',
        {
          'bg-zinc-700': currentRoute,
        },
      )}
    >
      <IconContext.Provider
        value={{
          weight: currentRoute ? 'fill' : 'regular',
        }}
      >
        <Slot className={clsx('w-[1.125rem] h-[1.125rem] fill-white')}>
          {children}
        </Slot>
      </IconContext.Provider>

      {title}
    </Link>
  )
}
