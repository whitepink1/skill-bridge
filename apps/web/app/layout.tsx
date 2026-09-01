import type { Metadata } from "next";
import {Be_Vietnam_Pro} from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Header from "../components/Navigation/Header";
import Footer from "../components/Navigation/Footer";
import StoreProvider from "../store/StoreProvider";

const be_vietnam = Be_Vietnam_Pro({
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Skill Bridge",
  description: "Skill Bridge is a learning school, created by kiruhat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={be_vietnam.className}>
      <body className='flex flex-col *:not-last:px-basic *:not-last:3xl:px-0 min-h-screen bg-white-97'>
        <StoreProvider>
          <Header />
          <main className="w-full min-h-100 max-w-400 mx-auto">
            {children}
            <Toaster position="top-center" />
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
};
