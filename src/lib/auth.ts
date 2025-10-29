import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkAuth() {
  const cookieStore = await cookies();

  const sessionUserId = cookieStore.get("session-user-id");

  console.log("Session user id:", sessionUserId);

  if (sessionUserId == null) {
    return null;
  }

  const userId = parseInt(sessionUserId.value);

  if (isNaN(userId)) {
    return null;
  }

  return userId;
}

export function assertAuth() {
  const userId = checkAuth();

  if (userId == null) {
    redirect("/login");
  }

  return userId;
}
