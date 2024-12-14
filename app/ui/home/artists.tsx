import { artists } from "@/app/lib/data";
import { Artist } from "@/app/lib/definitions";
import PageTitle from "../page-title";

export default function Artists() {
    return (
        <>
        {/* text-2xl md:text-3xl lg:text-4xl */}
            <PageTitle title="Artistes" size={3} className="flex flex-row justify-center"></PageTitle>
            <div className='carousel carousel-center bg-primary rounded-box space-x-4 p-4'>
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
{/* 
                <div className='carousel-item'>
                    <img
                        src='https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp'
                        className='rounded-box'
                    />
                </div>
                <div className='carousel-item'>
                    <img
                        src='https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp'
                        className='rounded-box'
                    />
                </div>
                <div className='carousel-item'>
                    <img
                        src='https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp'
                        className='rounded-box'
                    />
                </div>
                <div className='carousel-item'>
                    <img
                        src='https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp'
                        className='rounded-box'
                    />
                </div>
                <div className='carousel-item'>
                    <img
                        src='https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp'
                        className='rounded-box'
                    />
                </div>
                <div className='carousel-item'>
                    <img
                        src='https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp'
                        className='rounded-box'
                    />
                </div>
                <div className='carousel-item'>
                    <img
                        src='https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
                        className='rounded-box'
                    />
                </div> */}
            </div>
        </>
    );
}
