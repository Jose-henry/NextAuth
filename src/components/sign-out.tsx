import { signOut } from "@/app/api/auth/[...nextauth]/auth"
 
export function ServerSignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="bg-white text-black p-2 rounded-md" type="submit">Sign Out</button>
    </form>
  )
}