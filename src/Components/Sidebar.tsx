'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
  House,
  Compass,
  Play,
  ClockCounterClockwise,
  ThumbsUp,
  Clock,
  CaretDown,
} from 'phosphor-react'
import { Navlink } from './Navlink'

export function Sidebar() {
  return (
    <aside className="flex flex-col w-[240px] h-screen pr-4 bg-[#212121] overflow-y-auto fixed">
      <nav className="flex flex-col py-3 border-b border-[#303030]">
        <Navlink title="Home" href="/">
          <House />
        </Navlink>

        <Navlink title="Explore" href="/explore">
          <Compass />
        </Navlink>

        <Navlink title="Subscriptions" href="/subscriptions">
          <Play />
        </Navlink>
      </nav>

      <nav className="flex flex-col py-3 border-b border-[#303030]">
        <Navlink title="Library" href="/library">
          <Play />
        </Navlink>

        <Navlink title="History" href="/history">
          <ClockCounterClockwise />
        </Navlink>

        <Navlink title="Your Videos" href="/your-videos">
          <Play />
        </Navlink>

        <Navlink title="Watch Later" href="/watch-later">
          <Clock />
        </Navlink>

        <Navlink title="Liked Videos" href="/liked-videos">
          <ThumbsUp />
        </Navlink>
      </nav>
      <div className="flex flex-col py-3 border-b border-[#303030]">
        <strong className="text-sm font-bold text-[#AAAAAA] uppercase p-6 py-2">
          Subscriptions
        </strong>

        <nav className="flex flex-col">
          <Link href="/" className="flex items-center px-6 py-2 gap-6">
            <Image
              src="https://www.github.com/brunosllz.png"
              alt="bruno Luiz"
              width={24}
              height={24}
            />

            <span className="text-sm">Bruno Luiz</span>
          </Link>
          <Link href="/" className="flex items-center px-6 py-2 gap-6">
            <Image
              src="https://www.github.com/brunosllz.png"
              alt="bruno Luiz"
              width={24}
              height={24}
            />

            <span className="text-sm">Bruno Luiz</span>
          </Link>
          <Link href="/" className="flex items-center px-6 py-2 gap-6">
            <div className="w-6 h-6 flex items-center justify-center">
              <CaretDown size={12} />
            </div>

            <span className="text-sm">Show 13 more</span>
          </Link>
        </nav>
      </div>
    </aside>
  )
}
