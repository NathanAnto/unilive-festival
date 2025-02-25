import Link from "next/link";

export default function Commitee() {
    return (
        <>

            <div className="breadcrumbs text-sm">
                <ul>
                    <li><Link href="/">Unilive</Link></li>
                    <li><Link href="/apropos">A propos</Link></li>
                    <li>Le comité</li>
                </ul>
            </div>
            <h1 className="flex flex-row justify-center py-12 mt-16 text-5xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl">
                Le comité
            </h1>

        </>
    )
}