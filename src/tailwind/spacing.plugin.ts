// src/tailwind/spacing.plugin.ts
import plugin from 'tailwindcss/plugin';
import spacing from '../tokens/spacing';

export const spacingPlugin = plugin(({ addUtilities }) => {
	const utilities: Record<string, any> = {};

	Object.entries(spacing).forEach(([key, value]) => {
		utilities[`.${key}`] = {
			margin: value,
			padding: value,
		};
	});

	addUtilities(utilities);
});
