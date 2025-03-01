import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 justify-between">
          <aside className="w-64 bg-gradient-to-t from-slate-900 to-slate-700 bottom-0">
            <Nav />
          </aside>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
