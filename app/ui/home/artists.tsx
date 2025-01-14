import { useEffect, useRef } from "react";

interface ArtistsProps {
    name: string;
    image: string;
    genre: string;
}

export default function Artists() {
    const artists: ArtistsProps[] = [
        {
            name: 'Artiste 1',
            image: 'images/artists/PoissonChat_JPM_Unilive2024_web21.jpg',
            genre: 'Genre musical'
        },
        {
            name: 'Artiste 2',
            image: 'images/artists/E02A3395-scaled.jpg',
            genre: 'Genre musical'
        },
        {
            name: 'Artiste 3',
            image: 'images/artists/E02A1450-scaled.jpg',
            genre: 'Genre musical'
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
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div ref={ref} className="hero-content text-center opacity-0">
                    <div className="max-w-6xl">
                        <h2 className="text-5xl font-bold text-primary mb-8">Nos Artistes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {artists.map((artist, index) => (
                                <div className="card hover:scale-105 transition-all duration-300 bg-primary shadow-xl" key={index}>
                                    <figure className="px-4 pt-4">
                                        <img
                                            src={artist.image}
                                            alt={artist.name}
                                            className="rounded-xl h-64 w-full object-cover hover:opacity-75 transition-opacity" />
                                    </figure>
                                    <div className="card-body text-base-100">
                                        <h3 className="card-title justify-center">{artist.name}</h3>
                                        <p>{artist.genre}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
