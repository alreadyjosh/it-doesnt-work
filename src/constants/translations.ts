import type { Language, Translation } from '../types/language';

export const translations: Record<Language, Translation> = {
	en: {
		title: '"It doesn\'t work"',
		subtitle: 'Great! But... what doesn\'t work?',
		problem: 'The Problem with Generic Messages',
		badExample: 'Bad Example',
		badExampleText: 'It doesn\'t work',
		whyBad: 'This tells us absolutely nothing. What is "it"? What did you expect? What actually happened?',
		goodExample: 'Good Example',
		goodExampleText: 'I\'m trying to upload a profile picture (JPG, 2MB), but I get an error message saying "Upload failed: File too large". I\'m using Chrome on Windows 11.',
		whyGood: 'This gives us context, the specific error, what you were trying to do, and your environment. Now we can actually help!',
		checklist: 'How to Get Great Support',
		checklistItems: [
			'What were you trying to do?',
			'What did you expect to happen?',
			'What actually happened?',
			'Any error messages? (Screenshot or copy the exact text)',
			'What browser/device/OS are you using?',
			'When did this start happening?'
		],
		footer: 'Help us help you. Be specific, be clear, get better support.',
		languageName: 'English',
		footerInspired: 'Inspired by',
		footerMaintained: 'maintained by',
		footerOpenSource: 'Open-Source on',
		metaTitle: 'Don\'t just say "it doesn\'t work"',
		metaDescription: 'Help us help you: Be specific about your issue, include error messages, and explain what you expected to happen.',
		ogImage: 'https://pileshare.com/u/5dVKUkEo'
	},
	de: {
		title: '"Es funktioniert nicht"',
		subtitle: 'Toll! Aber... was funktioniert nicht?',
		problem: 'Das Problem mit generischen Nachrichten',
		badExample: 'Schlechtes Beispiel',
		badExampleText: 'Es funktioniert nicht',
		whyBad: 'Das sagt absolut nichts aus. Was ist "es"? Was hast du erwartet? Was ist tatsächlich passiert?',
		goodExample: 'Gutes Beispiel',
		goodExampleText: 'Ich versuche, ein Profilbild hochzuladen (JPG, 2MB), aber ich bekomme eine Fehlermeldung "Upload fehlgeschlagen: Datei zu gross". Ich benutze Chrome unter Windows 11.',
		whyGood: 'Das gibt uns den Kontext, die genaue Fehlermeldung, was du machen wolltest und deine Umgebung. Jetzt können wir dir tatsächlich helfen!',
		checklist: 'So erhältst du grossartige Unterstützung',
		checklistItems: [
			'Was hast du versucht zu tun?',
			'Was hast du erwartet?',
			'Was ist tatsächlich passiert?',
			'Irgendwelche Fehlermeldungen? (Screenshot oder exakter Text)',
			'Welchen Browser/Gerät/OS verwendest du?',
			'Wann hat das Problem angefangen?'
		],
		footer: 'Hilf uns, dir zu helfen. Sei spezifisch, sei klar, erhalte bessere Unterstützung.',
		languageName: 'Deutsch',
		footerInspired: 'Inspiriert von',
		footerMaintained: 'gepflegt von',
		footerOpenSource: 'Open-Source auf',
		metaTitle: 'Sag nicht einfach "es funktioniert nicht"',
		metaDescription: 'Hilf uns, dir zu helfen: Sei präzise bei deinem Problem, füge Fehlermeldungen hinzu und erkläre, was du erwartet hast.',
		ogImage: 'https://pileshare.com/u/NIFD8wxA'
	},
	fr: {
		title: '"Ça ne marche pas"',
		subtitle: 'Super ! Mais... qu\'est-ce qui ne marche pas ?',
		problem: 'Le problème avec les messages génériques',
		badExample: 'Mauvais exemple',
		badExampleText: 'Ça ne marche pas',
		whyBad: 'Cela ne nous dit absolument rien. Qu\'est-ce que "ça" ? Qu\'attendiez-vous ? Que s\'est-il réellement passé ?',
		goodExample: 'Bon exemple',
		goodExampleText: 'J\'essaie de télécharger une photo de profil (JPG, 2MB), mais j\'obtiens un message d\'erreur disant "Échec du téléchargement : Fichier trop volumineux". J\'utilise Chrome sur Windows 11.',
		whyGood: 'Cela nous donne le contexte, l\'erreur spécifique, ce que vous essayiez de faire et votre environnement. Maintenant nous pouvons vraiment aider !',
		checklist: 'Comment obtenir un excellent support',
		checklistItems: [
			'Qu\'essayiez-vous de faire ?',
			'Qu\'attendiez-vous ?',
			'Que s\'est-il réellement passé ?',
			'Des messages d\'erreur ? (Capture d\'écran ou texte exact)',
			'Quel navigateur/appareil/OS utilisez-vous ?',
			'Quand cela a-t-il commencé ?'
		],
		footer: 'Aidez-nous à vous aider. Soyez précis, soyez clair, obtenez un meilleur support.',
		languageName: 'Français',
		footerInspired: 'Inspiré par',
		footerMaintained: 'maintenu par',
		footerOpenSource: 'Open-Source sur',
		metaTitle: 'Ne dites pas simplement "ça ne marche pas"',
		metaDescription: 'Aidez-nous à vous aider : Soyez précis sur votre problème, incluez les messages d\'erreur et expliquez ce que vous attendiez.',
		ogImage: 'https://pileshare.com/u/4NHehtJs'
	}
};
