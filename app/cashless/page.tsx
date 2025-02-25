import CashlessProcess from "../ui/cashless-process";

export default function Cashless() {
    return (
        <div>
            <div className='hero bg-base-200 min-h-[50vh]'>
                <div
                    className='hero-content flex-col lg:flex-row-reverse'
                >
                    <img
                        src='images/cashless.jpg'
                        alt='Bracelet Cashless'
                        className="max-w-72 md:max-w-md rounded-lg shadow-2xl hover:rotate-3 transition-transform"
                    />
                    <div>
                        <h1 className="flex flex-row justify-center text-5xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl">
                            Le Cashless
                        </h1>
                        <p className='py-6'>
                            Pour la deuxième fois, Unilive se servira de bracelets cashless permettant de payer directement via ces derniers. 
                            Ils sont rechargeables en ligne ou aux stands banque prévus à cet effet. 
                            Tous nos stands (bars, nourriture et merchandising) accepteront uniquement le cashless. 
                            Dès la fin du festival, il sera possible de demander un remboursement du solde.
                        </p>
                    </div>
                </div>
            </div>

            <CashlessProcess />            

            <h1 className="text-4xl font-bold text-primary mb-4">FAQ</h1>
            <div className="grid gap-6 w-full">
                <div className="collapse collapse-arrow bg-primary shadow-xl hover:bg-primary/90 transition-colors duration-300">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg md:text-1xl font-bold text-base-100 hover:bg-primary/90">
                        Pourquoi me créer un compte ?
                    </div>
                    <div className="collapse-content bg-primary text-base-100 text-sm md:text-md">
                        <p>Grâce à votre compte, vous pourrez :</p>
                        <ul className="list-disc list-inside">
                            <li>Recharger votre bracelet pendant le festival via le lien ci-dessus ou avec les QR code fast top up présent partout au festival.</li>
                            <li>Enregistrer votre moyen de paiement pour un rechargement plus rapide</li>
                            <li>Consulter le solde de votre compte et l&apos;historique des transactions</li>
                            <li>Bloquer votre bracelet et en obtenir un nouveau en cas de perte ou de vol</li>
                            <li>Obtenir le remboursement du solde de votre compte à la fin du festival</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-primary shadow-xl hover:bg-primary/90 transition-colors duration-300">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg md:text-1xl font-bold text-base-100">
                        Comment recharger mon bracelet?
                    </div>
                    <div className="collapse-content bg-primary text-base-100 text-sm md:text-md">
                        <p>Pour recharger, il suffit de suivre le lien ci-dessus. Il faudra ensuite soit vous créer un compte et le créditer, soit utiliser le rechargement rapide sans création de compte. Notez que pour vous faire rembourser le solde de votre bracelet, il vous faudra impérativement un compte! Votre compte n&apos;est pas associé à votre compte bancaire, aucune transaction ne sera faite sans votre accord.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-primary shadow-xl hover:bg-primary/90 transition-colors duration-300">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg md:text-1xl font-bold text-base-100">
                        Que sont les frais d&apos;activation?
                    </div>
                    <div className="collapse-content bg-primary text-base-100 text-sm md:text-md">
                        <p>À l’activation de chaque bracelets, 5 CHF seront facturés. Ceux si servent à couvrir les coûts des bracelets et du festival. Pour plus d&apos;informations, n&apos;hésitez pas à nous écrire à <a href="mailto:info@unilive.ch" className="link link-secondary">info@unilive.ch</a>.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-primary shadow-xl hover:bg-primary/90 transition-colors duration-300">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg md:text-1xl font-bold text-base-100">
                        J&apos;ai perdu mon bracelet, que faire?
                    </div>
                    <div className="collapse-content bg-primary text-base-100 text-sm md:text-md">
                        <p>Il faut bloquer votre bracelet en allant aux stands cashless présents le soir du festival. On vous en redonnera un nouveau.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-primary shadow-xl hover:bg-primary/90 transition-colors duration-300">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg md:text-1xl font-bold text-base-100">
                        Puis-je me faire rembourser?
                    </div>
                    <div className="collapse-content bg-primary text-base-100 text-sm md:text-md">
                        <p>Bien sûr. Dès la fin de l’événement vous pourrez demander un remboursement en ligne depuis votre compte ou en suivant les liens que nous mettrons à disposition.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-primary shadow-xl hover:bg-primary/90 transition-colors duration-300">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg md:text-1xl font-bold text-base-100">
                        J&apos;ai ajouté de l&apos;argent qui n&apos;apparaît pas, que faire?
                    </div>
                    <div className="collapse-content bg-primary text-base-100 text-sm md:text-md">
                        <p>Il y aura deux stands cashless présent sur le site le soir du festival, venez nous visiter et nous résoudrons ce problème ensemble!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}