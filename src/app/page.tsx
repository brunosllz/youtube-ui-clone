'use client'

import Link from 'next/link'
import Image from 'next/image'

import logo from '../assests/logo.svg'
import {
  List,
  MagnifyingGlass,
  Microphone,
  VideoCamera,
  SquaresFour,
  Bell,
} from 'phosphor-react'

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <header className="w-full py-2 px-4 flex items-center justify-between bg-[#212121]">
        <div className="flex gap-2 items-center">
          <List size={24} />
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
            <VideoCamera size={24} />
            <SquaresFour size={24} />
            <Bell size={24} />
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
      <aside>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/">Explore</Link>
          <Link href="/">Subscriptions</Link>
        </nav>
        <nav>
          <Link href="/">Library</Link>
          <Link href="/">History</Link>
          <Link href="/">Your Videos</Link>
          <Link href="/">Watch Later</Link>
          <Link href="/">Liked Videos</Link>
        </nav>
        <nav>
          <strong>Subinscriptions</strong>

          <Link href="/">
            <Image
              src="https://www.github.com/brunosllz.png"
              alt="bruno Luiz"
              width={24}
              height={24}
            />

            <span>Bruno Luiz</span>
          </Link>
        </nav>
      </aside>
      <div>
        <a href="#" />
        <a href="#" />
        <a href="#" />
        <a href="#" />
        <a href="#" />
      </div>

      <main>
        <div>
          <div></div>
          <div>
            <Image
              src="https://www.github.com/brunosllz.png"
              alt="bruno Luiz"
              width={24}
              height={24}
            />
            <div>
              <strong>
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
              </strong>
              <div>
                <span>Gouse</span>
                <span>15K Views .1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
