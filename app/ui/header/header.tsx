import { dropNavigation, navigation } from "@/app/lib/data";
import { Nav } from "@/app/lib/definitions";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverPanel,
} from "@headlessui/react";
import {
    Bars3Icon,
    ChevronDownIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import HeaderLink from "./header-link";
import HeaderDropdownIcon from "./header-dropdown-icon";
import Image from "next/image";

export default function Header() {
    if(dropNavigation[0].dropdown)
        console.log(typeof(dropNavigation[0].dropdown[0].icon))
    
    return (
        <>
            <div className='min-h-full shadow-lg p-2 bg-[color:var(--primary)] '>
                <Disclosure as='nav'>
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                        <div className='flex h-16 items-center justify-between'>
                            <div className='inline-flex default function Pagiex items-center'>
                                <div className='shrink-0'>
                                    <Image
                                        alt='Festival Unilive'
                                        src='/logos/logo_unilive.png'
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className='hidden md:block'>
                                    <div className='ml-10 flex items-baseline space-x-4'>
                                        {navigation.map((item) => (
                                            <HeaderLink
                                                item={item}
                                                key={item.name}
                                            ></HeaderLink>
                                        ))}

                                        {dropNavigation.map((item: Nav) => (
                                            <Popover className='relative' key={item.name}>
                                                <PopoverButton className='inline-flex items-center text-black hover:bg-black hover:text-[color:var(--primary)] rounded-md px-3 py-2 text-sm font-extrabold'>
                                                    <span>{item.name}</span>
                                                    <ChevronDownIcon
                                                        aria-hidden='true'
                                                        className='size-4'
                                                    />
                                                </PopoverButton>

                                                <PopoverPanel
                                                    transition
                                                    className='absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'
                                                >
                                                    <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-[color:var(--primary)] text-sm/6 shadow-lg ring-1 ring-black/5'>
                                                        <div className='p-4'>
                                                            {item.dropdown?.map(
                                                                (
                                                                    navItem: Nav
                                                                ) => (
                                                                    // Dropdown row
                                                                    <div
                                                                        key={
                                                                            navItem.name
                                                                        }
                                                                        className='group relative flex gap-x-6 gap-y-30 rounded-lg p-2 hover:bg-black'
                                                                    >
                                                                        <HeaderDropdownIcon
                                                                            item={
                                                                                navItem
                                                                            }
                                                                        ></HeaderDropdownIcon>
                                                                        {/* row details */}
                                                                        <div className="mt-2">
                                                                            <a
                                                                                href={navItem.href}
                                                                                className='font-extrabold hover:text-[color:var(--primary)] text-black text-lg'
                                                                            >
                                                                                {navItem.name}
                                                                                <span className='absolute inset-0' />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </PopoverPanel>
                                            </Popover>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='-mr-2 flex md:hidden'>
                                {/* Mobile menu button */}
                                <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md bg-black p-2 text-[color:var(--primary)] hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                                    <span className='absolute -inset-0.5' />
                                    <span className='sr-only'>
                                        Open main menu
                                    </span>
                                    <Bars3Icon
                                        aria-hidden='true'
                                        className='block size-6 group-data-[open]:hidden'
                                    />
                                    <XMarkIcon
                                        aria-hidden='true'
                                        className='hidden size-6 group-data-[open]:block'
                                    />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className='md:hidden'>
                        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
                            {navigation.map((item) => (
                                <HeaderLink
                                    item={item}
                                    key={item.name}
                                ></HeaderLink>
                            ))}
                        </div>
                        <div className='border-t border-black pb-3 pt-4'>
                            <div className='mt-3 space-y-1 px-2' key={`${dropNavigation}`}>
                                {dropNavigation.map((item) => (
                                    <>
                                        <div className='font-extrabold text-black' key={item.name}>
                                            {item.name}
                                            {item.dropdown?.map((navItem) => (
                                            <div className='group w-full' key={`dropdown-${navItem}`}>
                                                <DisclosureButton
                                                    key={navItem.name}
                                                    as='a'
                                                    href={navItem.href}
                                                    className='w-full inline-flex rounded-md px-3 py-2 text-base font-extrabold text-black group-hover:bg-black hover:text-black'
                                                >
                                                    <HeaderDropdownIcon
                                                        item={navItem}
                                                        key={`icon-${navItem.name}`}
                                                    ></HeaderDropdownIcon>
                                                    <div className='mt-3 ml-2 group-hover:text-[color:var(--primary)]' key={`name-${navItem.name}`}>
                                                        {navItem.name}
                                                    </div>
                                                </DisclosureButton>
                                            </div>
                                        ))}
                                        </div>
                                    </>
                                ))}
                            </div> 
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </>
    );
}
