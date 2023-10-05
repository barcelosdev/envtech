"use client"

import Section from "../organisms/section";
import { motion } from "framer-motion";
import ServiceCard from "../organisms/service-card";

const Services = ({ content }: Services) => {
    return (
        <Section id="services" className="gap-16">
            <div className="flex flex-col items-center gap-1">
                <span className="text-gray-light uppercase leading-none">
                    Nossos
                </span>
                <span className="text-[4rem] text-green-gradient font-bold uppercase leading-tight">
                    Serviços
                </span>
            </div>

            <div className="flex justify-center items-center gap-12 w-full">
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