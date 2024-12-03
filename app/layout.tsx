import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odoh Victor - Portfolio",
  description:
    "Personal portfolio of Odoh Victor, App Developer and Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
          {children}
        </div>
      </body>
    </html>
  );
}
