
import { signIn } from "@/app/api/auth/[...nextauth]/auth"


export default function ServerSignIn({ searchParams }: { searchParams: { callbackUrl?: string } }) {
  const callbackUrl = searchParams.callbackUrl || '/'

  return (
      <div className="flex justify-center items-center h-screen bg-black gap-3">
        <form
          className="bg-gray-800 p-6 rounded shadow-md"
          action={async () => {
              "use server"
              await signIn("github", { redirectTo: callbackUrl })
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Sign In</h2>
          <button
            type="submit"
            className="w-full bg-white hover:bg-amber-100 text-black font-bold py-2 px-4 rounded"
          >
            Sign in with GitHub
          </button>
        </form>
        <form
          action={async () => {
            "use server"
            await signIn("google", { redirectTo: callbackUrl })
          }}
          className="bg-gray-800 p-6 rounded shadow-md"
        >
          <button className="w-full bg-white hover:bg-amber-100 text-black font-bold py-2 px-4 rounded" type="submit">Sign in with Google</button>
        </form>

        <form
          action={async (formData: FormData) => {
            "use server"
            const email = formData.get('email') as string
            const password = formData.get('password') as string
            await signIn("credentials", { email, password, redirectTo: callbackUrl })
          }}
          className="bg-gray-800 p-6 rounded shadow-md"
        >
          <label>
            Email
            <input name="email" type="email" />
          </label>
          <label>
            Password
            <input name="password" type="password" />
          </label>
          <button className="w-full bg-white hover:bg-amber-100 text-black font-bold py-2 px-4 rounded">Sign In</button>
        </form>
      </div>
  );
}