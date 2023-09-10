export {default} from 'next-auth/middleware'

export const config = {
    matcher: [
        "/profile",
        "/profile/:path*",
        "/post/:path*"
    ],
    redirect: "/profile",
}