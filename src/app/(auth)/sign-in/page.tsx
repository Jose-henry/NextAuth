import ServerSignIn from "@/components/sign-in";

export default function Page({
    searchParams,
}: {
    searchParams: { callbackUrl?: string };
}) {
    return (
        <div>
            <ServerSignIn searchParams={searchParams} />
        </div>
    )
}