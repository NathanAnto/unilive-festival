import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Festival Unilive",
  description: "Site internet pour le festival Unilive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <div>
          <Header />
        </div>
        <div className="p-5">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
