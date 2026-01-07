import colors from './colors';

const semanticColors = {
  Primary: {
    Normal: colors['Color-Primitive-CosmicBlue']['500'],
    Strong: colors['Color-Primitive-CosmicBlue']['600'],
    Heavy: colors['Color-Primitive-CosmicBlue']['700'],
  },
  Label: {
    Strong: colors['Color-Primitive-Neutral']['900'],
    Normal: colors['Color-Primitive-Neutral']['800'],
    Subtle: colors['Color-Primitive-Neutral']['700'],
    Neutral: colors['Color-Primitive-Neutral']['600'],
    Alternative: colors['Color-Primitive-Neutral']['500'],
    Assistive: colors['Color-Primitive-Neutral']['400'],
    Disable: colors['Color-Primitive-Neutral']['300'],
    Faint: colors['Color-Primitive-Neutral']['200'],
    Inverse: colors['Color-Primitive-Neutral']['0'],
  },
  Feedback: {
    Success: colors['Color-Primitive-Green']['500'],
    Information: colors['Color-Primitive-AzureBlue']['500'],
    Error: colors['Color-Primitive-Red']['500'],
    Warning: colors['Color-Primitive-Orange']['500'],
  },
  Background: {
    Subtle: colors['Color-Primitive-Neutral']['200'],
    Neutral: colors['Color-Primitive-Neutral']['100'],
    Alternative: colors['Color-Primitive-Neutral']['50'],
    Assistive: colors['Color-Primitive-Neutral']['25'],
    Normal: colors['Color-Primitive-Neutral']['0'],
  },
  Border: {
    Normal: colors['Color-Primitive-Neutral']['200'],
    Neutral: colors['Color-Primitive-Neutral']['100'],
    Alternative: colors['Color-Primitive-Neutral']['50'],
    Assistive: colors['Color-Primitive-Neutral']['25'],
  },
  Static: {
    Black: colors['Color-Primitive-Neutral']['900'],
    White: colors['Color-Primitive-Neutral']['0'],
  },
};

export default semanticColors;
