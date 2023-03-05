'use client'

import { useShortSidebar } from '@/hooks/useShortSidebar'

import Image from 'next/image'
import {
  Bell,
  List,
  MagnifyingGlass,
  Microphone,
  SquaresFour,
  VideoCamera,
} from 'phosphor-react'
import logo from '../assets/logo.svg'

export function Header() {
  const { setShortSidebar } = useShortSidebar()

  function handleSetShortSidebar() {
    setShortSidebar()
  }

  return (
    <header className="w-full py-2 px-6 flex items-center justify-between bg-[#212121] fixed">
      <div className="flex gap-6 items-center">
        <button onClick={handleSetShortSidebar}>
          <List size={24} />
        </button>

        <Image src={logo} alt="youtube" />
      </div>
      <div className="flex items-center gap-1 min-w-[470px]">
        <div className="flex items-center rounded-sm w-full border border-[#303030]">
          <form className="flex items-center w-full">
            <input
              placeholder="Search"
              className="h-10 w-full bg-[#121212] py-[0.625rem] px-2 placeholder:text-[#AAAAAA]"
            />
            <button className="w-16 bg-[#303030] h-10 flex items-center justify-center">
              <MagnifyingGlass size={18} />
            </button>
          </form>
        </div>

        <button className="p-2 bg-black rounded-full">
          <Microphone size={18} weight="fill" />
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-3">
          <VideoCamera size={22} />
          <SquaresFour size={22} />
          <Bell size={22} />
        </div>

        <Image
          src="https://www.github.com/brunosllz.png"
          alt="bruno Luiz"
          quality={100}
          width={32}
          height={32}
        />
      </div>
    </header>
  )
}
