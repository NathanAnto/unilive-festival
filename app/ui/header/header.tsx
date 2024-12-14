import {  navigation } from "@/app/lib/data";
import HeaderLink from "./header-link";
import Image from "next/image";

export default function Header() {

    return (
        <>
            <div className='navbar bg-primary'>
                <div className='flex-1'>
                    <a href='/'>
                        <Image
                            alt='Festival Unilive'
                            src='/logos/logo_unilive.png'
                            width={50}
                            height={50}
                        />
                    </a>
                </div>
                <div className='flex-none text-base-100 hidden md:block'>
                    <ul className='menu menu-horizontal px-1'>
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <HeaderLink
                                    item={item}
                                    key={item.name}
                                ></HeaderLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:hidden'>
                    <div className='dropdown dropdown-end'>
                        <div tabIndex={0} className='btn btn-primary'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='#000000'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <line x1='3' y1='12' x2='21' y2='12'></line>
                                <line x1='3' y1='6' x2='21' y2='6'></line>
                                <line x1='3' y1='18' x2='21' y2='18'></line>
                            </svg>
                        </div>

                        {/* <div className="drawer-side">
                            <label htmlFor="menu-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className='menu menu-horizontal'>
                                {/* Navbar menu content here }
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <HeaderLink
                                            item={item}
                                            key={item.name}
                                        ></HeaderLink>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        <ul
                            tabIndex={0}
                            className='dropdown-content menu bg-primary rounded-box z-[1] w-52 p-2 shadow'
                        >
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <HeaderLink
                                        item={item}
                                        key={item.name}
                                    ></HeaderLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
