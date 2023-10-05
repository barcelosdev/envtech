"use client"

import React from "react";
import Icon from "../atoms/icon";
import Link from "next/link";
import { scrollToSection } from "../../utils/functions";
import FooterCol from "../molecules/footer-col";

const Footer = ({ menu, socialMedia }: Footer) => {
    return (
        <footer className="flex justify-center items-center w-full h-[20rem] p-16 bg-emerald-950">
            <div className="flex justify-between items-start w-full h-full">
                <div className="flex flex-col justify-between items-start h-full">
                    <Link href="/">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="h-10 transition-all duration-500 hover:scale-105"
                            alt="Logotipo da Env Tech na cor branca"
                            src="white-logo.png"
                        />
                    </Link>

                    <span className="text-[12px] text-gray-400">
                        Env Tech - Web Solutions. Vitória de Santo Antão, 2023.
                    </span>
                </div>

                <div className="flex justify-start items-start gap-44 w-[37.5rem]">
                    <FooterCol title={menu.title}>
                        {menu.options.map((option) => {
                            return (
                                <button
                                    key={option.name}
                                    name={option.id}
                                    className="text-gray-400 hover:text-white"
                                    onClick={scrollToSection}
                                >
                                    {option.name}
                                </button>
                            );
                        })}
                    </FooterCol>

                    <FooterCol title={socialMedia.title}>
                        {socialMedia.options.map((media) => {
                            return (
                                <Link
                                    data-soon={media.soon}
                                    className="flex justify-center items-center gap-2 cursor-pointer data-[soon=true]:opacity-50 hover:scale-105"
                                    href={media.href} target="_blank"
                                    key={media.icon}
                                >
                                    <Icon icon={media.icon} />
                                    {media.name}
                                </Link>
                            );
                        })}
                    </FooterCol>
                </div>
            </div>
        </footer>
    );
}

export default Footer;