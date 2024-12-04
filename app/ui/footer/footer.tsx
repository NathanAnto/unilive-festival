import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className='bg-[color:var(--primary)] text-black py-8'>
            <footer className='flex flex-col space-y-10 justify-center m-10'>
                <nav className='flex justify-center flex-wrap gap-6 text-gray-00 font-extrabold'>
                    <Link
                        className='p-2 rounded hover:text-[color:var(--primary)] hover:bg-black'
                        href='/'
                    >
                        Home
                    </Link>
                    <a
                        className='p-2 rounded hover:text-[color:var(--primary)] hover:bg-black'
                        href='#'
                    >
                        About
                    </a>
                    <a
                        className='p-2 rounded hover:text-[color:var(--primary)] hover:bg-black'
                        href='#'
                    >
                        Services
                    </a>
                    <a
                        className='p-2 rounded hover:text-[color:var(--primary)] hover:bg-black'
                        href='#'
                    >
                        Media
                    </a>
                    <a
                        className='p-2 rounded hover:text-[color:var(--primary)] hover:bg-black'
                        href='#'
                    >
                        Gallery
                    </a>
                    <a
                        className='p-2 rounded hover:text-[color:var(--primary)] hover:bg-black'
                        href='#'
                    >
                        Contact
                    </a>
                </nav>

                <div className='flex justify-center space-x-5'>
                    <a
                        href='https://www.facebook.com/festivalunilive/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            src='https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000'
                            alt='Facebook logo'
                            width={50}
                            height={50}
                        />
                    </a>
                    <a
                        href='https://www.instagram.com/festival_unilive/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            src='https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000'
                            alt='Instagram logo'
                            quality={100}
                            width={50}
                            height={50}
                        />
                    </a>{" "}
                </div>
                <p className='text-center text-black font-medium'>
                    &copy; Association Unilive {new Date().getFullYear()}
                </p>
            </footer>
        </footer>
    );
}
