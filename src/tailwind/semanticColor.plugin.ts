// src/tailwind/semanticColor.plugin.ts
import plugin from 'tailwindcss/plugin';
import semanticColors from '../tokens/semanticColors';

export const semanticColorPlugin = plugin(({ addUtilities }) => {
	const utilities: Record<string, any> = {};

	Object.entries(semanticColors).forEach(([group, values]) => {
		Object.entries(values as Record<string, string>).forEach(([key, value]) => {
			utilities[`.text-${group}-${key}`] = { color: value };
			utilities[`.bg-${group}-${key}`] = { backgroundColor: value };
			utilities[`.border-${group}-${key}`] = { borderColor: value };
		});
	});

	addUtilities(utilities);
});
