'use client'
import { useSession } from "next-auth/react"
import { UserAvatar } from "./UserAvatar"

export default function CLientComponent() {
    const { data: session } = useSession()
   
    return (
        <>
      {session && <div className="text-red-500">
        <h1>This is a client compoment showing the user email: {session?.user?.email}</h1>
      </div>}
       {session && <UserAvatar session={session} />}
       </>
    )
  }

  //this client component can only work if layout is wrapped with SessionProvider