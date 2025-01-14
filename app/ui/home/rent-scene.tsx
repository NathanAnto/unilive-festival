import { useEffect, useRef } from "react";

export default function RentScene() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = ref.current ? [ref.current] : [];
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);
    

    return (
        <div className='hero bg-base-200 min-h-screen'>
            <div ref={ref} className='hero-content flex-col lg:flex-row-reverse opacity-0'>
                <img
                    src='images/scene-tech.png'
                    className='max-w-xs rounded-lg shadow-2xl'
                />
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-primary'>
                        BESOIN D'UNE SCÈNE ?
                    </h1>
                    <p className='py-6'>
                        On offre la possibilité de louer et de monter la scène. Vous pouvez voir nos scènes disponibles ci dessous. Pour plus d'informations, contactez-nous par email !
                    </p>
                    <button className='btn btn-primary animate-bounce'>
                        Voir les scènes disponibles
                    </button>
                </div>
            </div>
        </div>
    );
}
