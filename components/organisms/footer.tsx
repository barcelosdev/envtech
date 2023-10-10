"use client"

import React from "react";
import Icon from "../atoms/icon";
import Link from "next/link";
import { scrollToSection } from "../../utils/functions";
import FooterCol from "../molecules/footer-col";
import Image from "next/image";
import img from "@/public/white-logo.png";

const Footer = ({ menu, socialMedia }: any) => {
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
                        {menu.options.map((data: Option, index: number) => {

                            const { id, name } = data;

                            return (
                                <button
                                    key={`${name}-${index}`}
                                    className="text-gray-400 hover:text-white"
                                    onClick={scrollToSection}
                                    name={id}
                                >
                                    {name}
                                </button>
                            );
                        })}
                    </FooterCol>

                    <FooterCol title={socialMedia.title}>
                        {socialMedia.options.map((data: Option, index: number) => {

                            const { soon, href, icon, name } = data;

                            return (
                                <Link
                                    key={`${name}-${index}`}
                                    data-soon={soon}
                                    className="flex justify-center items-center gap-2 cursor-pointer 
                                        data-[soon=true]:opacity-50 hover:scale-105"
                                    href={href || ""}
                                    target="_blank"
                                >
                                    <Icon icon={icon!} />
                                    {name}
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