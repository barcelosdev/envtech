import { Presentation, AboutUs, Services, Projects, Contact } from "@/components/templates";
import { serviceCard, aboutCard, projectCard } from "@/static";

const Home = async () => {
	return (
		<main className="flex flex-col justify-start items-center">
			<Presentation />
			<AboutUs content={aboutCard} />
			<Services content={serviceCard} />
			<Projects content={projectCard} />
			<Contact />
		</main >
	)
}

export default Home;