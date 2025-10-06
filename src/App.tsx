import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, MessageSquare, Bug, FileText } from 'lucide-react';
import type { Language, Translation } from './types/language';
import { translations } from './constants/translations';
import { detectLanguage, getLanguageFromPath, updateMetaTags } from './utils/language';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
	const [language, setLanguage] = useState<Language>('en');
	const [t, setT] = useState<Translation>(translations.en);

	useEffect(() => {
		const pathLang = getLanguageFromPath();
		const initialLang = pathLang || detectLanguage();

		if (!pathLang) {
			window.history.replaceState(null, '', `/${initialLang}`);
		}

		// Use the path language if it exists, otherwise use browser language
		const finalLang = pathLang || initialLang;
		setLanguage(finalLang);
		setT(translations[finalLang]);
		updateMetaTags(translations[finalLang]);
	}, []);

	const changeLanguage = (lang: Language) => {
		setLanguage(lang);
		setT(translations[lang]);
		window.history.pushState(null, '', `/${lang}`);
		updateMetaTags(translations[lang]);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
			<LanguageSelector currentLanguage={language} onLanguageChange={changeLanguage} />

			<div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
				<div className="text-center mb-8 sm:mb-12 animate-fadeIn mt-16">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 px-2">{t.title}</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 px-2">{t.subtitle}</p>
				</div>

				<div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
					<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
						<MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
						<span>{t.problem}</span>
					</h2>

					<div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
						<div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 sm:p-6 transform transition-transform hover:scale-105">
							<div className="flex items-center gap-2 mb-3">
								<XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />
								<h3 className="text-lg sm:text-xl font-bold text-red-700">{t.badExample}</h3>
							</div>
							<div className="bg-white rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border-l-4 border-red-500">
								<p className="text-gray-800 font-mono text-sm">{t.badExampleText}</p>
							</div>
							<p className="text-sm sm:text-base text-gray-700">{t.whyBad}</p>
						</div>

						<div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 sm:p-6 transform transition-transform hover:scale-105">
							<div className="flex items-center gap-2 mb-3">
								<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
								<h3 className="text-lg sm:text-xl font-bold text-green-700">{t.goodExample}</h3>
							</div>
							<div className="bg-white rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border-l-4 border-green-500">
								<p className="text-gray-800 text-xs sm:text-sm">{t.goodExampleText}</p>
							</div>
							<p className="text-sm sm:text-base text-gray-700">{t.whyGood}</p>
						</div>
					</div>

					<div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-4 sm:p-6">
						<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
							<FileText className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
							<span>{t.checklist}</span>
						</h3>
						<ul className="space-y-2 sm:space-y-3">
							{t.checklistItems.map((item, index) => (
								<li key={index} className="flex items-start gap-2 sm:gap-3">
									<Bug className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-1 flex-shrink-0" />
									<span className="text-gray-800 text-sm sm:text-base md:text-lg">{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="text-center text-gray-600 text-base sm:text-lg px-4">
					<p className="font-medium">{t.footer}</p>
				</div>

				<div className="text-center mt-8 text-gray-500 text-sm">
					<p>
						{t.footerInspired}{' '}
						<a
							href="https://nohello.net"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-600 hover:text-orange-700 underline"
						>
							nohello.net
						</a>
						, {t.footerMaintained}{' '}
						<a
							href="https://yosh.codes"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-600 hover:text-orange-700 underline"
						>
							yosh.codes
						</a>
						. {t.footerOpenSource}{' '}
						<a
							href="https://github.com/alreadyjosh/it-doesnt-work"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-600 hover:text-orange-700 underline"
						>
							GitHub
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
