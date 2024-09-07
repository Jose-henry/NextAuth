import { auth } from "../api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";



export default async function Page() {
    const session = await auth()
    if (!session) {
        redirect("/sign-in")
    }
    return (
        <>
        <h1 className="text-white">Can only be seen by logged in users</h1>
        <div className="text-white font-mono">Protected ROUTE with 'const session = await auth'. </div>
        </>
    )
}



