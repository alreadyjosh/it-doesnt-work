import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Language } from '../types/language';
import { languageData } from '../constants/languages';

interface LanguageSelectorProps {
	currentLanguage: Language;
	onLanguageChange: (lang: Language) => void;
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setDropdownOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleLanguageSelect = (lang: Language) => {
		setDropdownOpen(false);
		onLanguageChange(lang);
	};

	return (
		<div className="absolute top-4 right-4" ref={dropdownRef}>
			<button
				onClick={() => setDropdownOpen(!dropdownOpen)}
				className="bg-white text-gray-700 px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
			>
				<img src={languageData[currentLanguage].flag} alt="" className="w-6 h-4 object-cover rounded-sm" />
				<span>{languageData[currentLanguage].name}</span>
				<ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
			</button>

			{dropdownOpen && (
				<div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-10 min-w-[180px]">
					{(Object.keys(languageData) as Language[]).map((lang) => (
						<button
							key={lang}
							onClick={() => handleLanguageSelect(lang)}
							className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-orange-50 transition-colors ${
								currentLanguage === lang ? 'bg-orange-100' : ''
							}`}
						>
							<img src={languageData[lang].flag} alt="" className="w-6 h-4 object-cover rounded-sm" />
							<span className="font-medium">{languageData[lang].name}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
