import { NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/auth";


export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname !== "/sign-in") {
      const signInUrl = new URL("/sign-in", req.url)
      signInUrl.searchParams.set("callbackUrl", req.url)
      return NextResponse.redirect(signInUrl)
    }
  })
  
  export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }








//export { auth as middleware } from "@/app/api/auth/[...nextauth]/auth"  use this if you are using nextAuth built in sign-in page