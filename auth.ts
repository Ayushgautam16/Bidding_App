import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
// @ts-ignore
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/prisma"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: PrismaAdapter(prisma),
})