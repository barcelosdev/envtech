const ServiceCard = (props: ServiceCard) => {
    return (
        <div className="flex flex-col items-center w-40 md:w-[15.9375rem] h-max md:h-[13.75rem] p-6 gap-4 shadow-md border rounded-2xl">
            <img src={props.icon} className="w-16 h-16" />
            <h2 className="font-bold text-clip">
                {props.label}
            </h2>
            <p className="text-center text-gray-light">
                {props.description}
            </p>
        </div>
    )
}

export default ServiceCard;