"use client";

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
                        ? "btn-active"
                        : "btn-outline",
                    "btn btn-accent m-2"
                )}
            >
                {item.name}
            </a>
        );
    } else {
        return (
            <DisclosureButton
                key={item.name}
                as='a'
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={classNames(
                    current
                        ? "text-primary bg-base-100 hover:bg-base-200"
                        : "text-base-100 hover:bg-base-100 hover:text-primary",
                    "block rounded-md px-3 py-2 text-base font-extrabold"
                )}
            >
                {item.name}
                {item.dropdown?.map((navItem) => (
                    <div className='group w-full' key={`dropdown-${navItem}`}>
                        <DisclosureButton
                            key={navItem.name}
                            as='a'
                            href={navItem.href}
                            className='w-full inline-flex rounded-md px-3 py-2 text-base font-extrabold text-base-100 group-hover:bg-base-100 hover:text-base-100'
                        >
                            <HeaderDropdownIcon
                                item={navItem}
                            ></HeaderDropdownIcon>
                            <div className='mt-3.5 ml-2 group-hover:text-primary'>
                                {navItem.name}
                            </div>
                        </DisclosureButton>
                    </div>
                ))}
            </DisclosureButton>
        );
    }
}
