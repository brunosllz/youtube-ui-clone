import Image from 'next/image'

import thumbYoutube from '../assets/thumb-youtube.png'

interface VideoCardProps {
  thumb?: string
  title: string
  channelAvatar: string
  channelName: string
  views: string
  postedDate: string
}

export function VideoCard({
  channelName,
  postedDate,
  thumb,
  title,
  views,
  channelAvatar,
}: VideoCardProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-full">
        <Image
          src={thumbYoutube}
          alt="thumb youtube"
          width={276}
          height={155}
          className="object-cover aspect-auto rounded-lg w-full h-full"
        />
      </div>
      <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
        <div>
          <Image
            src={channelAvatar}
            alt={channelName}
            width={36}
            height={36}
            className="object-cover aspect-auto"
          />
        </div>
        <div className="flex flex-col gap-[0.375rem]">
          <strong className="text-xs leading-tight font-bold">{title}</strong>
          <div className="flex flex-col">
            <span className="text-sm text-[#AAAAAA]">{channelName}</span>
            <span className="text-sm text-[#AAAAAA]">
              <span>{views}</span> Views • <span>{postedDate}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
