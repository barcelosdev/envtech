const ServiceCard = (props: ServiceCard) => {
    return (
        <div className="flex flex-col items-center w-[15.9375rem] h-[13.75rem] p-6 gap-4 shadow-md border rounded-2xl">
            <img src={props.icon} className="w-16 h-16" />
            <label className="font-bold">{props.label}</label>
            <p className="text-center text-gray-light">{props.description}</p>
        </div>
    )
}

export default ServiceCard;