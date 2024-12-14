export default async function PageTitle({ title, size = 5, className }: { title: string, size?: number, className?: string }) {
    return (
        <h1 className={`${className} mb-4 text-${size-1}xl sm:m-0 md:m-0 lg:m-0 font-extrabold leading-none tracking-tight text-primary md:text-${size}xl lg:text-${size+1}xl dark:text-primary`} >
            {title}
        </h1>
    )
}