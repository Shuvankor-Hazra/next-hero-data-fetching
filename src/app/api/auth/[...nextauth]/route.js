import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your email",
          required: true,
        },

        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
          required: true,
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }

        if (email) {
          const db = await connectDB();
          const currentUser = await db.collection("users").findOne({ email });

          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

// const users = [
//   {
//     id: 1,
//     name: "Shuvankor Hazra",
//     email: "sh@gmail.com",
//     password: "password",
//     type: "admin",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: 2,
//     name: "Sagar Hazra",
//     email: "s@gmail.com",
//     password: "password",
//     type: "moderator",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: 3,
//     name: "Mouma Hazra",
//     email: "m@gmail.com",
//     password: "password",
//     type: "member",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: 4,
//     name: "Rishov Hazra",
//     email: "rishov@gmail.com",
//     password: "password",
//     type: "member",
//     image: "https://picsum.photos/200/300",
//   },
// ];

export { handler as GET, handler as POST };
