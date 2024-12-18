import { navigation } from "@/app/lib/data";
import HeaderLink from "../header/header-link";

export default function DrawerSide() {
    return (
        <div className='drawer-side z-50 md:hidden'>
            <label
                htmlFor='main-drawer'
                aria-label='close sidebar'
                className='drawer-overlay'
            ></label>
            <ul className='menu bg-primary min-h-full w-80 p-4'>
                {navigation.map((item) => (
                    <li key={item.name}>
                        <HeaderLink item={item} key={item.name}></HeaderLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
