import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        Credentials ({
            id: "credentials",
            name: "Credentials",
            credentials:{
                email:{
                    label:"Email",
                    type: "text",
                },
                password: {
                    label:"password",
                    type:"password"
                },
            }
            async authorize(credentails)
        })
    ]
})