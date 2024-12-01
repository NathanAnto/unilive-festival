import Link from "next/link";

export default function Footer() {
    return (
        <footer className='bg-yellow-300 text-gray-900 py-8'>
            <footer className='flex flex-col space-y-10 justify-center m-10'>
                <nav className='flex justify-center flex-wrap gap-6 text-gray-00 font-extrabold'>
                    <a className='p-2 rounded hover:text-yellow-200 hover:bg-gray-900' href='/'>
                        Home
                    </a>
                    <a className='p-2 rounded hover:text-yellow-200 hover:bg-gray-900' href='#'>
                        About
                    </a>
                    <a className='p-2 rounded hover:text-yellow-200 hover:bg-gray-900' href='#'>
                        Services
                    </a>
                    <a className='p-2 rounded hover:text-yellow-200 hover:bg-gray-900' href='#'>
                        Media
                    </a>
                    <a className='p-2 rounded hover:text-yellow-200 hover:bg-gray-900' href='#'>
                        Gallery
                    </a>
                    <a className='p-2 rounded hover:text-yellow-200 hover:bg-gray-900' href='#'>
                        Contact
                    </a>
                </nav>

                <div className='flex justify-center space-x-5'>
                    <a
                        href='https://www.facebook.com/festivalunilive/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img src='https://img.icons8.com/fluent/30/000000/facebook-new.png' />
                    </a>
                    <a
                        href='https://www.instagram.com/festival_unilive/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img src='https://img.icons8.com/fluent/30/000000/instagram-new.png' />
                    </a>                </div>
                <p className='text-center text-gray-900 font-medium'>
                    &copy; Association Unilive {new Date().getFullYear()}
                </p>
            </footer>
        </footer>
    );
}
