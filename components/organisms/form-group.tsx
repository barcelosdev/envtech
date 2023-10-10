import { twMerge } from "tailwind-merge";

const FormGroup = ({ children, ...props }: any) => {

    const className = twMerge("flex flex-col items-start gap-8 w-full md:flex-row", props.className);

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default FormGroup;