export default function Tremplin2025() {
    return (
        <>
            <div className="flex flex-col gap-8 p-8">
                <div className="flex justify-center my-5">
                    <img 
                        src="/images/tremplin-2025.png" 
                        alt="Tremplin 2025"
                        className="w-full max-w-full transition-opacity"
                    />
                </div>

                <div className="prose">
                    <p className="text-sm md:text-md">
                        Chaque année, UNILIVE organise un événement appelé Le Tremplin, qui se tiendra cette année le 13 mars 2025. Lors de cette soirée, plusieurs groupes et artistes auront l&apos;opportunité de se produire en live devant un public et un jury. Ce dernier désignera deux lauréat.e.x.s qui auront la chance de jouer lors de l&apos;édition 2025 d&apos;UNILIVE.
                    </p>

                    <div className="alert alert-error my-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-sm md:text-md">
                            L&apos;appel aux artistes est terminé ! <br />
                            Merci à toutes et tous.x pour votre participation. Il est temps pour le comité de délibéré les personnes qui passent à la deuxième étape.
                        </p>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">CONTACT</h2>
                    <p className="text-sm md:text-md">
                        Pour toutes demandes ou questions, vous pouvez écrire à: <a href="mailto:tremplin@unilive.ch" className="text-secondary hover:underline">tremplin@unilive.ch</a>
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">RÉGLEMENT DU TREMPLIN</h2>

                    <h3 className="text-1xl md:text-2xl font-bold">Art. 1 : Conditions de participation</h3>
                    <ul className="list-disc pl-6 text-sm md:text-md">
                        <li>Les participant.e.x.s doivent ne jamais avoir été programmé.e.x.s au Festival Unilive</li>
                        <li>Les participant.e.x.s doivent être disponible le 13 mars 2025, ainsi que le 01 mai 2025.</li>
                        <li>Les participant.e.x.s doivent amener leur propre matériel pour le Tremplin et le déplacer par elles.eux-mêmes. Aucun remboursement des frais occasionnés par le Tremplin ne sera remboursé aux participant.e.x.s.</li>
                        <li>Les participant.e.x.s postulent uniquement via le lien fourni par l&apos;organisateur (formulaire d&apos;inscription). Toute inscription via un autre lien ou une autre plateforme ne sera pas prise en compte.</li>
                        <li>Les participant.e.x.s doivent pouvoir fournir un set d&apos;au moins 30 minutes.</li>
                    </ul>

                    <h3 className="text-1xl md:text-2xl font-bold mt-6">Art. 2 : Prestation des participant.e.x.s</h3>
                    <ul className="list-disc pl-6 text-sm md:text-md">
                        <li>Les gagnant.e.x.s du Vote du Public (partie 2) joueront au Tremplin le 13 mars 2025. En cas de désistement, les participant.e.x.s doivent prévenir au plus tôt.</li>
                        <li>Les gagnant.e.x.s se produiront sur scène devant le public du Tremplin, la durée du set ainsi que les directives techniques données par les membres du comité doivent être respectées pendant toute la durée de la performance.</li>
                        <li>Les gagnant.e.x.s du Tremplin seront sélectionné.e.x.s pour jouer le soir du festival.</li>
                        <li>L&apos;organisateur choisira l&apos;heure de passage ainsi que la scène.</li>
                        <li>Les gagnant.e.x.s du Tremplin reçoivent 250.- pour leur performance le soir du festival.</li>
                    </ul>

                    <h3 className="text-1xl md:text-2xl font-bold mt-6">Art. 3 : Sélection des gagnant.e.x.s</h3>
                    <p className="text-sm md:text-md">
                        L&apos;organisateur sélectionne les jurys qui voteront pour les gagnant.e.x.s. Un.e.x deuxième gagnant.e.x sera potentiellement sélectionné.e.x par le public, en fonction de ce que le comité décide.
                    </p>

                    <h3 className="text-1xl md:text-2xl font-bold mt-6">Article 4 : Droits de l&apos;organisateur</h3>
                    <ul className="list-disc pl-6 text-sm md:text-md">
                        <li>L&apos;organisateur se réserve le droit d&apos;annuler ou modifier le Tremplin, en cas de circonstances extraordinaires.</li>
                        <li>Pour tout accident, dommage matériel ou corporel, ou vol, la responsabilité civile des participant.e.x.s est engagée.</li>
                        <li>En cas de non respect des règles du présent règlement, ou d&apos;autres principes généraux liés au domaine de la production musicale et/ou du respect des événements, l&apos;organisateur se réserve le droit de déprogrammer les artiste.x.s ou arrêter la performance en cours.</li>
                    </ul>

                    <h3 className="text-1xl md:text-2xl font-bold mt-6">Article 5 : Droit applicable et for</h3>
                    <p className="text-sm md:text-md">
                        Seul le droit suisse est applicable à ce règlement à l&apos;exclusion de la Convention de Vienne. Toute question au sujet de ce règlement doit être transmise à l&apos;organisateur au plus vite.
                    </p>
                </div>
            </div>

        </>
    )
}