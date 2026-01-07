import { Config } from 'tailwindcss';
import { radiusPlugin } from './src/tailwind/radius.plugin';
import { shadowPlugin } from './src/tailwind/shadow.plugin';
import { spacingPlugin } from './src/tailwind/spacing.plugin';
import { typographyPlugin } from './src/tailwind/typography.plugin';
import colors from './src/tokens/colors';
import radius from './src/tokens/radius';
import semanticColors from './src/tokens/semanticColors';
import shadow from './src/tokens/shadow';
import spacing from './src/tokens/spacing';
import typography from './src/tokens/typography';

// shadow 데이터를 변환하여 boxShadow로 사용
const convertShadowToBoxShadow = (
  shadows: typeof shadow
): Record<string, string> => {
  const boxShadow: Record<string, string> = {};
  Object.entries(shadows).forEach(([key, { value }]) => {
    boxShadow[key] =
      `${value.x}px ${value.y}px ${value.blur}px ${value.spread}px ${value.color}`;
  });
  return boxShadow;
};
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        // ✅ Semantic Colors 추가
        'Color-Primary': semanticColors.Primary,
        'Color-Label': semanticColors.Label,
        'Color-Feedback': semanticColors.Feedback,
        'Color-Background': semanticColors.Background,
        'Color-Border': semanticColors.Border,
        'Color-Static': semanticColors.Static,
        // ✅ Primitive Colors 추가
        'Color-Primitive-CosmicBlue': colors['Color-Primitive-CosmicBlue'],
        'Color-Primitive-AzureBlue': colors['Color-Primitive-AzureBlue'],
        'Color-Primitive-TahitiGreen': colors['Color-Primitive-TahitiGreen'],
        'Color-Primitive-Neutral': colors['Color-Primitive-Neutral'],
        'Color-Primitive-Orange': colors['Color-Primitive-Orange'],
        'Color-Primitive-Red': colors['Color-Primitive-Red'],
        'Color-Primitive-Green': colors['Color-Primitive-Green'],
      },
      spacing,
      borderRadius: radius,
      typography,
      boxShadow: convertShadowToBoxShadow(shadow), // 변환된 boxShadow 추가
    },
  },
  plugins: [
    // semanticColorPlugin, // ⭐ 의미 색상 우선
    // colorPlugin, // primitive
    spacingPlugin,
    radiusPlugin,
    shadowPlugin,
    typographyPlugin,
  ],
};

export default config;
