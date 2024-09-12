import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			`JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code`,
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: '.net',
		color: 'purple',
		description: "The .NET Framework is a proprietary software framework developed by Microsoft that runs primarily on Microsoft Windows. It was the predominant implementation of the Common Language Infrastructure until being superseded by the cross-platform .NET project.",
		logo: Assets.Dotnet,
		name: '.NET',
		category: 'framework'
	}),
	defineSkill({
		slug: 'python',
		color: 'green',
		description:
			'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'postgreSQL',
		color: 'blue',
		description:
			'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description:
			'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'aqua',
		description:
			'Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'flask',
		color: 'aliceblue',
		description:
			'Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mui',
		color: 'blue',
		description:
			'MUI is a massive library of UI components designers and developers can use to build React applications. The open-source project follows Google’s guidelines for creating components, giving you a customizable library of foundational and advanced UI elements. MUI also sells a collection of React templates and tools, giving you ready-made user interfaces to tweak for your project. ',
		logo: Assets.Mui,
		name: 'Material UI',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description:
			'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. ',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description:
			'Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. ',
		logo: Assets.Angular,
		name: 'AngularJS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'c#',
		color: 'purple',
		description:
			'C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'cornflowerblue',
		description:
			`MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language.`,
		logo: Assets.Mysql,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'forestgreen',
		description:
			'MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'azuredevops',
		color: 'dodgerblue',
		description:
			'Azure DevOps Server, formerly known as Team Foundation Server and Visual Studio Team System, is a Microsoft product that provides version control, reporting, requirements management, project management, automated builds, testing and release management capabilities.',
		logo: Assets.AzureDevops,
		name: 'Azure DevOps',
		category: 'devops'
	}),
	defineSkill({
		slug: 'javalin',
		color: 'darkslategrey',
		description:
			`Javalin is a lightweight, open-source web framework for Java and Kotlin. It's written on top of the Jetty web server and is inspired by Sinatra, a modern micro web framework. Javalin is a REST API library that supports template engines, WebSockets, and static file serving. It's designed to be simple and productive for developers, with only a few thousand lines of code.`,
		logo: Assets.Javalin,
		name: 'Javalin',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'slategrey',
		description:
			'Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.',
		logo: Assets.NextJs,
		name: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'jest',
		color: 'deeppink',
		description:
			'Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest is well-documented, requires little configuration and can be extended to match your requirements.',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'wordpress',
		color: 'royalblue',
		description:
			'WordPress is a web content management system. It was originally created as a tool to publish blogs but has evolved to support publishing other web content, including more traditional websites, mailing lists and Internet forum, media galleries, membership sites, learning management systems and online stores.',
		logo: Assets.WordPress,
		name: 'WordPress',
		category: 'design'
	}),
	defineSkill({
		slug: 'figma',
		color: 'green',
		description:
			'Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.',
		logo: Assets.Figma,
		name: 'Figma',
		category: 'design'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
