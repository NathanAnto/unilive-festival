import { useEffect, useRef } from "react";

interface ArtistsProps {
    name: string;
    image: string;
}

export default function Artists() {
    const artists: ArtistsProps[] = [
        {
            name: 'Faustine',
            image: 'images/artists/faustine.jpg',
        },
        {
            name: 'The Lady O',
            image: 'images/artists/theladyo.jpeg',
        },
        {
            name: 'MidNight One',
            image: 'images/artists/midnightone.jpeg',
        },
        {
            name: 'ASed',
            image: 'images/artists/ased.jpg',
        },
        {
            name: 'We Are INTERVIEW',
            image: 'images/artists/weareinterview.jpg',
        },
        {
            name: 'Isia',
            image: 'images/artists/isia.jpg',
        },
        {
            name: 'Lily Gasc',
            image: 'images/artists/lilygasc.jpg',
        },
        {
            name: 'Mindless Crowd',
            image: 'images/artists/mindlesscrowd.jpg',
        },
        {
            name: 'Léane',
            image: 'images/artists/leane.jpg',
        },
        {
            name: 'Diosmos',
            image: 'images/artists/diosmos.jpg',
        },
        {
            name: 'SPBK',
            image: 'images/artists/spbk.jpg',
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
            <div className="hero bg-base-200 min-h-screen -z-10">
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
