import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";

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
      <body className={`${GeistSans.className} ${GeistMono.variable}`}>
        <ThemeProvider attribute='class'>
          <div className='grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-dvh max-w-xl mx-auto px-4'>
            <Navigation />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
