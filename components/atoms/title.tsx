import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Title = ({ children, ...props }: ComponentProps<"h1">) => {

    const className = twMerge("uppercase text-[4rem] text-green-gradient font-bold uppercase leading-none",
        props.className);

    return (
        <h1 className={className}>
            {children}
        </h1>
    );
}

export default Title;