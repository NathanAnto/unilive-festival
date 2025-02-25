import Link from "next/link";

export default function FAE() {
    return (
        <>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">Unilive</Link></li>
                    <li><Link href="/apropos">A propos</Link></li>
                    <li>La FAE</li>
                </ul>
            </div>
            <h1 className="flex flex-row justify-center py-12 mt-16 text-5xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl">
                La FAE
            </h1>
            <div className="hero bg-base-200 min-h-[25vh] mb-12 bg-gradient-to-r from-base-200 to-base-300">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img
                        src="/images/logos/logo_fae.png" 
                        alt="Logo FAE"
                        className="max-w-72 md:max-w-md rounded-lg shadow-2xl bg-white opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="backdrop-blur-sm bg-base-200/50 p-6 rounded-xl">
                        <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-6">
                            Qu&apos;est-ce que la FAE ?
                        </h2>
                        <p className="py-4 text-sm md:text-md">
                            La FAE (Fédération des Associations d&apos;Étudiant·e·x·s de l&apos;UNIL) est l&apos;organe représentatif des étudiant·e·x·s auprès de la Direction de l&apos;université. Elle défend leurs droits et intérêts en participant activement aux commissions consultatives.
                        </p>
                        <p className="py-4 text-sm md:text-md">
                            Au-delà de son rôle de représentation, la FAE coordonne les associations facultaires et promeut l&apos;égalité et la durabilité sur le campus.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero min-h-[25vh] mb-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="backdrop-blur-sm bg-base-100/50 p-6 rounded-xl">
                        <h3 className="text-2xl sm:text-4xl font-bold text-primary mb-6">
                            Services aux étudiant·e·x·s
                        </h3>
                        <ul className="list-none space-y-4 text-sm md:text-md">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✦</span>
                                L&apos;agenda FAE en début d&apos;année académique
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✦</span>
                                Le Troc-o-Pole en collaboration avec Unipoly
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✦</span>
                                La Commission d&apos;Aide aux Recours Estudiantins (CARE)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✦</span>
                                Distribution de vin chaud
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-200 min-h-[25vh] mb-12 bg-gradient-to-l from-base-200 to-base-300">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                    <img
                        src="/images/logos/logo_mouton.png"
                        alt="Scène FAE"
                        className="max-w-72 md:max-w-md rounded-lg shadow-2xl hover:rotate-3 bg-white transition-transform"
                    />
                    <div className="backdrop-blur-sm bg-base-200/50 p-6 rounded-xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                            Partenariat FAE & Unilive
                        </h2>
                        <p className="py-4 text-sm md:text-md">
                            Depuis la création du festival, la FAE est le premier partenaire d&apos;Unilive. Les deux associations partagent des valeurs communes comme l&apos;égalité, le partage et la durabilité. Le soutien financier et logistique de la FAE a été crucial pour le développement du festival.
                        </p>
                        <p className="py-4 text-sm md:text-md">
                            Ce partenariat s&apos;est renforcé au fil des années, donnant naissance à des événements co-organisés comme la distribution de vin chaud et la soirée &quot;Before Unilive&quot;. En reconnaissance de ce partenariat, une des scènes principales du festival porte fièrement le nom de &quot;Scène FAE&quot;.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center py-12">
                <a href="https://www.fae-unil.ch" className="btn btn-primary btn-md md:btn-lg hover:scale-105 transition-transform">
                    Visiter le site de la FAE
                </a>
            </div>
        </>
    )
}