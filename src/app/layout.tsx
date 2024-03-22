import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskList",
  description: "Lista de Tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT">
      <body className="#fcfdfd">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
