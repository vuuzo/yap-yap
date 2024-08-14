import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: {
    template: "Yap Yap - %s",
    default: "Yap Yap",
  },
  description: "My yapping is public now. Thoughts and other.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en' className='scroll-pt-5'>
      <body
        className={`${GeistSans.className} ${GeistMono.variable}  min-h-dvh`}
      >
        <ThemeProvider attribute='class'>
          <div className='px-5 pb-20 mx-auto max-w-xl flex flex-col h-full min-h-screen'>
            <Navigation />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
