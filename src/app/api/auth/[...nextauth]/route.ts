import NextAuth from 'next-auth';
import { authOptions } from './authOptions';

console.log("Loading NextAuth route handler with external auth options");

// Create and export NextAuth handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };