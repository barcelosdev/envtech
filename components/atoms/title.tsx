import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Title = ({ children, ...props }: ComponentProps<"h1">) => {

    const className = twMerge("uppercase text-4xl text-green-gradient font-bold leading-tight md:text-[4rem]",
        props.className);

    return (
        <h1 className={className}>
            {children}
        </h1>
    );
}

export default Title;