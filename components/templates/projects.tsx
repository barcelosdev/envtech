"use client";

import { scrollToSection } from "@/utils/functions";
import ProjectCard from "../organisms/project-card";
import Section from "../organisms/section";
import { motion } from "framer-motion";
import TitleGroup from "../molecules/title-group";
import Subtitle from "../atoms/subtitle";
import Title from "../atoms/title";

type Projects = {
    content: any[];
}

const Projects = ({ content }: Projects) => {
    return (
        <Section id="projects" className="items-start w-full px-0 pb-0 gap-0">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 1 }}
            >
                <TitleGroup className="pl-8 md:pl-[6.25rem]">
                    <Subtitle>
                        CONHEÇA NOSSOS
                    </Subtitle>
                    <Title>
                        PROJETOS
                    </Title>
                </TitleGroup>
            </motion.div>

            <div id="scroll-view" className="flex items-center gap-8 w-full h-auto px-8 md:px-[6.25rem] py-12 overflow-x-auto scroll-smooth">
                {content.map((e, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            img={e.img}
                            alt={e.alt}
                            name={e.name}
                            shortDesc={e.shortDesc}
                        />
                    )
                })}

                <div className="flex-none flex flex-col justify-between items-end w-64 md:w-[30rem] h-[17.5rem] p-5 md:p-12
                    rounded-[1.25rem] shadow-md bg-[#fcfcfc] border border-[rgba(0,0,0,0.12)]">
                    {/* <div className="flex flex-col justify-center items-end w-max"> */}
                    <span className="text-xl md:text-3xl text-gray-light">
                        Nosso próximo projeto pode <strong className="text-green-primary">transformar </strong>
                        o <strong className="text-green-primary">seu</strong>
                        <strong className="text-green-primary"> negócio</strong>
                    </span>
                    <button
                        name="contact"
                        className="flex justify-center items-center py-2 px-3 w-max rounded-lg bg-yellow-primary hover:bg-yellow-600 active:opacity-30"
                        onClick={scrollToSection}
                    >
                        <span className="text-white font-medium cursor-pointer">
                            Iniciar
                        </span>
                    </button>
                    {/* </div> */}
                </div>

                <div className="flex-none flex justify-center items-center w-64 md:w-[30rem] h-[17.5rem] rounded-[1.25rem] border-4 border-dashed">
                    <span className="font-bold text-[rgba(0,0,0,0.12)]">
                        Em breve um novo projeto.
                    </span>
                </div>
            </div>
        </Section>
    );
}

export default Projects;