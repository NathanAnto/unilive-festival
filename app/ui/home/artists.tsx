import { artists } from "@/app/lib/data";
import { Artist } from "@/app/lib/definitions";

import artist1 from "@/images/artists/E02A1450-scaled.jpg";
import artist2 from "@/images/artists/E02A3395-scaled.jpg";
import artist3 from "@/images/artists/PoissonChat_JPM_Unilive2024_web21.jpg";

export default function Artists() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-6xl">
                        <h2 className="text-4xl font-bold text-primary mb-8">Nos Artistes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="card hover:scale-105 transition-all duration-300 bg-base-100 shadow-xl">
                                <figure className="px-4 pt-4">
                                    <img src="images/artists/PoissonChat_JPM_Unilive2024_web21.jpg" alt="Artist 1" className="rounded-xl h-64 w-full object-cover hover:opacity-75 transition-opacity" />
                                </figure>
                                <div className="card-body">
                                    <h3 className="card-title justify-center text-primary">Artiste 1</h3>
                                    <p>Genre musical</p>
                                </div>
                            </div>

                            <div className="card hover:scale-105 transition-all duration-300 bg-base-100 shadow-xl">
                                <figure className="px-4 pt-4">
                                    <img src="images/artists/E02A3395-scaled.jpg" alt="Artist 2" className="rounded-xl h-64 w-full object-cover hover:opacity-75 transition-opacity" />
                                </figure>
                                <div className="card-body">
                                    <h3 className="card-title justify-center text-primary">Artiste 2</h3>
                                    <p>Genre musical</p>
                                </div>
                            </div>

                            <div className="card hover:scale-105 transition-all duration-300 bg-base-100 shadow-xl">
                                <figure className="px-4 pt-4">
                                    <img src="images/artists/E02A1450-scaled.jpg" alt="Artist 3" className="rounded-xl h-64 w-full object-cover hover:opacity-75 transition-opacity" />
                                </figure>
                                <div className="card-body">
                                    <h3 className="card-title justify-center text-primary">Artiste 3</h3>
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
