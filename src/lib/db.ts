import { neon } from "@neondatabase/serverless";

export function createDB() {
    const db = neon(`${process.env.DATABASE_URL}`);
    return db;
}