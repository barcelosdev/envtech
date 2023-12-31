"use client"

import Image from "next/image";
import Section from "../organisms/section";
import { motion } from "framer-motion";
import logoSymbol from "@/public/logo-symbol.svg";
import { scrollToSection } from "@/utils/functions";

const Presentation = () => {
    return (
        <Section id="start" className="flex-row justify-center gap-10 p-7 h-full lg:gap-40">
            <div className="hidden flex-col justify-center items-center gap-8 md:flex">
                <Image
                    src={logoSymbol}
                    alt="Env Tech Symbol, 2023."
                    className="logo-animation text-transparent min-w-[22rem]"
                />
                <span className="logo-shadow-overlay">
                    <span className="logo-shadow">shadow</span>
                </span>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
            >
                <div className="flex flex-col justify-between items-start gap-12 w-auto max-w-[35rem]">
                    <div className="flex flex-wrap">
                        <span className="text-5xl font-medium leading-tight text-gray-gradient">
                            Soluções em <strong className="text-green-gradient">software </strong>
                            que tranformam
                            <strong className="text-green-gradient"> negócios</strong>
                        </span>
                    </div>
                    <motion.div
                        initial={{ x: 100 }}
                        whileInView={{ x: 0 }}
                        transition={{ ease: "easeInOut", duration: 1 }}
                    >
                        <div className="flex flex-col justify-start items-start gap-5 py-4 px-5 h-max bg-gray-50 border rounded-2xl shadow-md 
                            md:flex-row md:items-center md:max-w-[32rem]">
                            <span className="text-lg text-gray-light font-light leading-snug">
                                Qualidade, segurança e melhores
                                experiências para o usuário.
                            </span>
                            <span className="hidden h-[2.3rem] w-[1px] bg-gray-200 rounded-lg md:block" />
                            <button
                                name="contact"
                                className="flex justify-center items-center gap-2 py-2 px-3 w-max h-max rounded-lg bg-yellow-primary hover:bg-yellow-hover"
                                onClick={scrollToSection}
                            >
                                <span className="text-sm text-white font-medium cursor-pointer tracking-wider">
                                    Começar
                                </span>
                                <svg className="w-5 h-5 fill-white hover:translate-x-icon-infinite">
                                    <use xlinkHref="icons.svg#east" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
}

export default Presentation;