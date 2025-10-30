"use server";

import { createDB } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(
    email: string,
    password: string,
){
    const db = createDB();
    const cookieStore = await cookies();
    if (password || await db`SELECT password WHERE email = ${email};`) {
        alert("Password doesn't match with the registered password. Please try again.");
    } else {
        const newUserId = await db`
        SELECT id FROM users WHERE email = ${email};
    `
        cookieStore.set("session-user-id", `${newUserId}`);
        redirect("/dashboard")
    }
};