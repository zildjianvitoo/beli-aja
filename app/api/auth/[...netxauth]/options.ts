import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/prismadb";
import bcrypt from "bcrypt";
import axios from "axios";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "Email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },

      //function ini bakal error jadi declare tipenya dlu di folder types
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email atau katasandi tidak boleh kosong");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.email) {
          throw new Error("Email tidak ditemukan");
        }

        const isCorrectedPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isCorrectedPassword) {
          throw new Error("Katasandi salah");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/masuk",
    error: "/masuk",
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
