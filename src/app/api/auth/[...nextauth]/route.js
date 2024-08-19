// import pb from '@/lib/pocketbase'

// export async function POST(req) {

//     const { identity, password } = await req.json();
//     console.log(identity, password)

//     try {
//         const auth = await pb.collection('users').authWithPassword(
//             identity,
//             password
//         )

//         console.log("isValid: ", pb.authStore.isValid);
//         console.log("token: ", pb.authStore.token);
//         console.log("model: ", pb.authStore.model.id);

//         return new Response(JSON.stringify(auth), { status: 200 })
//     } catch (error) {
//         return new Response(JSON.stringify({ error: error.message }), { status: 400 })
//     }
// }

import CredentialsProvider from "next-auth/providers/credentials"

const authOption = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const res = await fetch("/your/endpoint", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

                if (res.ok && user) {
                    return user
                }
                return null
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };