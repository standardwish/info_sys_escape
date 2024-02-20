import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBar from "./components/navigation-bar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "소트",
  description: "정시템 짱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="app">
          <NavigationBar />
          {children}
        </div>
      </body>
    </html>
  );
}
