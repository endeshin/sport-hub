import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
 providers: [
  GoogleProvider({
   clientId: process.env.GOOGLE_ID,
   clientSecret: process.env.GOOGLE_SECRET,
  }),
 ],
 secret: process.env.NEXTAUTH_SECRET,
 pages: {
    signIn: '/auth/prihlasenie',
    signOut: '/auth/odhlasenie',
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Redirect to home page after sign-in
      return baseUrl || url; // baseUrl is automatically set from NEXTAUTH_URL in .env
    },
  },
};

export default NextAuth(authOptions);
