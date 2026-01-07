// src/tailwind/radius.plugin.ts
import plugin from 'tailwindcss/plugin';
import radius from '../tokens/radius';

export const radiusPlugin = plugin(({ addUtilities }) => {
	const utilities: Record<string, any> = {};

	Object.entries(radius).forEach(([key, value]) => {
		utilities[`.${key}`] = {
			borderRadius: value,
		};
	});

	addUtilities(utilities);
});
