import { assertAuth } from "../../lib/sessionAuth";

export function AuthGuard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  assertAuth();
  return children;
}
