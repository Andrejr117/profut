import User from "@/models/User";
import nextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";
import NextAuth from "next-auth/next";


const options = NextAuth({
    providers: [
        CredentialsProviders({
            id: "Credentials",
            name: "Credentials",
            async authorize(credentials) {
                await connect();

                try {
                    const user = await User.findOne({
                        email: credentials.email,
                    });

                    if (user) {
                        const validPassword = await bcrypt.compare(
                            credentials.senha,
                            user.senha
                        );
                        if (validPassword) {
                            return user;
                        } else {
                            throw new Error("Credenciais erradas !");
                        }
                    } else{
                        throw new Error("Credenciais erradas !");
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
    ],
    pages: {
        error: "/login"
    },
});


export { options as GET, options as POST };