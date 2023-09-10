import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const options = {
    providers: [
        GoogleProvider({
            clientId: "909800202447-er6ssdo4s82c61f848udnde953htt6as.apps.googleusercontent.com",
            clientSecret: "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",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
}

export default NextAuth(options)