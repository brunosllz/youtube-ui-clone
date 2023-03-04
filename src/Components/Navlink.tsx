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
  isShort?: boolean
}

export function Navlink({ children, title, href, isShort }: NavlinkProps) {
  const path = usePathname()

  const currentRoute = path === href

  return (
    <>
      {isShort ? (
        <Link
          href={href}
          className={clsx(
            'flex flex-col items-center gap-1 py-4 rounded-md hover:bg-zinc-600',
          )}
        >
          <IconContext.Provider
            value={{
              weight: currentRoute ? 'fill' : 'regular',
            }}
          >
            <Slot className={clsx('w-5 h-5 fill-white')}>{children}</Slot>
          </IconContext.Provider>

          <span className="text-[0.625rem]">{title}</span>
        </Link>
      ) : (
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
            <Slot className={clsx('w-5 h-5 fill-white')}>{children}</Slot>
          </IconContext.Provider>

          {title}
        </Link>
      )}
    </>
  )
}
