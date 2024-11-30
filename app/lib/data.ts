import {
    AcademicCapIcon,
    ArchiveBoxIcon,
    EnvelopeIcon,
    UserCircleIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Nav } from "./definitions";

export const navigation: Nav[] = [
    { name: "Home", href: "/", current: true },
    { name: "Info", href: "/info", current: false },
    { name: "Partenaires", href: "/partenaires", current: false },
];

export const dropNavigation: Nav[] = [
    {
        name: "Archives",
        href: "#",
        current: false,
        dropdown: [
            {
                name: "2022",
                href: "/archives/2022",
                icon: ArchiveBoxIcon,
                current: false,
            },
            {
                name: "2021",
                href: "/archives/2021",
                icon: ArchiveBoxIcon,
                current: false,
            },
            {
                name: "2019",
                href: "/archives/2019",
                icon: ArchiveBoxIcon,
                current: false,
            },
            {
                name: "2018",
                href: "/archives/2018",
                icon: ArchiveBoxIcon,
                current: false,
            },
            {
                name: "2017",
                href: "/archives/2017",
                icon: ArchiveBoxIcon,
                current: false,
            },
        ],
    },
    {
        name: "A propos",
        href: "#",
        current: false,
        dropdown: [
            {
                name: "L'association",
                href: "apropos/association",
                icon: UserCircleIcon,
                current: false,
            },
            {
                name: "Le comité",
                href: "apropos/comitee",
                icon: UserGroupIcon,
                current: false,
            },
            {
                name: "La FAE",
                href: "apropos/fae",
                icon: AcademicCapIcon,
                current: false,
            },
            {
                name: "Contacts",
                href: "/contact",
                icon: EnvelopeIcon,
                current: false,
            },
        ],
    },
];
