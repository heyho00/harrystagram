import {PlusIcon} from "@heroicons/react/solid"
import Image from "next/image"

export default function Story({img, username, isUser}) {
console.log(img)
  return (
  <div className="relative group cursor-pointer">
      <Image width="100%" height="100%" className="rounded-full p-[1.5px] border-red-500 border-2 group-hover:scale-110 transition-transform duration-200 ease-out"  src={img} alt={username} />
      {isUser && <PlusIcon className="h-6 absolute top-4 left-4 text-gray-400"/>}
      <p className="text-xs w-14 truncate">{username}</p>
  </div>
  )
}
