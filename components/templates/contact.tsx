"use client"

import { useState } from "react";
import FormField from "../molecules/form-field";
import FormGroup from "../organisms/form-group";
import Section from "../organisms/section";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {

    const [form, setForm] = useState({
        fromName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: ""
    })

    function sendEmail() {
        const emailBody = {
            fromName: form.fromName,
            email: form.email,
            phoneNumber: form.phoneNumber,
            subject: form.subject,
            message: form.message
        }

        emailjs.send(
            serviceId!,
            templateId!,
            emailBody,
            publicKey
        );
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    return (
        <Section id="contact" className="gap-16 mb-16">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    ease: "easeIn",
                    duration: 1
                }}
            >
                <div className="flex flex-col items-center gap-1 w-full mb-[3rem]">
                    <span className="text-gray-light pl-[0.15rem] uppercase leading-none">
                        ENTRE EM
                    </span>
                    <span className="text-[4rem] text-green-gradient font-bold uppercase leading-none">
                        CONTATO
                    </span>
                </div>

                <div className="flex flex-col items-end gap-8 w-[43.75rem]">
                    <FormGroup>
                        <FormField
                            name="fromName"
                            onChange={handleChange}
                            label="NOME"
                            placeholder="Digite seu nome"
                        />
                        <FormField
                            name="email"
                            onChange={handleChange}
                            label="E-MAIL"
                            placeholder="seuemail@exemplo.com"
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormField
                            name="phoneNumber"
                            onChange={handleChange}
                            label="TELEFONE (OPCIONAL)"
                            placeholder="(99) 99999-9999"
                        />
                        <FormField
                            name="subject"
                            onChange={handleChange}
                            label="ASSUNTO"
                            placeholder="Do que se trata?"
                        />
                    </FormGroup>

                    <div className="flex flex-col items-start gap-3 w-full">
                        <span className="text-sm font-bold">
                            MESSAGEM
                        </span>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full h-48 max-h-[25rem] min-h-[4rem] p-3 rounded-xl bg-white border shadow-md overflow-auto focus:border-green-300"
                            placeholder="Digite sua mensagem"
                            wrap="hard"
                            onChange={handleChange}
                        />
                    </div>

                    <button onClick={sendEmail} className="flex justify-center items-center py-2 px-3 w-max rounded-lg bg-yellow-primary hover:bg-yellow-600 active:opacity-30">
                        <span className="text-white font-medium cursor-pointer">
                            Enviar mensagem
                        </span>
                    </button>
                </div>
            </motion.div>
        </Section>
    );
}

export default Contact;