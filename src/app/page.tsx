// import { Roboto } from 'next/font/google'

import Image from 'next/image'
import Link from 'next/link'

// const Roboto = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <header>hello world</header>
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
      <main></main>
    </div>
  )
}
