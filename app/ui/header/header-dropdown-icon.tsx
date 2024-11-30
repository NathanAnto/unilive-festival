import { Nav } from "@/app/lib/definitions";

export default function HeaderDropdownIcon({ item }: { item: Nav }) {
    return (
        <div className=' flex size-11 flex-none items-center justify-center rounded-lg bg-gray-900 group-hover:bg-yellow-300'>
            <item.icon
                aria-hidden='true'
                className='size-6 text-yellow-300 group-hover:text-gray-900'
            />
        </div>
    );
}
