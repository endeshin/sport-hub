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
    await db`INSERT INTO users VALUES (${email}, ${username}, ${password})`;
    const newUserId = await db`
        SELECT id FROM users WHERE email = ${email};
    `
    cookieStore.set("session-user-id", `${newUserId}`);
    redirect("/dashboard")
};