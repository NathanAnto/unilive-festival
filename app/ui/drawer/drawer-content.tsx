import { ReactNode } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

export default function DrawerContent({ children }: { children: ReactNode }) {
    return (
        <div className='drawer-content w-full h-full'>
            <div>
                <Header />
            </div>
            <div className='p-5'>
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}