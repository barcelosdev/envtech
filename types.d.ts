type IconList = {
    "git-hub": JSX.Element
    "linkedin": JSX.Element
    "instagram": JSX.Element
    "x": JSX.Element
    "target": JSX.Element
    "vision": JSX.Element
    "values": JSX.Element
    "menu": JSX.Element
    "close": JSX.Element
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
    title: string
    icon: keyof IconList
    name: string
    href: string
    soon?: boolean
}

type Option = {
    id?: string
    name?: string
    icon?: keyof IconList
    href?: string
    soon?: boolean
}

type Static = {
    title: string
    options: Option
}

type Footer = {
    menu: Static[]
    socialMedia: Static[]
}

type Services = {
    content: any[]
}

type Header = {
    content: any[]
}