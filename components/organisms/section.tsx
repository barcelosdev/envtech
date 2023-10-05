import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Section = ComponentProps<"section">

const Section = (props: Section) => {

    const className = twMerge("flex flex-col justify-start items-center w-full h-max px-[6.25rem] py-12",
        props.className);

    return (
        <section id={props.id} className={className}>
            {props.children}
        </section>
    )
}

export default Section;