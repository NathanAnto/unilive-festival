export default function Commitee() {
    return (
        <div className='hero bg-base-200 min-h-screen'>
            <div className='hero-content flex-col lg:flex-row'>
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
                    <p className='py-6'></p>
                    <button className='btn btn-primary'>Équipe Unilive</button>
                </div>
            </div>
        </div>
    );
}
