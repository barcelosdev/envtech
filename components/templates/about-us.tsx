"use client"

import Image from "next/image";
import Section from "../organisms/section";
import { MotionProps, motion } from "framer-motion";
import Title from "../atoms/title";
import Subtitle from "../atoms/subtitle";
import TitleGroup from "../molecules/title-group";
import Icon from "../atoms/icon";

type AboutUs = {
    content: any[]
}

type Card = {
    title: string,
    description: string,
    icon: keyof IconList
}

const Card = (props: Card) => {
    return (
        <div className="flex items-center gap-4 p-4 w-full border border-gray-300 shadow-md rounded-xl">
            <div className="flex flex-col justify-center items-center gap-2 w-max h-max">
                <Icon icon={props.icon} svgClass="w-8 h-8" pathClass="fill-gray-500" />
                <h2 className="font-semibold w-16 text-center">
                    {props.title}
                </h2>
            </div>

            <p className="text-sm">
                {props.description}
            </p>
        </div>
    );
}

const AboutUs = ({ content }: AboutUs) => {

    const animation: MotionProps = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: {
            ease: "easeIn",
            duration: 1
        }
    }

    return (
        <motion.div {...animation}>
            <Section id="about" className="items-start">
                <div className="flex justify-center items-center gap-10">
                    <div className="flex flex-col items-start gap-8 w-[31.25rem]">
                        <TitleGroup>
                            <Subtitle>
                                Sobre a
                            </Subtitle>
                            <Title>
                                Env Tech
                            </Title>
                        </TitleGroup>

                        <p>
                            A Env Tech é uma empresa de consultoria e desenvolvimento de software,
                            fundada como projeto da Fábrica de Software no 7º período do bacharelado em Sistemas de Informação
                            pela UNIFACOL, turma de 2023. Na Env Tech, nossa missão é simples: trazer inovação, performance,
                            segurança e confiabilidade aos produtos que desenvolvemos. Nós acreditamos que a tecnologia não é apenas
                            uma ferramenta, mas uma oportunidade de melhorar a vida e o cotidiano das pessoas.
                        </p>

                        <div className="flex flex-col gap-4">
                            {content.map((element, index) => {

                                const { title, description, icon } = element;

                                return (
                                    <motion.div key={index}
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeInOut", duration: 0.5 }}
                                    >
                                        <Card
                                            key={index}
                                            title={title}
                                            description={description}
                                            icon={icon}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-end w-[31.25rem]">
                        <Image
                            src="/working.jpg"
                            alt="Homem trabalhando em sua mesa."
                            width={400} height={600}
                            className="border border-gray-300 rounded-3xl shadow-2xl shadow-gray-500"
                        />
                    </div>
                </div>
            </Section>
        </motion.div>
    );
}

export default AboutUs;