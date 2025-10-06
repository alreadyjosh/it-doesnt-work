import type { Language, Translation } from '../types/language';

export function detectLanguage(): Language {
	const browserLang = navigator.language.toLowerCase();
	if (browserLang.startsWith('de')) return 'de';
	if (browserLang.startsWith('fr')) return 'fr';
	return 'en';
}

export function getLanguageFromPath(): Language | null {
	const path = window.location.pathname;
	const pathLang = path.substring(1, 3) as Language;

	if (pathLang === 'en' || pathLang === 'de' || pathLang === 'fr') {
		return pathLang;
	}

	return null;
}

export function updateMetaTags(translation: Translation): void {
	document.title = translation.metaTitle;

	const metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.setAttribute('content', translation.metaDescription);
	}

	const ogTitle = document.querySelector('meta[property="og:title"]');
	if (ogTitle) {
		ogTitle.setAttribute('content', translation.metaTitle);
	}

	const ogDescription = document.querySelector('meta[property="og:description"]');
	if (ogDescription) {
		ogDescription.setAttribute('content', translation.metaDescription);
	}

	const ogImage = document.querySelector('meta[property="og:image"]');
	if (ogImage) {
		ogImage.setAttribute('content', translation.ogImage);
	}
}
