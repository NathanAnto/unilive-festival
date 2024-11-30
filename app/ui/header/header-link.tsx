"use client";

import { navigation } from "@/app/lib/data";
import { Nav } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";
import HeaderDropdownIcon from "./header-dropdown-icon";
import { DisclosureButton } from "@headlessui/react";

export default function HeaderLink({ item }: { item: Nav }) {
    const pathname = usePathname();

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(" ");
    }

    const current = item.href == pathname;

    if (item.dropdown == undefined) {
        return (
            <a
                key={item.name}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={classNames(
                    current
                        ? "text-yellow-200 bg-gray-900"
                        : "text-gray-900 hover:bg-gray-900 hover:text-yellow-200",
                    "block rounded-md px-3 py-2 text-sm font-extrabold"
                )}
            >
                {item.name}
            </a>
        );
    } else {
        console.log("has dropdown");
        console.log(`${pathname} ?=? ${item.href}`);
        return (
            <DisclosureButton
                key={item.name}
                as='a'
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={classNames(
                    current
                        ? "text-yellow-200 bg-gray-900"
                        : "text-gray-900 hover:bg-gray-900 hover:text-yellow-200",
                    "block rounded-md px-3 py-2 text-base font-extrabold"
                )}
            >
                {item.name}
                {item.dropdown?.map((navItem) => (
                    <div className='group w-full'>
                        <DisclosureButton
                            key={navItem.name}
                            as='a'
                            href={navItem.href}
                            className='w-full inline-flex rounded-md px-3 py-2 text-base font-extrabold text-gray-900 group-hover:bg-gray-900 hover:text-black'
                        >
                            <HeaderDropdownIcon
                                item={navItem}
                            ></HeaderDropdownIcon>
                            <div className='mt-3.5 ml-2 group-hover:text-yellow-200'>
                                {navItem.name}
                            </div>
                        </DisclosureButton>
                    </div>
                ))}
            </DisclosureButton>
        );
    }
}
