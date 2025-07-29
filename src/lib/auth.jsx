import api from "./api";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data } = await api.post("auth/login", credentials);
          return {
            ...data.data,
            id: data.data.id.toString(),
            isVerified2FA: false,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session?.user) {
        token.user = session.user;
      }
      if (user) token.user = user;
      return token;
    },
  },
};
