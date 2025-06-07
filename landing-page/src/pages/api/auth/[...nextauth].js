import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // 🔒 Replace this with real DB logic
        const user = {
          id: "1",
          name: "Demo User",
          email: credentials?.email
        };

        if (credentials?.email && credentials?.password) {
          return user;
        }

        // If login fails
        return null;
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  // Optional custom pages
  pages: {
    signIn: "/signIn",
    signOut: "/"
  },

  session: {
    strategy: "jwt"
  },

  secret: process.env.NEXTAUTH_SECRET
});
