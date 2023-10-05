import { ComponentProps } from "react"

type Props = ComponentProps<"input"> & FormField;

const FormField = (props: Props) => {
    return (
        <div className="flex flex-col items-start gap-3 w-full">
            <label className="text-sm font-bold">{props.label}</label>
            <input
                name={props.name}
                className="w-full p-3 rounded-xl bg-white border shadow-md focus:border-green-300"
                placeholder={props.placeholder}
                onChange={props.onChange}
                type={props.type}
            />
        </div>
    )
}

export default FormField;