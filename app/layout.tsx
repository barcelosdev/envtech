import "@/stylesheets/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"
import Header from "../components/organisms/header"
import Footer from "../components/organisms/footer"
import { config } from "@/utils/request-config"

const inter = Inter({ subsets: ["latin"] })
const url = process.env.NEXT_PUBLIC_STATIC_FILES;

export const metadata: Metadata = {
	title: "Env Tech | Soluções Web",
	description: "Softwares que transformam seu negócio",
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {

	const menu = await fetch(`${url}/header.json`, config).then((res) => {
		return res.json();
	});

	const footerMenu = await fetch(`${url}/footer-menu.json`, config).then((res) => {
		return res.json();
	})

	const socialMedia = await fetch(`${url}/social-media.json`, config).then((res) => {
		return res.json();
	})

	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<Header content={menu} />
				{children}
				<Footer
					menu={footerMenu}
					socialMedia={socialMedia}
				/>
			</body>
		</html>
	)
}

export default RootLayout;