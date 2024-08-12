import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

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
    <html lang='en' className='scroll-pt-5'>
      <body
        className={`${inter.className} min-h-dvh bg-zinc-50 dark:bg-zinc-800`}
      >
        <div className='px-5 mx-auto max-w-xl'>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
