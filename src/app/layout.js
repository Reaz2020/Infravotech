import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextWave",
  description: "NextWave - IT Solutions",
  authors: [{ name: "Md Reaz Morshed" }],
  keywords: [
    "React",
    "JavaScript",
    "Next.js",
    "Web Development",
    "Programming",
    "Developer Community",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Iceland&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Iceland&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <ThemeProvider>
            <Navbar></Navbar>
            <div className="min-h-[400px]">{children}</div>
            <Footer></Footer>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
