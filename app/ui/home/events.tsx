import { useEffect, useRef } from "react";

interface EventsProps {
    title: string;
    date: string;
    description: string;
}

export default function Events() {
    const events: EventsProps[] = [
        {
            title: 'Tremplin',
            date: 'Mars 2025',
            description: 'Découvrez les nouveaux talents qui se produiront au festival!'
        },
        {
            title: 'Before',
            date: 'Avril 2025',
            description: 'Une soirée exclusive pour vous mettre dans l\'ambiance du festival'
        },
        {
            title: 'Festival',
            date: 'Avril/Mai 2025',
            description: 'L\'événement principal tant attendu!'
        }
    ];

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
        <div ref={ref} className='flex flex-col items-center justify-center gap-8 my-12 opacity-0'>
            <h2 className='text-4xl font-bold text-primary'>Prochains événements</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {events.map((e) => {
                    return (
                        <div key={e.title} className='card w-80 bg-base-100 shadow-xl hover:scale-105 transition-transform bg-primary text-base-100'>
                            <div className='card-body items-center text-center'>
                                <h3 className='card-title text-2xl'>{e.title}</h3>
                                <p className='text-xl font-semibold'>{e.date}</p>
                                <p className='text-base-200'>{e.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}