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
                        ? "text-[color:var(--primary)] bg-black"
                        : "text-black hover:bg-black hover:text-[color:var(--primary)]",
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
                        ? "text-[color:var(--primary)] bg-black"
                        : "text-black hover:bg-black hover:text-[color:var(--primary)]",
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
                            className='w-full inline-flex rounded-md px-3 py-2 text-base font-extrabold text-black group-hover:bg-black hover:text-black'
                        >
                            <HeaderDropdownIcon
                                item={navItem}
                            ></HeaderDropdownIcon>
                            <div className='mt-3.5 ml-2 group-hover:text-[color:var(--primary)]'>
                                {navItem.name}
                            </div>
                        </DisclosureButton>
                    </div>
                ))}
            </DisclosureButton>
        );
    }
}
