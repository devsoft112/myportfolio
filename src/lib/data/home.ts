import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Calvin';

export const lastName = 'Gilyard';

export const description =
	`Hello!, welcome to my portfolio, here you will be able to learn a bit about me and my software engineer career. I am a very passionate person about technology and I love making softwares with purpose for companies and individual clients. I hope you like what you'll see here :)`;

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/devsoft112' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/calvin-gilyard/'
	},  
	{
		platform: Platform.Email,
		link: 'calvingilyard0417@gmail.com'
	},
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'ts', 'c#', 'java', 'python');
