// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'

// import thumbYoutube from '../assets/thumb-youtube.png'
// import {
//   House,
//   Compass,
//   Play,
//   ClockCounterClockwise,
//   ThumbsUp,
//   Clock,
//   CaretDown,
// } from 'phosphor-react'
// import { Header } from '../Components/Header'

export default function Home() {
  return (
    <h1>Home</h1>

    // <div className="w-full min-h-screen bg-black">
    //   {/* <Header /> */}

    //   <div className="flex h-full">
    //     <aside className="flex flex-col w-[240px] pr-4 bg-[#212121] overflow-y-auto">
    //       <nav className="flex flex-col py-3 border-b border-[#303030]">
    //         <Link href="/" className="flex items-center gap-6 py-2 px-6">
    //           <House size={18} />
    //           Home
    //         </Link>
    //         <Link href="/" className="flex items-center gap-6 py-2 px-6">
    //           <Compass size={18} />
    //           Explore
    //         </Link>
    //         <Link href="/" className="flex items-center gap-6 py-2 px-6">
    //           <Play size={18} />
    //           Subscriptions
    //         </Link>
    //       </nav>
    //       <nav className="flex flex-col py-3 border-b border-[#303030]">
    //         <Link href="/" className="flex items-center gap-6 py-2 px-6">
    //           Library
    //         </Link>
    //         <Link href="/" className="flex items-center gap-6 py-2 px-6">
    //           <ClockCounterClockwise />
    //           History
    //         </Link>
    //         <Link href="/" className="flex items-center gap-6 py-2 px-6">
    //           <Play />
    //           Your Videos
    //         </Link>
    //         <Link href="/" className="flex items-center gap-6 py-2 px-6">
    //           <Clock />
    //           Watch Later
    //         </Link>
    //         <Link href="/" className="flex items-center gap-6 py-2 px-6">
    //           <ThumbsUp />
    //           Liked Videos
    //         </Link>
    //       </nav>

    //       <div className="flex flex-col py-3 border-b border-[#303030]">
    //         <strong className="text-sm font-bold text-[#AAAAAA] uppercase p-6 py-2">
    //           Subscriptions
    //         </strong>

    //         <nav className="flex flex-col">
    //           <Link href="/" className="flex items-center px-6 py-2 gap-6">
    //             <Image
    //               src="https://www.github.com/brunosllz.png"
    //               alt="bruno Luiz"
    //               width={24}
    //               height={24}
    //             />

    //             <span className="text-sm">Bruno Luiz</span>
    //           </Link>
    //           <Link href="/" className="flex items-center px-6 py-2 gap-6">
    //             <Image
    //               src="https://www.github.com/brunosllz.png"
    //               alt="bruno Luiz"
    //               width={24}
    //               height={24}
    //             />

    //             <span className="text-sm">Bruno Luiz</span>
    //           </Link>
    //           <Link href="/" className="flex items-center px-6 py-2 gap-6">
    //             <div className="w-6 h-6 flex items-center justify-center">
    //               <CaretDown size={12} />
    //             </div>

    //             <span className="text-sm">Show 13 more</span>
    //           </Link>
    //         </nav>
    //       </div>
    //     </aside>

    //     <main className="w-full h-full">
    //       <nav className="flex items-center gap-3 px-6 py-3 border-t border-b border-[#303030] bg-[#212121]">
    //         <Link
    //           href="#"
    //           className="flex items-center justify-center text-sm px-3 py-1 bg-[#303030] border border-[#AAAAAA] rounded-2xl"
    //         >
    //           All
    //         </Link>
    //         <Link
    //           href="#"
    //           className="flex items-center justify-center text-sm px-3 py-1 bg-[#303030] border border-[#AAAAAA] rounded-2xl"
    //         >
    //           Item
    //         </Link>
    //         <Link
    //           href="#"
    //           className="flex items-center justify-center text-sm px-3 py-1 bg-[#303030] border border-[#AAAAAA] rounded-2xl"
    //         >
    //           Item
    //         </Link>
    //         <Link
    //           href="#"
    //           className="flex items-center justify-center text-sm px-3 py-1 bg-[#303030] border border-[#AAAAAA] rounded-2xl"
    //         >
    //           Item
    //         </Link>
    //         <Link
    //           href="#"
    //           className="flex items-center justify-center text-sm px-3 py-1 bg-[#303030] border border-[#AAAAAA] rounded-2xl"
    //         >
    //           Item
    //         </Link>
    //         <Link
    //           href="#"
    //           className="flex items-center justify-center text-sm px-3 py-1 bg-[#303030] border border-[#AAAAAA] rounded-2xl"
    //         >
    //           Item
    //         </Link>
    //       </nav>

    //       <div className="grid grid-cols-4 gap-4 p-6 h-full overflow-hidden">
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col w-full">
    //           <div className="w-full h-full">
    //             <Image
    //               src={thumbYoutube}
    //               alt="thumb youtube"
    //               width={276}
    //               height={155}
    //               className="object-cover aspect-auto rounded-lg w-full h-full"
    //             />
    //           </div>
    //           <div className="grid grid-cols-[48px_1fr] mt-4 items-start pr-5">
    //             <div>
    //               <Image
    //                 src="https://www.github.com/brunosllz.png"
    //                 alt="bruno Luiz"
    //                 width={36}
    //                 height={36}
    //                 className="object-cover aspect-auto"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[0.375rem]">
    //               <strong className="text-xs leading-tight font-bold">
    //                 Lorem ipsum dolor sit amet, consecte adipiscing elit.
    //               </strong>
    //               <div className="flex flex-col">
    //                 <span className="text-sm text-[#AAAAAA]">Gouse</span>
    //                 <span className="text-sm text-[#AAAAAA]">
    //                   15K Views .1 week ago
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </main>
    //   </div>
    // </div>
  )
}
