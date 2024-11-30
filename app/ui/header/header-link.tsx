"use client";


import { navigation } from "@/app/lib/data";
import { Nav } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";

export default function HeaderLink({item}: {item: Nav}) {
    const pathname = usePathname();

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(" ");
    }

    return (
            <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                    item.current
                        ? "text-yellow-200 bg-gray-900"
                        : "text-gray-900 hover:bg-gray-900 hover:text-yellow-200",
                    "rounded-md px-3 py-2 text-sm font-extrabold"
                )}
            >
                {item.name}
            </a>
    );
}
