import { NextRequest } from "next/server";
import NextAuth from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export async function GET(req: NextRequest) {
  return await NextAuth(authOptions)(req);
}

export async function POST(req: NextRequest) {
  return await NextAuth(authOptions)(req);
}