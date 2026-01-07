// src/tailwind/typography.plugin.ts
import plugin from 'tailwindcss/plugin';
import typography from '../tokens/typography';

export const typographyPlugin = plugin(({ addUtilities }) => {
	const utilities: Record<string, any> = {};

	const walk = (data: Record<string, any>, prefix = 'text-') => {
		Object.entries(data).forEach(([key, value]) => {
			if (value?.fontFamily) {
				utilities[`.${prefix}${key}`] = {
					fontFamily: value.fontFamily,
					fontWeight: value.fontWeight,
					fontSize: value.fontSize,
					lineHeight: value.lineHeight,
					letterSpacing: value.letterSpacing,
				};
			} else if (typeof value === 'object') {
				walk(value, `${prefix}${key}-`);
			}
		});
	};

	walk(typography);
	addUtilities(utilities);
});
