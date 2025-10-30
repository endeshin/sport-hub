import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export const authOptions = {
 providers: [
    GoogleProvider({ //umožní prihlasovanie skrz Google
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
 ],
 secret: process.env.AUTH_SECRET,
 pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Redirect to home page after sign-in
      return baseUrl || url; // baseUrl is automatically set from NEXTAUTH_URL in .env
    },
  },
};

export default NextAuth(authOptions);
