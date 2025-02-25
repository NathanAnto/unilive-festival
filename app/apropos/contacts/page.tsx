export default function Contacts() {
    return (
        <>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li><a href="/">Unilive</a></li>
                    <li><a href="/apropos">A propos</a></li>
                    <li>Contacts</li>
                </ul>
            </div>
            <h1 className="flex flex-row justify-center py-12 mt-16 text-5xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl">
                Contactez-nous
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-6">
                <div className="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-primary">Programmation</h2>
                        <p className="text-lg">Questions sur les artistes et la musique ?</p>
                        <a href="mailto:programmation@unilive.ch" className="link link-primary text-xl">
                            programmation@unilive.ch
                        </a>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-primary">Logistique</h2>
                        <p className="text-lg">Questions sur l'organisation du festival ?</p>
                        <a href="mailto:logistique@unilive.ch" className="link link-primary text-xl">
                            logistique@unilive.ch
                        </a>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-primary">Recrutement</h2>
                        <p className="text-lg">Envie de rejoindre l'équipe ?</p>
                        <a href="mailto:recrutement@unilive.ch" className="link link-primary text-xl">
                            recrutement@unilive.ch
                        </a>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-xl hover:scale-105 transition-transform">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-primary">Contact général</h2>
                        <p className="text-lg">Pour toute autre question</p>
                        <a href="mailto:info@unilive.ch" className="link link-primary text-xl">
                            info@unilive.ch
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-6 mt-8">
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="card-title text-2xl text-primary justify-center">Adresse</h2>
                        <p className="text-lg">
                            Espace association,<br />
                            Quartier Uni-centre,<br />
                            Université de Lausanne,<br /><br />
                            1015 Lausanne
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}