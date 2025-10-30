"use server";

import { createDB } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function register(
    email: string,
    username: string,
    password: string,
){
    const db = createDB();
    const cookieStore = await cookies();
    const newUserId = await db`INSERT INTO users (email, username, password) VALUES (${email}, ${username}, ${password}) RETURNING id`;
    cookieStore.set("session-user-id", `${newUserId}`);
    redirect("/dashboard")
};