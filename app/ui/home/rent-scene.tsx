export default function RentScene() {
    return (
        <div className='hero bg-base-200 min-h-screen'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <img
                    src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
                    className='max-w-sm rounded-lg shadow-2xl'
                />
                <div>
                    <h1 className='text-5xl font-bold text-primary'>BESOIN D'UNE SCÈNE ?</h1>
                    <p className='py-6'>
                        On offre la possibilité de louer et de monter la scène. Vous pouvez
                        voir nos scènes disponibles ci dessous. Pour plus d'informations,
                        contactez-nous par email !
                    </p>
                    <button className='btn btn-primary'>Voir les scènes disponibles</button>
                </div>
            </div>
        </div>
    );
}
