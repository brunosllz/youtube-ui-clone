import { Compass, House, Play } from 'phosphor-react'
import { Navlink } from '../Navlink'

export function ShortSidebar() {
  return (
    <nav className="flex flex-col py-3">
      <Navlink title="Home" href="/" isShort={true}>
        <House />
      </Navlink>

      <Navlink title="Explore" href="/explore" isShort={true}>
        <Compass />
      </Navlink>

      <Navlink title="Subscriptions" href="/subscriptions" isShort={true}>
        <Play />
      </Navlink>
    </nav>
  )
}
