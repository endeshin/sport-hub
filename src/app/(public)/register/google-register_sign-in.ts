"use server";

import { signIn } from "@/app/api/auth/[...nextauth]/auth";

export const googleRegister = async () => {
    try {
    await signIn('google', { callbackUrl: '/dashboard' });
  } catch (error) {
    console.error('Google sign-in failed:', error);
    throw error;
  }
};