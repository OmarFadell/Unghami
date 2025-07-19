// src/app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    //   authorization: {
    //     params: {
    //       scope: "user-read-email user-read-private user-library-read user-library-modify playlist-read-private playlist-modify-public playlist-modify-private",
    //     },
    //   },
    }),
  ],
  // Optional: add callbacks, pages, etc.
});

export { handler as GET, handler as POST };
