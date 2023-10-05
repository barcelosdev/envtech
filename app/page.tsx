import Contact from "../components/templates/contact";
import Projects from "../components/templates/projects";
import Services from "../components/templates/services";
import Presentation from "../components/templates/presentation";
import { config } from "@/utils/request-config";
import AboutUs from "../components/templates/about-us";

const url = process.env.NEXT_PUBLIC_STATIC_FILES;

const Home = async () => {

	const services = await fetch(`${url}/service-card.json`, config).then((response) => {
		return response.json();
	});

	const projects = await fetch(`${url}/project-card.json`, config).then((response) => {
		return response.json();
	});

	const cards = await fetch(`${url}/about-cards.json`).then((response) => {
		return response.json();
	})

	return (
		<main className="flex flex-col justify-start items-center">
			<Presentation />
			<AboutUs content={cards} />
			<Services content={services} />
			<Projects content={projects} />
			<Contact />
		</main >
	)
}

export default Home;