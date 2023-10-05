const FooterCol = ({ title, children }: FooterColProps) => {
    return (
        <div className="flex flex-col items-start gap-8 text-white">
            <h3 className="uppercase font-bold">
                {title}
            </h3>
            <div className="flex flex-col items-start gap-4">
                {children}
            </div>
        </div>
    )
}

export default FooterCol;