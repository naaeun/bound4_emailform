// src/tailwind/color.plugin.ts
import plugin from 'tailwindcss/plugin';
import colors from '../tokens/colors';

export const colorPlugin = plugin(({ addUtilities }) => {
	const utilities: Record<string, any> = {};

	Object.entries(colors).forEach(([group, values]) => {
		Object.entries(values as Record<string, string>).forEach(([key, value]) => {
			utilities[`.text-${group}-${key}`] = { color: value };
			utilities[`.bg-${group}-${key}`] = { backgroundColor: value };
			utilities[`.border-${group}-${key}`] = { borderColor: value };
		});
	});

	addUtilities(utilities);
});
