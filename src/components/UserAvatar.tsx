import type { Session } from "next-auth"
import Image from "next/image"
 


export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
export function UserAvatar({ session }: { session: Session | null }) {
  return (
    <div>
      <Image
        src={session?.user?.image ?? "https://source.boringavatars.com/marble/120"}
        alt="User Avatar" width={400} height={400} placeholder="blur" blurDataURL={session?.user?.image ?? "https://source.boringavatars.com/marble/120"} loader={customLoader}
      />
    </div>
  )
}