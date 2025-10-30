import { cookies } from "next/headers";

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

  return userId;
}
