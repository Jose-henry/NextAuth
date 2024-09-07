'use client'


import { useRouter } from "next/navigation"


export default function SignInButton() {
    const router = useRouter()
    return (
        <>
        <button className="bg-white text-black p-2 rounded-md" onClick={() => router.push('/sign-in')} >Sign in</button>
        </>
    )
}