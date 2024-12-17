import { artists } from "@/app/lib/data";
import { Artist } from "@/app/lib/definitions";

export default function Artists() {
    return (
        <>
        {/* text-2xl md:text-3xl lg:text-4xl */}
            <h1 className={`flex flex-row justify-center mb-4 text-3xl sm:m-0 md:m-0 lg:m-0 font-extrabold leading-none tracking-tight text-primary md:text-3xl lg:text-3xl dark:text-primary`} >
                Artistes
            </h1>
            <div className='carousel carousel-center bg-primary rounded-box space-x-2 p-4'>
                {artists.map((a: Artist) => (
                    <div className='carousel-item flex flex-col'>
                        <img
                            src='https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp'
                            className='rounded-box'
                        />
                        <div
                            key={a.name}
                            className="flex justify-center text-base-100 font-bold"
                        >
                            {a.name}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
