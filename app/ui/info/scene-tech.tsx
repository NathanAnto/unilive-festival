import { useEffect, useRef } from "react";

export default function SceneTech() {
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
                className='hero-content flex-col lg:flex-row-reverse opacity-0'
            >
                <img
                    src='images/scene-tech.png'
                    alt='Scene tech'
                    className='max-w-xs rounded-lg shadow-2xl'
                />
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-primary'>
                        Scène Tech
                    </h1>
                    <p className='py-6'>
                        La scène Tech se trouve sur le parking Chamberonne 2.
                    </p>
                </div>
            </div>
        </div>
    );
}
