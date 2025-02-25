import Link from "next/link";

export default async function About() {
    return (
        <div>
           <div className="breadcrumbs text-sm">
                <ul>
                    <li><a href="/">Unilive</a></li>
                    <li>A propos</li>
                </ul>
            </div>
            <h1 className="flex flex-row justify-center py-12 mt-16 text-5xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl">
                A propos
            </h1>
            <div className='hero bg-base-200 min-h-[50vh]'>
                <div className='hero-content flex-col lg:flex-row-reverse'>
                    <img
                        src='images/unilive-2013.jpg'
                        alt='Scene tech'
                        className='max-w-xs rounded-lg shadow-2xl'
                    />
                    <div>
                        <h1 className='text-3xl sm:text-4xl font-bold text-primary'>
                            Comment est né le festival ?
                        </h1>
                        <p className='py-6'>
                            Unilive est né de l’envie de créer un événement pour rassembler l’entier de la communauté universitaire au même endroit, au même moment et avec le même objectif. 
                        </p>
                        <p>
                            Après voir organisé des concerts pour les 100 ans de la faculté des HEC de l’Université de Lausanne, ce petit comité intrépide s’est lancé dans l’organisation de ce festival. 
                        </p>
                        <p>
                            Aujourd’hui avec sept éditions au compteurs et plus de 10’000 festivaliers lors de la dernière édition, on peut dire que cette idée est succès. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-8 py-12">
                <Link href="/apropos/association" className="btn btn-primary btn-wide text-xl">
                    L'association
                </Link>
                <Link href="/apropos/comite" className="btn btn-primary btn-wide text-xl">
                    Le comité
                </Link>
                <Link href="/apropos/fae" className="btn btn-primary btn-wide text-xl">
                    La FAE
                </Link>
                <Link href="/apropos/contacts" className="btn btn-primary btn-wide text-xl">
                    Contacts
                </Link>
            </div>
        </div>
    )
}