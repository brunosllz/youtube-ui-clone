'use client'

import { VideoCard } from '@/Components/VideoCard'

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-6 h-full overflow-hidden">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <VideoCard
            key={index}
            title=" Lorem ipsum dolor sit amet, consecte adipiscing elit."
            channelAvatar="https://www.github.com/brunosllz.png"
            channelName="Gouse"
            postedDate="1 week ago"
            views="15k"
          />
        )
      })}
    </div>
  )
}
