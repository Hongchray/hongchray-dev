import { Github, Twitter, Figma, Linkedin } from "lucide-react";

import LogoLaravel from "/public/images/logos/logo/1.png";
import LogoVue from "/public/images/logos/logo/2.png";
import LogoNext from "/public/images/logos/logo/10.png";
import LogoTypeScript from "/public/images/logos/logo/4.png";
import LogoJS from "/public/images/logos/logo/5.png";
import LogoTailwind from "/public/images/logos/logo/6.png";
import LogoGit from "/public/images/logos/logo/11.png";
import LogoPostgreSQL from "/public/images/logos/logo/8.png";
import LogoMySQL from "/public/images/logos/logo/9.png";

import LogoIndomie from "/public/images/experience/Indomie_Logo.png";
import LogoFocuz from "/public/images/experience/focuz.png";

import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";
import {
	ExperienceDetails,
	ProjectDetails,
	TechDetails,
	TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
	GITHUB: "https://github.com/shahsagarm",
	GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
	TWITTER: "https://twitter.com/shahsagarm",
	FIGMA: "https://www.figma.com/@shahsagarm",
	FIGMA_FILE:
		"https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
	{
		label: "About",
		href: "#about",
	},
	{
		label: "Work",
		href: "#work",
	},
	{
		label: "Testimonials",
		href: "#testimonials",
	},
	{
		label: "Contact",
		href: "#contact",
	},
];

export const SOCIAL_LINKS = [
	{
		icon: Github,
		url: "https://github.com/Hongchray",
	},
	{
		icon: Twitter,
		url: "https://x.com/HongchraySong",
	},
	{
		icon: Linkedin,
		url: "https://www.linkedin.com/in/songhongchray/",
	},
];

export const TECHNOLOGIES: TechDetails[] = [
	{
		label: "Laravel",
		logo: LogoLaravel,
		url: "https://laravel.com/",
	},
	{
		label: "Javascript",
		logo: LogoJS,
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		label: "Typescript",
		logo: LogoTypeScript,
		url: "https://www.typescriptlang.org/",
	},
	{
		label: "Tailwindcss",
		logo: LogoTailwind,
		url: "https://tailwindcss.com/",
	},
	{
		label: "Vue.js",
		logo: LogoVue,
		url: "https://vuejs.org/",
	},

	{
		label: "Next.js",
		logo: LogoNext,
		url: "https://nextjs.org/",
	},

	{
		label: "PostgreSQL",
		logo: LogoPostgreSQL,
		url: "https://www.postgresql.org/",
	},
	{
		label: "MySQL",
		logo: LogoMySQL,
		url: "https://www.mysql.com/",
	},

	{
		label: "Github",
		logo: LogoGit,
		url: "https://git-scm.com/",
	},
];

export const EXPERIENCES: ExperienceDetails[] = [
	{
		logo: LogoFocuz,
		logoAlt: "Focuz logo",
		position: "Full Stack Developer",
		startDate: new Date(2024, 7),
		currentlyWorkHere: true,
		summary: [
			"Worked as a Full-Stack Developer using Laravel, Vue.js, and Next.js.",
		],
	},
	{
		logo: LogoIndomie,
		logoAlt: "Indomie Cambodia",
		position: "Marketing Surveyor",
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 7),

		summary: [
			"Marketing Surveyor responsible for market research, customer data collection, and supporting marketing strategies and business decisions.",
		],
	},
];

export const PROJECTS: ProjectDetails[] = [
	{
		name: "Wingie",
		description:
			"A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
		url: "https://www.wingie.com",
		previewImage: ProjectWingie,
		technologies: [
			"React",
			"Typescript",
			"React Bootstrap",
			"Firebase",
			"Express.js",
			"PostgreSQL",
			"Styled Components",
			"Redux",
		],
	},
	{
		name: "Fiskil",
		description:
			"A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
		url: "https://fiskil.com.au",
		previewImage: ProjectFiskil,
		technologies: [
			"React",
			"Next.js",
			"Typescript",
			"Tailwindcss",
			"Material UI",
			"Redux Toolkit",
			"React Query",
			"Express.js",
			"PostgreSQL",
			"Firebase",
			"AWS Amplify",
			"Cypress",
			"Storybook",
		],
	},
	{
		name: "Pepehousing",
		description:
			"A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
		url: "https://pepehousing.com",
		previewImage: ProjectPepehousing,
		technologies: [
			"React",
			"Next.js",
			"Typescript",
			"Tailwindcss",
			"Redux Toolkit",
			"React Query",
			"Storybook",
		],
	},
];

export const TESTIMONIALS: TestimonialDetails[] = [
	{
		personName: "Krisztian Gyuris",
		personAvatar: AvatarKrisztian,
		title: "Founder - inboxgenie.io",
		testimonial:
			"Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
	},
	{
		personName: "Eugen Esanu",
		personAvatar: AvatarEugen,
		title: "Founder - shosho.design",
		testimonial:
			"Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
	},
	{
		personName: "Joe Matkin",
		personAvatar: AvatarDummy,
		title: "Freelancer",
		testimonial:
			"Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
	},
];
