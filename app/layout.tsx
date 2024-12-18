import type { Metadata } from "next";
import localFont from "next/font/local";
import DrawerSide from "./ui/drawer/drawer-side";
import DrawerContent from "./ui/drawer/drawer-content";
import "./globals.css";

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
        <html className='h-full'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
            >
                <div className='drawer drawer-end'>
                    <input id="main-drawer" type="checkbox" className="drawer-toggle" />
                    <DrawerSide />
                    <DrawerContent children={children} />
                </div>
            </body>
        </html>
    );
}
