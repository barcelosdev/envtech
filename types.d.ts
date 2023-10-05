type IconList = {
    "git-hub": JSX.Element
    "linkedin": JSX.Element
    "instagram": JSX.Element
    "x": JSX.Element
    "target": JSX.Element
    "vision": JSX.Element
    "values": JSX.Element
}

type IconProp = {
    icon: keyof IconList
    svgClass?: string
    pathClass?: string
    viewBox?: string
    xmlns?: string
}

type ProjectCard = {
    name?: string
    shortDesc?: string
    extendedDesc?: string
    img?: string
    alt?: string
    className?: string
    hover?: boolean
}

type ServiceCard = {
    icon: string,
    label: string,
    description: string
}

type FormField = {
    label: string
    placeholder: string
}

type FooterColProps = {
    title: string
    children: React.ReactNode
}
type SocialMedia = {
    icon: keyof IconList
    name: string
    href: string
    soon?: boolean
}
type Footer = {
    menu: {
        title: string
        options: [
            {
                id: string
                name: string
            }
        ]
    }
    socialMedia: {
        title: string
        options: [
            {
                name: string
                icon: keyof IconList
                href: string
                soon: string
            }
        ]
    }
}

type Services = {
    content: any[]
}

type Header = {
    content: any[]
}