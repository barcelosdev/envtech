import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const TitleGroup = ({ children, ...props }: ComponentProps<"div">) => {

    const className = twMerge("flex flex-col items-start gap-1 w-full", props.className);

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default TitleGroup;