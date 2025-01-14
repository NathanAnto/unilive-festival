import { useEffect, useRef } from "react";

export default function Artists() {
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
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div ref={ref} className="hero-content text-center opacity-0">
                    <div className="max-w-6xl">
                        <h2 className="text-5xl font-bold text-primary mb-8">Nos Artistes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="card hover:scale-105 transition-all duration-300 bg-primary shadow-xl">
                                <figure className="px-4 pt-4">
                                    <img src="images/artists/PoissonChat_JPM_Unilive2024_web21.jpg" alt="Artist 1" className="rounded-xl h-64 w-full object-cover hover:opacity-75 transition-opacity" />
                                </figure>
                                <div className="card-body text-base-100">
                                    <h3 className="card-title justify-center">Artiste 1</h3>
                                    <p>Genre musical</p>
                                </div>
                            </div>

                            <div className="card hover:scale-105 transition-all duration-300 bg-primary shadow-xl">
                                <figure className="px-4 pt-4">
                                    <img src="images/artists/E02A3395-scaled.jpg" alt="Artist 2" className="rounded-xl h-64 w-full object-cover hover:opacity-75 transition-opacity" />
                                </figure>
                                <div className="card-body text-base-100">
                                    <h3 className="card-title justify-center">Artiste 2</h3>
                                    <p>Genre musical</p>
                                </div>
                            </div>

                            <div className="card hover:scale-105 transition-all duration-300 bg-primary shadow-xl">
                                <figure className="px-4 pt-4">
                                    <img src="images/artists/E02A1450-scaled.jpg" alt="Artist 3" className="rounded-xl h-64 w-full object-cover hover:opacity-75 transition-opacity" />
                                </figure>
                                <div className="card-body text-base-100">
                                    <h3 className="card-title justify-center">Artiste 3</h3>
                                    <p>Genre musical</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
