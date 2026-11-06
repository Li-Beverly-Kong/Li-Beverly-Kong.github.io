/** Primary identity, navigation, and homepage composition. */
import { defineSiteConfig } from "./src/config/site";

export const siteConfig = defineSiteConfig({
	author: "Li Kong",
	title: "Li Kong | AI Researcher",
	siteUrl: "https://li-beverly-kong.github.io",
	description:
		"Li Kong's academic homepage: decision optimization, mechanism design, LLM evaluation, and LLM post-training.",
	keywords: [
		"decision optimization",
		"mechanism design",
		"LLM evaluation",
		"LLM post-training",
		"academic portfolio",
	],
	hero: {
		headline:
			"I am an AI researcher interested in problems that are both intellectually intriguing and practically meaningful.",
		subheadline:
			"I am a second-year master's student at the Gaoling School of Artificial Intelligence, Renmin University of China. I received my B.S. in Computer Science and Technology from Xu Teli Honors College, Beijing Institute of Technology.",
		profileImage: "/profile.png",
		profileAlt: "Li Kong standing in the snow in front of a red wall",
		profileImageWidth: 373,
		profileImageHeight: 373,
	},
	affiliations: [
		{
			role: "Graduate Student in Artificial Intelligence",
			department: "Gaoling School of Artificial Intelligence",
			institution: "Renmin University of China",
		},
	],
	researchInterests: [
		"Game Theory & Mechanism Design",
		"LLM Evaluation",
		"LLM Post-training",
		"Decision Optimization",
	],
	socialLinks: [
		{
			label: "Email",
			href: "mailto:Beverly_Kong@163.com",
			icon: "i-mdi:email-outline",
		},
		{
			label: "GitHub",
			href: "https://github.com/Li-Beverly-Kong",
			icon: "i-mdi:github",
		},
	],
	navLinks: [
		{ href: "/", label: "Home" },
		{ href: "/researches", label: "Publications" },
		{ href: "/projects", label: "Internships" },
		{ href: "/teaching", label: "Teaching" },
	],
	footer: {
		showProfileLinks: false,
		showAuthor: true,
		copyright: "All rights reserved.",
	},
	pageTitles: {
		about: {
			title: "Curriculum Vitae",
			description:
				"Education, research experience, internships, teaching, awards, service, and skills.",
		},
		researches: {
			title: "Publications",
			description: "Publications by Li Kong.",
		},
		projects: {
			title: "Internships",
			description: "Industry research experience by Li Kong.",
		},
		teaching: {
			title: "Teaching",
			description: "Teaching experience by Li Kong.",
		},
		posts: {
			title: "News",
			description: "Recent research, academic, and teaching updates.",
		},
	},
	homeBlocks: {
		hero: { enabled: true },
		showcase: { enabled: false, title: "News" },
		publications: {
			enabled: true,
			title: "Publications",
			description: "Research in optimization, mechanism design, and large language models",
		},
		posts: {
			enabled: true,
			title: "News",
			description: "Recent research and academic updates",
		},
	},
});

export default siteConfig;
