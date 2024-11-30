export default async function ArchiveYear(props: { params: Promise<{ year: number }> }) {
    const params = await props.params
    console.log(params.year)

    return (
        <h1>{params.year}</h1>
    )
}