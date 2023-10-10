"use client"

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge"

const ProjectCard = ({ hover = false, ...props }: ProjectCard) => {

    const [isHover, setIsHover] = useState(hover);

    const style = {
        teste: {

        }
    }

    function handleOnMouseEnter() {
        console.log("entrou no on enter")
        setIsHover(true);
    }

    function handleOnMouseLeave() {
        setIsHover(false);
    }

    const className = twMerge(`flex flex-col flex-none justify-start items-center w-64 md:w-[30rem] h-[17.5rem] rounded-[1.25rem]
        shadow-md overflow-hidden`, props.className);

    return (
        <div className={className} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="h-[17.5rem] max-w-none object-cover transition-opacity duration-500 
                    data-[hover=true]:opacity-50"
                data-hover={isHover}
                src={props.img as string}
                alt={props.alt as string}
            />
            <div
                className="relative flex flex-col items-end w-full h-max p-4 bg-gradient-to-t 
                    from-gray-200 to-white transition-all duration-500 
                    data-[hover=true]:-translate-y-full"
                data-hover={isHover}
            >
                <div className="flex flex-col gap-1">
                    <h1 className="font-semibold text-lg">
                        {props.name}
                    </h1>
                    <p className="text-xs md:text-sm">
                        {props.shortDesc}
                    </p>
                </div>

                <button className="flex justify-center items-center py-2 px-3 w-max rounded-lg bg-gray-200 hover:bg-gray-300 active:bg-gray-400" disabled>
                    <span className="text-sm text-gray-primary font-semibold cursor-pointer">
                        Em breve
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;