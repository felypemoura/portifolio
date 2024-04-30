import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/util/themeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lypekjkj",
  description: "sempre quis um website rápido para seu negócio? encontrou a pessoa perfeita para você!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="shortcut icon" href="https://github.com/lypekjkj.png" />
      </head>
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
