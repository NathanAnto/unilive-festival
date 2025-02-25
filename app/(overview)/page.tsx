'use client'

import Link from "next/link";
import Artists from "../ui/home/artists";
import Comitee from "../ui/home/commitee";
import Events from "../ui/home/events";
import RentScene from "../ui/home/rent-scene";

export default function Home() {
    return (
        <div>
            <div className="relative">
                <video src="/videos/intro.mp4"
                    autoPlay loop muted
                    className="w-full h-screen object-cover sticky top-0 left-0 -z-10">
                </video>
                <h1 className="flex flex-row justify-center py-24 mt-32 text-5xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl">
                    Festival Unilive
                </h1>
            </div>

            <div className="flex justify-center my-5">
                <Link href="/tremplin-2025">
                    <img 
                        src="/images/tremplin-2025.png" 
                        alt="Tremplin 2025"
                        className="w-full max-w-4xl hover:opacity-90 transition-opacity"
                    />
                </Link>
            </div>

            <Artists />

            <br />

            <Events />

            <RentScene />

            <br />

            <Comitee />
        </div>
    );
}
