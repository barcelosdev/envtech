"use client"

import { scrollToSection } from "../../utils/functions"

const Header = ({ content }: Header) => {
    return (
        <header id="header" className="flex justify-between items-center px-16 w-full h-[6.25rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="logo-text.png" alt="Logotipo em texto da Env Tech." />
            <nav className="flex justify-end items-center gap-10">
                {content.map((el: any) => {
                    return (
                        <button
                            key={el.key}
                            name={el.key}
                            className="text-sm text-gray-light font-medium uppercase hover:text-gray-primary"
                            onClick={scrollToSection}
                        >
                            {el.option}
                        </button>
                    );
                })}
            </nav>
        </header>
    )
}

export default Header;