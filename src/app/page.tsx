import { ServerSignOut } from "@/components/sign-out";
import { auth } from "./api/auth/[...nextauth]/auth";

import CLientComponent from "@/components/clientComponent";
import SignInButton from "@/components/Sign-inButton";

export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    <>
    <div className="text-white">Home</div>
    {session && <div className="text-white">{session?.user?.name}</div>}
    <CLientComponent />
    {session && <ServerSignOut />}
    {!session && <SignInButton />}
    </>
  );
}
