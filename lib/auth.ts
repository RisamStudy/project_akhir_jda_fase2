import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) return null;
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) return null;
        return { id: user.id.toString(), name: user.name, email: user.email };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Saat user login, inject role ke dalam token JWT
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });
        (token as any).role = dbUser?.role;
      }
      return token;
    },

    async session({ session, token }) {
      // Saat session dibuat, tambahkan role ke session.user
      if (session.user) {
        session.user.role = (token as any).role;
      }
      return session;
    },
  },
};
