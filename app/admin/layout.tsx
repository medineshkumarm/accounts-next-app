import NavBar1 from "@/components/nav-bars/nav-bar-variants";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 bg-warning text-warning-foreground">
      <NavBar1 />
      {children}
    </div>
  );
}
