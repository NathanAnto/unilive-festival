import { useEffect, useRef } from "react";

export default function Commitee() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fadeIn");
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        const elements = document.querySelectorAll(".animate-fadeIn");
        elements.forEach((element) => {
            element.classList.add("opacity-0");
            setTimeout(() => {
                element.classList.remove("opacity-0");
                element.classList.add("animate-fadeIn");
            }, 100); // Adjust the delay as needed
        });

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className='hero bg-base-200 min-h-screen'>
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
                    <h1 className='text-5xl font-bold text-primary'>
                        LE COMITÉ
                    </h1>
                    <p className='py-6'>
                        Voila une petite vidéo de présentation de notre comité !
                    </p>
                    <button className='btn btn-primary animate-bounce'>Équipe Unilive</button>
                </div>
            </div>
        </div>
    );
}
