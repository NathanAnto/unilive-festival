import { useEffect, useRef } from "react";

export default function Commitee() {
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
        <div className='hero bg-base-200 min-h-[50vh]'>
            <div ref={ref} className='hero-content flex-col lg:flex-row opacity-0'>
                <div className='max-w-lg mx-auto bg-base-200 rounded-lg shadow-lg'>
                    <video
                        className='w-full rounded-lg'
                        controls
                    >
                        <source
                            src='/videos/presentation-comitee.mp4'
                            type='video/mp4'
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className='mt-2 text-center'>
                        <p className='text-sm text-base-content'>
                            
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-primary'>
                        LE COMITÉ
                    </h1>
                    <p className='py-6'>
                        Voila une petite vidéo de présentation de notre comité !
                    </p>
                    <a href="/apropos/comite">
                        <button className='btn btn-primary animate-bounce'>Équipe Unilive</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
