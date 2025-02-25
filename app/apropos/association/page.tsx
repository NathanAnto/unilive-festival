export default function Association() {
    return (
        <>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><a href="/">Unilive</a></li>
                    <li><a href="/apropos">A propos</a></li>
                    <li>But du festival</li>
                </ul>
            </div>
            <h1 className="flex flex-row justify-center py-12 mt-16 text-5xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl">
                But du festival
            </h1>

            <div className="hero bg-base-200 min-h-[25vh] mb-12 bg-gradient-to-r from-base-200 to-base-300">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img
                        src="/images/bgs/img1.jpg"
                        alt="Concert"
                        className="max-w-72 md:max-w-md rounded-lg shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="backdrop-blur-sm bg-base-200/50 p-6 rounded-xl">
                        <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-6">
                            Une programmation ouverte et originale
                        </h2>
                        <p className="py-4 text-sm md:text-lg">
                            Le but? Favoriser et faire découvrir des artistes de la scène helvétique tout en établissant une programmation variée et équilibrée répondant à la diversité étudiante. Encourager la production artistique des étudiant.e.x.s lausannois.e.x.s ainsi qu'offrir une plateforme de libre expression et de partage d'expériences culturelles.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero min-h-[25vh] mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/bgs/img-foule.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 relative z-10">
                    <img
                        src="/images/bgs/img2.jpg"
                        alt="UNIL Campus"
                        className="max-w-72 md:max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform"
                    />
                    <div className="backdrop-blur-sm bg-base-100/50 p-6 rounded-xl">
                        <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-6">
                            Un événement propre à l'Université de Lausanne
                        </h2>
                        <p className="py-4 text-sm md:text-lg">
                            Nous cherchons à collaborer en priorité avec les associations étudiantes et l'Université afin d'enrichir la vie culturelle des étudiant.e.x.s sans concurrencer des événements déjà existants. Ceci nous permet de profiter au mieux du campus idyllique offert par l'Université, le mettre en valeur et le respecter.
                        </p>
                        <p className="py-4 text-sm md:text-lg">
                            En plus de s'adresser aux étudiant.e.x.s de toutes les facultés, Unilive souhaite attirer le soir du festival le personnel de toute l'université, afin de devenir un des événements-phares de la vie du campus.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hero bg-base-200 min-h-[25vh] mb-12 bg-gradient-to-l from-base-200 to-base-300">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img
                        src="/images/bgs/img-eco.jpg"
                        alt="Eco-friendly"
                        className="max-w-72 md:max-w-md rounded-lg shadow-2xl hover:rotate-3 transition-transform"
                    />
                    <div className="backdrop-blur-sm bg-base-200/50 p-6 rounded-xl">
                        <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-6">
                            Un engagement social & environnemental
                        </h2>
                        <p className="py-4 text-md">Nous nous engageons à…</p>
                        <ul className="list-none space-y-4 text-sm md:text-md">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✦</span>
                                Faire fonctionner l'organisation uniquement sur le principe du bénévolat
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✦</span>
                                Offrir un événement gratuit et ouvert a tous.te.x.s
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✦</span>
                                Encourager la consommation de produits locaux
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">✦</span>
                                Appliquer une gestion responsable des déchets (recyclage, tri et consignes)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex justify-center py-12">
                <a href="https://www.unilive.ch/wp-content/uploads/2020/11/Unilive_Statuts_31.10.2019.pdf" className="btn btn-primary btn-md md:btn-lg hover:scale-105 transition-transform">
                    Consulter les statuts de l'association
                </a>
            </div>
        </>
    )
}