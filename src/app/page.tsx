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
    <div>
      <header>
        <div>
          <List />
          <Image src={logo} alt="youtube" />
        </div>
        <div>
          <form>
            <input placeholder="Search" />
            <button>
              <MagnifyingGlass />
            </button>
          </form>

          <button>
            <Microphone />
          </button>
        </div>
        <div>
          <VideoCamera />
          <SquaresFour />
          <Bell />
          <Image
            src="https://www.github.com/brunosllz.png"
            alt="bruno Luiz"
            width={24}
            height={24}
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
