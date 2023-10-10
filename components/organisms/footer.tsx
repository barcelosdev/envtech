"use client"

import React from "react";
import Icon from "../atoms/icon";
import Link from "next/link";
import { scrollToSection } from "../../utils/functions";
import FooterCol from "../molecules/footer-col";
import img from "@/public/white-logo.png";
import Image from "next/image";

const Footer = ({ menu, socialMedia }: Footer) => {
    return (
        <footer className="flex justify-center items-center w-full h-max md:h-[20rem] p-16 bg-gradient-to-t from-slate-950 to-emerald-950">
            <div className="flex flex-col-reverse md:flex-row justify-between gap-24 md:gap-0 items-center md:items-start w-full h-full">
                <div className="flex flex-col justify-between items-center md:items-start gap-8 md:gap-0 h-full">
                    <Link href="/">
                        <Image
                            className="w-52 transition-all duration-500 hover:scale-105"
                            alt="Logotipo da Env Tech na cor branca"
                            src={img}
                        />
                    </Link>

                    <span className="text-xs text-gray-400 text-center md:text-start">
                        Env Tech - Web Solutions. Vitória de Santo Antão, 2023.
                    </span>
                </div>

                <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-24 md:gap-44 w-max md:w-[37.5rem]">
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