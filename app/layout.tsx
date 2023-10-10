import "@/stylesheets/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"
import Header from "../components/organisms/header"
import Footer from "../components/organisms/footer"
import { header, footerMenu, socialMedia } from "@/static";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Env Tech | Soluções Web",
	description: "Softwares que transformam seu negócio",
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<Header content={header} />
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