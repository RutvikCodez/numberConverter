import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Universal Number Converter | Binary, Decimal, Octal, Hexadecimal, and Complements",
  description: "Easily convert numbers between binary, decimal, octal, and hexadecimal systems, including 9's, 10's, 1's and 2's complements. Use our intutive number converter tool for accurate and quick conversions, perfect for students, developers and engineers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
