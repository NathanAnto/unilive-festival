"use client";

import Link from "next/link";
import Countdown from "../ui/home/countdown";
import SceneFAE from "../ui/info/scene-fae";
import SceneTech from "../ui/info/scene-tech";

export default function Info() {
    return (
        <div>
            <div className="relative">
                <div className="relative">
                    <img src="/images/bgs/img3.jpg"
                        alt="Background"
                        className="w-full h-screen object-cover sticky top-0 left-0 -z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-base-100 to-transparent"></div>
                </div>
                <h1 className="flex flex-row justify-center py-24 mt-32 text-5xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl">
                    Info Pratiques
                </h1>
            </div>

            <Countdown />

            <div className='chat chat-end'>
                <div className='chat-bubble chat-bubble-secondary'>
                    Où et quand aura lieu le festival ?
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    Le festival aura lieu le 1er mai 2025 sur l'espanade
                    d'Internef sur le campus de l'université de lausanne.
                </div>
            </div>

            <div className='chat chat-end'>
                <div className='chat-bubble chat-bubble-secondary'>
                    Comment peut-on s y rendre ?
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    <b>En M1</b>: Arrêt « UNIL-Chamberonne », direction Lausanne-Flon ou Renens-gare
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    <b>Bus 701 (MBC)</b>: Arrêt « Ecublens VD, Allée de Dorigny », direction Bourdonette
                </div>
            </div>

            <div className='chat chat-end'>
                <div className='chat-bubble chat-bubble-secondary'>
                    Comment sera l'entrée du festival ?
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    L'entrée au festival Unilive est gratuite, et il n'y a pas
                    besoin de billets non plus!
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    Vous recevrez à l'entrée des bracelets cashless (coût
                    d'activation de 5fr) pour payer les consommations à
                    l'intérieur du festival grâce à ce bracelet.
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    Pour les recharger, vous pouvez simplement vous munir de
                    votre smartphone, ou aller à un de nos stands banque si vous
                    voulez les recharger en espèces!
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    Retrouvez toutes les informations liées au cashless <Link
                        href='/cashless'
                        className='text-secondary hover:underline'
                    >
                        ici
                    </Link>
                    , notamment comment recharger son bracelet ou se faire
                    rembourser le solde après le festival.
                </div>
            </div>

            <div className='chat chat-end'>
                <div className='chat-bubble chat-bubble-secondary'>
                    Est-ce que des navettes sont prévues ?
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    Des navettes TL seront mises a disposition pour rentrer du
                    festival à:
                    <ul className="list-disc list-inside">
                        <li>Lausanne-Flon (TL 18)</li>
                        <li>Renens-Gare (TL 32)</li>
                        <li>Galicien (TL 17)</li>
                    </ul>
                    toutes les 15 minutes a partir de 00h15 et jusqu'a 1h30.
                </div>
            </div>

            <div className='chat chat-end'>
                <div className='chat-bubble chat-bubble-secondary'>
                    Y a-t-il des objets interdits ?
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    Toutes bouteilles et gourdes sont interdites dans le
                    festival. Aucune boisson ne pourra entrer, les consommations
                    seront jetées lors de la fouille.
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    Il y aura sur le site du festival des fontaines à eau
                    disponibles.
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    Retrouvez la liste des objets interdits <Link
                        href='/objetsinterdits'
                        className='text-secondary hover:underline'
                    >
                        ici
                    </Link>
                    .
                </div>
            </div>

            <div className='chat chat-end'>
                <div className='chat-bubble chat-bubble-secondary'>
                    Peut-on se parquer sur place ?
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    Tous les parkings de l'UNIL sont également disponibles,
                    excepté <b>Chamberonne 1</b> et une partie de{" "}
                    <b>Chamberonne 2</b>
                </div>
            </div>
            <div className='chat chat-start'>
                <div className='chat-bubble chat-bubble-primary'>
                    Un parking vélo sera disponible à côté de l'entrée du
                    festival, sur le parking <b>Chamberonne 2</b>.
                </div>
            </div>

            <br />

            <h2 id="scenes" className='text-4xl md:text-5xl font-bold text-primary mb-8'>Nos Scènes</h2>

            <SceneFAE />
            <SceneTech />
        </div>
    );
}
