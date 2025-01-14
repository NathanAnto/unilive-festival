import { navigation } from "@/app/lib/data";
import HeaderLink from "./header-link";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className='navbar bg-primary'>
                <div className='flex-1'>
                    <Link href='/'>
                        <Image
                            alt='Festival Unilive'
                            src='/logos/logo_unilive.png'
                            width={50}
                            height={50}
                        />
                    </Link>
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
                    <label
                        htmlFor='main-drawer'
                        aria-label="open sidebar"
                        className='btn btn-primary drawer-button'
                    >
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
                    </label>
                </div>
            </div>
        </>
    );
}
