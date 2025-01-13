'use client'

import Artists from "../ui/home/artists";
import Comitee from "../ui/home/commitee";
import Countdown from "../ui/home/countdown";
import RentScene from "../ui/home/rent-scene";

export default function Home() {
    return (
        <>
            <h1 className={`flex flex-row justify-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl dark:text-primary`} >
                Festival Unilive
            </h1>
            
            <br />
            <br />
            <br />
            
            <Countdown />
            
            <br />
            <br />
            <br />

            <Artists />

            <br />

            <div className='flex flex-col items-center justify-center gap-8 my-12'>
                <h2 className='text-4xl font-bold text-primary'>Prochains événements</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='card w-80 bg-base-100 shadow-xl hover:scale-105 transition-transform'>
                        <div className='card-body items-center text-center'>
                            <h3 className='card-title text-2xl text-primary'>Tremplin</h3>
                            <p className='text-xl font-semibold'>Mars 2025</p>
                            <p className='text-base-content'>Découvrez les nouveaux talents qui se produiront au festival!</p>
                        </div>
                    </div>

                    <div className='card w-80 bg-base-100 shadow-xl hover:scale-105 transition-transform'>
                        <div className='card-body items-center text-center'>
                            <h3 className='card-title text-2xl text-primary'>Before</h3>
                            <p className='text-xl font-semibold'>Avril 2025</p>
                            <p className='text-base-content'>Une soirée exclusive pour vous mettre dans l'ambiance du festival</p>
                        </div>
                    </div>

                    <div className='card w-80 bg-base-100 shadow-xl hover:scale-105 transition-transform'>
                        <div className='card-body items-center text-center'>
                            <h3 className='card-title text-2xl text-primary'>Festival</h3>
                            <p className='text-xl font-semibold'>Avril/Mai 2025</p>
                            <p className='text-base-content'>L'événement principal tant attendu!</p>
                        </div>
                    </div>
                </div>
            </div>

            <RentScene />

            <br />

            <Comitee />
        </>
    );
}
