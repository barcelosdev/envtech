import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Subtitle = ({ children, ...props }: ComponentProps<"h2">) => {

    const className = twMerge("uppercase text-gray-light pl-[0.15rem] uppercase leading-none", props.className);

    return (
        <h1 className={className}>
            {children}
        </h1>
    );
}

export default Subtitle;