import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} min-h-dvh`}>
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
