export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const userId = checkAuth();

  return (
    {children}
  );
}