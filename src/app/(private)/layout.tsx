import { AuthGuard } from "./AuthGuard";
import { assertAuth } from "../../lib/sessionAuth";
import AuthProvider from "./AuthProvider";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

      if (assertAuth() != null) {
          return(<AuthGuard>{children}</AuthGuard>);
      } else {
          return(<AuthProvider>{children}</AuthProvider>);
      }
}