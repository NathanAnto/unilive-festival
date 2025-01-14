/* eslint-disable @typescript-eslint/no-explicit-any */

export type TitleProps = {
    title: string;
    subtitle?: string;
    textColor?: string; // Text color for the header
    className?: string; // Additional custom classes
}

export type Nav = {
    name: string,
    href: string,
    current: boolean
    icon?: any, // JSX.Element,
    dropdown?: Nav[]
}

export type Artist = {
    name: string
}

export type Scene = {
    name: string,
    description: string
}

export type Person = {
    first_name: string,
    last_name: string
}

export type Comitee = {
    volunteers: Person[]
}

export type Partner = {
    name: string,
    website: string
    type: 'official' | 'sponsor' | 'strategic' | 'cultural'
}

export type Event = {
    name: string,
    date: Date
}

export type Archive = {
    year: number,
    description: string,
    data: {
        artists: number // Amount of artists
        attendees: number // Amount of festival goers
        volunteers: number // Amount of volunteers
        scenes: number // Amount of scenes
    }
}