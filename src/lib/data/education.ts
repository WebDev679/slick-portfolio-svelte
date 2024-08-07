import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelors in Computer Science',
		description: '',
		location: 'Boston, MA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Boston University',
		period: { from: new Date(2022, 9, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Data Structures & Algorithms', 'Database Design & Implementaion', 'Discrete Mathematics', 'Probability & Statistics',' Logic Design', 'Mobile App Development', 'Object Oriented Programming', 'Computer Architecture', 'Foundations of Data Science'],
	}
];

export const title = 'Education';
