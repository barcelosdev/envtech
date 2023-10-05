"use client"

import Image from "next/image";
import Section from "../organisms/section";
import { MotionProps, motion } from "framer-motion";
import SectionTitle from "../atoms/title";
import Title from "../atoms/title";
import Subtitle from "../atoms/subtitle";
import TitleGroup from "../molecules/title-group";

type AboutUs = {
    content: any[]
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
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col items-start gap-4 w-full">
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
                    </div>

                    <div className="flex justify-end w-full">
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