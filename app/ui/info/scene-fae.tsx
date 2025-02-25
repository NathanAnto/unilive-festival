import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SceneFAE() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fadeIn");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = ref.current ? [ref.current] : [];
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <div className='hero bg-base-200 min-h-[50vh]'>
            <div
                ref={ref}
                className='hero-content flex-col lg:flex-row opacity-0'
            >
                <img
                    src='images/scene-tech.png'
                    alt='Scene tech'
                    className='max-w-xs rounded-lg shadow-2xl'
                />
                <div>
                    <h1 className='text-2xl sm:text-3xl font-bold text-primary'>
                        Scène FAE
                    </h1>
                    <p className='py-6'>
                        La scène FAE se trouve sur le parking Chamberonne 1 à
                        l’est du bâtiment Anthropole. Elle est nommée après la <Link
                            href='https://fae-unil.ch/'
                            className='text-secondary hover:underline'
                        >
                            Fédération des associations d’étudiant·e·x·s de
                            l’Université de Lausanne
                        </Link>.
                        Chaque faculté possède sa
                        (ses) association(s) d’étudiant·e·x·s et celles-ci se
                        sont regroupées en une fédération pour défendre et
                        représenter les étudiant·e·x·s au niveau de l’Université
                        et du Canton. La FAE, ce sont donc principalement des
                        étudiant·e·x·s au service des autres étudiant·e·x·s.
                        Iels proposent des services servant à n’importe quel
                        membre de notre corps quel que soit sa faculté.
                    </p>
                    <p>
                        Iels proposent entre autre :
                    </p>
                    <ul className="list-none ">
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✦</span>
                            Un service d’aide juridique
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✦</span>
                            Des subventions pour les associations thématiques
                        </li>                           
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✦</span>
                            Le don du sang chaque semestre
                        </li>                        
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✦</span>
                            Le vin chaud en décembre
                        </li>                        
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✦</span>
                            Un lieu pour troquer tes anciennes affaires
                        </li>
                    </ul>
                    <p>
                        Iels défendent aussi vos intérêts face à la Direction ou envers le Canton pour des questions de bourses d’étude.
                    </p>
                </div>
            </div>
        </div>
    );
}
