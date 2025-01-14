'use client'

import Artists from "../ui/home/artists";
import Comitee from "../ui/home/commitee";
import Events from "../ui/home/events";
import RentScene from "../ui/home/rent-scene";

export default function Home() {
    return (
        <>
            <h1 className="flex flex-row justify-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl dark:text-primary" >
                Festival Unilive
            </h1>

            <Artists />

            <br />

            <Events />

            <RentScene />

            <br />

            <Comitee />
        </>
    );
}
