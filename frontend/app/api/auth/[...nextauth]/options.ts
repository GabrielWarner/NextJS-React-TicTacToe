import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: 'Username:',
                    type: 'text',
                    placeholder: 'Enter username'
                },
                password: {
                    label: 'Password:',
                    type: 'password',
                    placeholder: 'Enter password'
                }
            },
            async authorize(credentials) {
                //where we would retrieve data
                //https://next-auth.js.org/configuration/providers/credentials
                const user = { id: '01', name: 'Gabe', password: 'password'}

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else{
                    return null
                }
            }
        })
    ],
}