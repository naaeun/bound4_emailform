// src/tailwind/shadow.plugin.ts
import plugin from 'tailwindcss/plugin';
import shadow from '../tokens/shadow';

export const shadowPlugin = plugin(({ addUtilities }) => {
	const utilities: Record<string, any> = {};

	Object.entries(shadow).forEach(([key, { value }]: any) => {
		utilities[`.shadow-${key}`] = {
			boxShadow: `${value.x}px ${value.y}px ${value.blur}px ${value.spread}px ${value.color}`,
		};
	});

	addUtilities(utilities);
});
