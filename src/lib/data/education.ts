import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Web Development Certification',
		description: '',
		location: 'Miami, Florida',
		logo: Assets.Geeks,
		name: '',
		organization: '4Geeks Academy',
		period: { from: new Date(2023, 1, 3), to: new Date(2023, 5, 12) },
		shortDescription: '',
		slug: '',
		subjects: ['HTML5','CSS3', 'Bootstrap', 'JavaScript', 'React', 'Python', 'Flask', 'SQLAlchemy', 'PostgreSQL']
	},
	{
		degree: 'Associate degree in Software Development',
		description: '',
		location: 'Medellin, Colombia',
		logo: Assets.JaimeIsaza,
		name: '',
		organization: 'Colombian Polytechnic "Jaime Isaza Cadavid"',
		period: { from: new Date(2016, 1, 7), to: new Date(2018, 11, 28)},
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Front end Development', 'Back end Development', 'Computer Architecture', 'Algorithms and Data structures', 'Project Management', 'Java', 'JavaScript']
	}
];

export const title = 'Education';
