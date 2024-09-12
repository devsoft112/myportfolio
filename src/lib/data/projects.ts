import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import KalygoEN from '$lib/screenshots/Kalygo/kalygoEN.png';
import KalygoFR from '$lib/screenshots/Kalygo/KalygoFR.png';
import Dashboard from '$lib/screenshots/Kalygo/Dashboard.png';
import login from '$lib/screenshots/Kalygo/login.png';
import RCTRACKS from '$lib/screenshots/RCTRACKS/RCpage.png';
import WaffleApps from '$lib/screenshots/stagewood/WaffleApps.png';
import Login from '$lib/screenshots/stagewood/login.png';
import Captcha from '$lib/screenshots/stagewood/Captcha.png';
import Screenshot1 from '$lib/screenshots/AMtrust/Screenshot1.png';
import Screenshot2 from '$lib/screenshots/AMtrust/Screenshot2.png';
import gighive1 from '$lib/screenshots/GigHive/gighive.png';
import gighive2 from '$lib/screenshots/GigHive/Screenshot1.png';
import gighive3 from '$lib/screenshots/GigHive/Screenshot2.png';


export const items: Array<Project> = [
	{
		slug: 'Kalygo',
		color: 'blue',
		description:
			'This project was an internship I had in 2023 where I helped developing features. Some of them were translating the website to 40+ languages dinamycally, Working on the google login integration and enhancing existing features. You can check on the website by clicking on the Kalygo link right above the skills, or at https://kalygo.io/en',
		shortDescription:
			'Process data according to your preferences',
		links: [{ to: 'https://kalygo.io/en', label: 'Kalygo' }],
		logo: Assets.Kalygo,
		name: 'Kalygo Project',
		period: {
			from: new Date(2023, 5, 31), to: new Date(2023, 9, 31)
		},
		skills: getSkills('ts', 'tailwind', 'js', 'html'),
		type: 'Software as a Service.',
		screenshots: [
			{ label: 'Kalygo in english', src: KalygoEN },
			{ label: 'Kalygo in french', src: KalygoFR },
			{ label: 'Dashboard to upload files and summarize them.', src: Dashboard },
			{ label: 'Login with Google integration', src: login },

		]
	},
	{
		slug: 'RC TRACKS',
		color: '#ff3e00',
		description:
			`This was one of my very first websites created for a client. This website was built from scratch with little to no styling tools. Most of the designs in this website were handcrafted based on the cleint's preferences. You can check on this project by clicking on the link above the skills or here: https://rc-tracks-2.vercel.app/`,
		shortDescription:
			'RC TRACKS Landing Page',
		links: [{ to: 'https://rc-tracks-2.vercel.app/', label: 'RC TRACKS' }],
		logo: Assets.RC,
		name: 'RC TRACKS',
		period: {
			from: new Date(2023, 3, 1), to: new Date(2023, 4, 1)
		},
		skills: getSkills('ts', 'tailwind', 'figma'),
		type: 'Website Landing Page',
		screenshots: [
			{ label: 'Hero Section', src: RCTRACKS },
		]
	},
	{
		slug: 'Stagewood Inc.',
		color: 'palevioletred',
		description:
			`In this group project, I mainly worked on an internal software called DataSync, the Navigation Bar, login UI, login integrations and login captcha. The login feature and the DataSync project are shared across all websites they own. The internal tool DataSync was a tool built for the management of the company to be able to update information across all their websites and mobile applications without the need to code or have any tech knowledge. I was the head of the project and worked on the UI of the platform, created API endpoints on the backend with .NET, and setted up MongoDB databases to push information from the backend. As this is an internal tool of the company, I can't show it to the world, but I can show the Navigation Bar, login UI with the Google, Facebook and Apple integrations that I created and are shared across all websites this company owns, as well as the login captcha modal. https://dev.tykbroker.com/`,
		shortDescription:
			'Stagewood Inc. TykBroker project.',
		links: [{ to: 'https://stagewood.com/', label: 'Stagewood Inc.' }],
		logo: Assets.Stagewood,
		name: 'Stagewood Inc.',
		period: {
			from: new Date(2023, 7, 1), to: new Date(2023, 10, 1)
		},
		skills: getSkills('ts', 'mui', 'js', 'c#', '.net', 'azuredevops', 'mongodb', 'nextjs', 'reactjs', 'figma'),
		type: 'Software as a Service.',
		screenshots: [
			{ label: 'Dynamic Waffle apps', src: WaffleApps },
			{ label: 'login', src: Login },
			{ label: 'Captcha Modal', src: Captcha },

		]
	},
	{
		slug: 'Java Project',
		color: 'yellow',
		description:
			`This is a personal project I decided to make to practice and showcase my abilities as a backend developer, so it is not a full stack project like the others. For this project, I utilized all the knowledge I have in Java to create a hypothetical backend for a social media app, where users can sign up, log in, send and receive messages, and post comments. I also added test cases and did everything within the javalin framework.`,
		shortDescription:
			'Back end of a hypothetical Social Media Blog API',
		links: [{ to: 'https://github.com/devsoft112/devsoft-pep-project', label: 'Github' }],
		logo: Assets.Unknown,
		name: 'Java Backend Project',
		period: {
			from: new Date(2023, 7, 1), to: new Date(2023, 7, 15)
		},
		skills: getSkills('java', 'javalin', 'mysql'),
		type: 'Personal Project',
	},
	{
		slug: 'Portfolio',
		color: 'cyan',
		description:
			`My personal portfolio website.`,
		shortDescription:
			'My personal portfolio website.',
		links: [{ to: 'https://devsoft112.github.io/myportfolio/', label: 'Github' }],
		logo: Assets.Portfolio,
		name: 'Portfolio',
		period: {
			from: new Date(2024, 1, 1), to: new Date(2024, 2, 1)
		},
		skills: getSkills('html', 'css', 'js', 'ts'),
		type: 'Website',
	},
	{
		slug: 'Website',
		color: 'lightsteelblue',
		description:
			`Company website requested by a client.`,
		shortDescription:
			'Company website requested by a client, entirely developed and designed by me.',
		links: [{ to: 'https://amtrust5.wordpress.com/', label: 'Website' }],
		logo: Assets.AMtrust,
		name: 'AMtrust Financial & Insurance Services',
		period: {
			from: new Date(2024, 5, 1), to: new Date(2024, 5, 8)
		},
		skills: getSkills('html', 'css', 'js', 'wordpress', 'figma'),
		type: 'Website',
		screenshots: [
			{ label: 'Website page', src: Screenshot1 },
			{ label: 'Website main page', src: Screenshot2 },

		]
	},
	{
		slug: 'GigHive',
		color: 'mediumorchid',
		description:
			`A middleman app for venues and musicians created from scratch, where venues and musicians can sign up and create
			their profiles as venues or artists and create events or attend events, utilizing JS and Python. Pitched for our final
			project.`,
		shortDescription:
			'Middle man application for venues and artists.',
		links: [{ to: 'https://github.com/devsoft112/GigHive-Project', label: 'Github' }],
		logo: Assets.GigHive,
		name: 'GigHive',
		period: {
			from: new Date(2023, 3, 1), to: new Date(2023, 4, 12)
		},
		skills: getSkills('html', 'css', 'js', 'bootstrap', 'flask', 'postgreSQL', 'python', 'jest', 'reactjs'),
		type: 'Personal Project',
		screenshots: [
			{ label: 'Website page', src: gighive1 },
			{ label: 'transition', src: gighive2 },
			{ label: 'maps', src: gighive3 },

		]
	},
	{
		slug: 'Real State Website',
		color: 'sienna',
		description:
			`AngularJS project needed for the ServiceNow training at Revature.`,
		shortDescription:
			'AngularJS project simulating a real state website.',
		links: [{ to: 'https://github.com/devsoft112/Rev-Project0', label: 'Github' }],
		logo: Assets.RealEstate,
		name: 'Real Estate Website',
		period: {
			from: new Date(2024, 0, 1), to: new Date(2024, 0, 15)
		},
		skills: getSkills('html', 'css', 'js', 'bootstrap', 'angular'),
		type: 'Personal Project',
	}
];

export const title = 'Projects';
