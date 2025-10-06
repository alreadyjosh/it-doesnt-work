import type { Language, LanguageData } from '../types/language';

export const languageData: Record<Language, LanguageData> = {
	en: { flag: 'https://flagcdn.com/w40/gb.png', name: 'English' },
	de: { flag: 'https://flagcdn.com/w40/de.png', name: 'Deutsch' },
	fr: { flag: 'https://flagcdn.com/w40/fr.png', name: 'Français' }
};

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'de', 'fr'];
