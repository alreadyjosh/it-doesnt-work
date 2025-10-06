export type Language = 'en' | 'de' | 'fr';

export interface Translation {
	title: string;
	subtitle: string;
	problem: string;
	badExample: string;
	badExampleText: string;
	whyBad: string;
	goodExample: string;
	goodExampleText: string;
	whyGood: string;
	checklist: string;
	checklistItems: string[];
	footer: string;
	languageName: string;
	footerInspired: string;
	footerMaintained: string;
	footerOpenSource: string;
	metaTitle: string;
	metaDescription: string;
	ogImage: string;
}

export interface LanguageData {
	flag: string;
	name: string;
}
