import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Software Engineer Associate',
		company: 'Revature',
		description: `As a Software Engineer Associate at Revature, I work with front and back end technologies such as JavaScript, CSS3, AngularJS, ServiceNow and Java.
		I develop, test, and deploy web applications and services for various clients, using agile methodologies and best practices. I also have experience with ServiceNow administration and development,
		creating custom workflows, integrations, and automation for IT service management.`,
		contract: ContractType.FullTime,
		type: 'Software Engineering',
		location: 'Home',
		period: { from: new Date(2023, 9, 1) },
		skills: getSkills('html','css','angular','js', 'java', 'javalin'),
		name: 'Software Engineer Associate',
		color: 'orange',
		links: [],
		logo: Assets.Revature,
		shortDescription: 'Software solutions for Revature clients.'
	},
	{
		slug: 'Software Developer',
		company: 'Remotasks',
		description: `In addition to my role at Revature, I'm also a Software Developer at Remotasks, a platform that connects freelancers with tasks that require various skills and technologies.
		I work on projects that involve web development, data analysis, machine learning, and computer vision, using Python, TensorFlow, OpenCV, and other tools.
		I enjoy coding and solving problems, and I am always eager to learn new skills and technologies.`,
		contract: ContractType.Freelance,
		type: 'Software Developer',
		location: 'Home',
		period: { from: new Date(2023, 9, 1) },
		skills: getSkills('html', 'css', 'bootstrap', 'tailwind', 'mui', 'js', 'reactjs', 'angular', 'ts', 'python', 'flask', 'c#', '.net', 'postgreSQL'),
		name: 'Software Developer',
		color: 'mediumaquamarine',
		links: [],
		logo: Assets.Remotasks,
		shortDescription: 'New era of AI models and development.'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: `I have acquired multiple programming skills to meet employeer and customer expectations. Such as JavaScript with React, AngularJS and TypeScript for the front end. Python with FLask and C# with .NET for the back end.
		In addition to back and front end stacks, I'm also profecient with database-related stacks, such as MySQL, PostgreSQL and MongoDB.`,
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023, 1, 1) },
		skills: getSkills('html', 'css', 'bootstrap', 'tailwind', 'mui', 'js', 'reactjs', 'angular', 'ts', 'python', 'flask', 'c#', '.net'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'Mentor',
		company: '4Geeks Academy',
		description: `As a mentor, my responsabilities include resolving student's inquiries and explaining them the skills they are being exposed to, such as HTML/CSS, JS, React and Python. I help guiding them based on the bootcamp's expectations to
		have a successful learning path and become hireable to expose them to the job market.`,
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Miami',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 11, 31) },
		skills: getSkills('html','css', 'bootstrap', 'js', 'reactjs', 'python', 'PostgreSQL'),
		name: 'Mentor',
		color: 'green',
		links: [],
		logo: Assets.Geeks,
		shortDescription: 'Bootcamp Mentor'
	}
];

export const title = 'Experience';
