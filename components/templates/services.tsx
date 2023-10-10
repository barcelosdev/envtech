"use client"

import Section from "../organisms/section";
import { motion } from "framer-motion";
import ServiceCard from "../organisms/service-card";
import Title from "../atoms/title";
import Subtitle from "../atoms/subtitle";
import TitleGroup from "../molecules/title-group";

const Services = ({ content }: Services) => {
    return (
        <Section id="services" className="gap-16">
            <TitleGroup className="items-center">
                <Subtitle>
                    Nossos
                </Subtitle>
                <Title>
                    Serviços
                </Title>
            </TitleGroup>

            <div className="flex flex-wrap flex-grow justify-center items-center gap-8 md:gap-12 w-screen">
                {content.map((card, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeIn", duration: index / 2 }}
                        >
                            <ServiceCard
                                key={index}
                                icon={card.icon}
                                label={card.label}
                                description={card.description}
                            />
                        </motion.div>
                    )
                })}
            </div>
        </Section>
    );
}

export default Services;