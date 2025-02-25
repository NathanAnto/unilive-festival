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
        <div className="hero bg-base-200 min-h-[50vh]">
            <div ref={ref} className="hero-content text-center opacity-0">
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">Prochains événements</h2>
                    <div className="grid gap-6 w-full">
                        {events.map((e) => (
                            <div key={e.title} className="collapse collapse-arrow bg-primary shadow-xl hover:bg-primary/90 transition-colors duration-300">
                                <input type="radio" name="events" /> 
                                <div className="collapse-title text-2xl md:text-3xl font-bold text-base-100">
                                    {e.title}
                                </div>
                                <div className="collapse-content bg-primary text-base-100">
                                    <div className="pt-4">
                                        <p className="text-xl font-semibold">{e.date}</p>
                                        <p className="text-base-200 mt-2">{e.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}