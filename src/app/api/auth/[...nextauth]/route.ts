import NextAuth, {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import axios from "axios";

const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            name: "google",
            clientId: process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_CLIENTSECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
            httpOptions: {
                timeout: 10000
            }
        }),
        Credentials({
            name: "credentials",
            credentials: {
                email: {label: "email", type: "text"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials, req) {
                let user = {}

                axios.post("http://localhost:8080/user/get/name/" + credentials.email)
                    .then((data) => {
                        user = data.data;
                    })
                    .catch((err) => console.warn(err))

                console.log(user)
                return user
            }
        })
    ],
    pages: {
        signIn: '/signin',
        signOut: "/signout",
        error: "/error",
        verifyRequest: "/verify",
        newUser: "/new",
    },
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET
    },
    callbacks: {
        async signIn(user) {
            axios.post("http://localhost:8080/user/signin", {
                data: user
            })
            return true
        },
        async jwt({token, user, account}) {
            return token
        }
    }


}

const handler = NextAuth(options)

export {handler as GET, handler as POST}