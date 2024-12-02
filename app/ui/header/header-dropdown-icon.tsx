import { Nav } from "@/app/lib/definitions";

export default function HeaderDropdownIcon({ item }: { item: Nav }) {
    return (
        <div className=' flex size-11 flex-none items-center justify-center rounded-lg bg-black group-hover:bg-[color:var(--primary)]'>
            <item.icon
                aria-hidden='true'
                className='size-6 text-[color:var(--primary)] group-hover:text-black'
            />
        </div>
    );
}
