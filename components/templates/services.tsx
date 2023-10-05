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

            <div className="flex justify-between items-center w-full">
                {content.map((e, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                ease: "easeIn",
                                duration: index === 0 ? 1 : (index - (index / 2))
                            }}
                        >
                            <ServiceCard
                                key={index}
                                icon={e.icon}
                                label={e.label}
                                description={e.description}
                            />
                        </motion.div>
                    )
                })}
            </div>
        </Section>
    );
}

export default Services;