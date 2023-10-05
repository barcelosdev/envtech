/* eslint-disable jsx-a11y/alt-text */
"use client"

import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "../../utils/functions"
import Icon from "../atoms/icon";

const Header = ({ content }: Header) => {

    const [screenWidth, setScreenWidth] = useState<number | null>(null);
    const [popup, setPopup] = useState(false);
    const popupRef = useRef(null);

    function viewPopup() {
        setPopup(true);
    }

    function closePopup() {
        setPopup(false);
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            setScreenWidth(window.screen.width);
        }
    }, [screenWidth])

    return (
        <>
            <header id="header" className="flex justify-between items-center px-6 w-full h-[6.25rem] sm:px-12">
                <picture>
                    <source media="(max-width: 639px)" srcSet="logo-symbol.png" />
                    <img src="logo-text.png" alt="Logotipo em texto da Env Tech." className="w-16 sm:w-28" />
                </picture>
                <nav className="flex justify-end items-center gap-10">
                    <button className="md:hidden" onClick={viewPopup}>
                        <Icon icon="menu" viewBox="0 -960 960 960" svgClass="w-10 h-auto" />
                    </button>
                    <div
                        data-popup={popup}
                        className="fixed flex flex-col top-0 left-full justify-start items-center gap-10 bg-opacity-50 p-8 rounded-bl-3xl
                            bg-slate-500 backdrop-blur-xl transition-all duration-500 md:static md:flex md:flex-row md:bg-opacity-100 
                            md:p-0 md:items-end md:bg-transparent md:backdrop-blur-none data-[popup=true]:-translate-x-full">
                        {content.map((el: any) => {
                            return (
                                <button
                                    key={el.key}
                                    name={el.key}
                                    className="text-sm text-white font-medium uppercase md:flex md:text-gray-light
                                    hover:text-gray-primary data-[popup=true]:flex"
                                    onClick={scrollToSection}
                                >
                                    {el.option}
                                </button>
                            );
                        })}
                        <button onClick={closePopup} className="md:hidden">
                            <Icon icon="close" viewBox="0 -960 960 960" pathClass="fill-white" />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;