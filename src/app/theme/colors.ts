// Theme Colors Configuration
// Final Theme: Rosewood, Carmine, Auburn, Burgundy, Cardinal, White, Gray, Black

export const themeColors = {
  // Primary Brand Colors
  rosewood: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d', // Primary Rosewood
    900: '#831843',
  },
  carmine: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b', // Primary Carmine
    900: '#7f1d1d',
  },
  auburn: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e', // Primary Auburn
    900: '#78350f',
  },
  burgundy: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d', // Primary Burgundy
  },
  cardinal: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c', // Primary Cardinal
    800: '#991b1b',
    900: '#7f1d1d',
  },
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  black: '#000000',
};

// Semantic Color Mappings
export const semanticColors = {
  // Primary Brand Colors
  primary: themeColors.rosewood[800],
  secondary: themeColors.carmine[800],
  accent: themeColors.auburn[800],
  emphasis: themeColors.burgundy[900],
  highlight: themeColors.cardinal[700],
  
  // Background Colors
  background: {
    primary: themeColors.white,
    secondary: themeColors.gray[50],
    tertiary: themeColors.gray[100],
    dark: themeColors.gray[900],
  },
  
  // Text Colors
  text: {
    primary: themeColors.gray[900],
    secondary: themeColors.gray[600],
    tertiary: themeColors.gray[500],
    muted: themeColors.gray[400],
    inverse: themeColors.white,
  },
  
  // Border Colors
  border: {
    primary: themeColors.gray[200],
    secondary: themeColors.gray[300],
    accent: themeColors.rosewood[200],
  },
  
  // Status Colors
  status: {
    success: themeColors.auburn[600],
    warning: themeColors.auburn[500],
    error: themeColors.carmine[600],
    info: themeColors.rosewood[600],
  },
  
  // Gradient Combinations
  gradients: {
    primary: `linear-gradient(135deg, ${themeColors.rosewood[800]} 0%, ${themeColors.carmine[800]} 100%)`,
    secondary: `linear-gradient(135deg, ${themeColors.auburn[800]} 0%, ${themeColors.burgundy[900]} 100%)`,
    accent: `linear-gradient(135deg, ${themeColors.cardinal[700]} 0%, ${themeColors.rosewood[700]} 100%)`,
    subtle: `linear-gradient(135deg, ${themeColors.gray[50]} 0%, ${themeColors.white} 100%)`,
    dark: `linear-gradient(135deg, ${themeColors.gray[900]} 0%, ${themeColors.black} 100%)`,
  },
};

// Tailwind CSS Color Classes
export const tailwindColors = {
  // Rosewood
  'rosewood-50': themeColors.rosewood[50],
  'rosewood-100': themeColors.rosewood[100],
  'rosewood-200': themeColors.rosewood[200],
  'rosewood-300': themeColors.rosewood[300],
  'rosewood-400': themeColors.rosewood[400],
  'rosewood-500': themeColors.rosewood[500],
  'rosewood-600': themeColors.rosewood[600],
  'rosewood-700': themeColors.rosewood[700],
  'rosewood-800': themeColors.rosewood[800],
  'rosewood-900': themeColors.rosewood[900],
  
  // Carmine
  'carmine-50': themeColors.carmine[50],
  'carmine-100': themeColors.carmine[100],
  'carmine-200': themeColors.carmine[200],
  'carmine-300': themeColors.carmine[300],
  'carmine-400': themeColors.carmine[400],
  'carmine-500': themeColors.carmine[500],
  'carmine-600': themeColors.carmine[600],
  'carmine-700': themeColors.carmine[700],
  'carmine-800': themeColors.carmine[800],
  'carmine-900': themeColors.carmine[900],
  
  // Auburn
  'auburn-50': themeColors.auburn[50],
  'auburn-100': themeColors.auburn[100],
  'auburn-200': themeColors.auburn[200],
  'auburn-300': themeColors.auburn[300],
  'auburn-400': themeColors.auburn[400],
  'auburn-500': themeColors.auburn[500],
  'auburn-600': themeColors.auburn[600],
  'auburn-700': themeColors.auburn[700],
  'auburn-800': themeColors.auburn[800],
  'auburn-900': themeColors.auburn[900],
  
  // Burgundy
  'burgundy-50': themeColors.burgundy[50],
  'burgundy-100': themeColors.burgundy[100],
  'burgundy-200': themeColors.burgundy[200],
  'burgundy-300': themeColors.burgundy[300],
  'burgundy-400': themeColors.burgundy[400],
  'burgundy-500': themeColors.burgundy[500],
  'burgundy-600': themeColors.burgundy[600],
  'burgundy-700': themeColors.burgundy[700],
  'burgundy-800': themeColors.burgundy[800],
  'burgundy-900': themeColors.burgundy[900],
  
  // Cardinal
  'cardinal-50': themeColors.cardinal[50],
  'cardinal-100': themeColors.cardinal[100],
  'cardinal-200': themeColors.cardinal[200],
  'cardinal-300': themeColors.cardinal[300],
  'cardinal-400': themeColors.cardinal[400],
  'cardinal-500': themeColors.cardinal[500],
  'cardinal-600': themeColors.cardinal[600],
  'cardinal-700': themeColors.cardinal[700],
  'cardinal-800': themeColors.cardinal[800],
  'cardinal-900': themeColors.cardinal[900],
};

// CSS Custom Properties
export const cssVariables = {
  '--color-rosewood-50': themeColors.rosewood[50],
  '--color-rosewood-100': themeColors.rosewood[100],
  '--color-rosewood-200': themeColors.rosewood[200],
  '--color-rosewood-300': themeColors.rosewood[300],
  '--color-rosewood-400': themeColors.rosewood[400],
  '--color-rosewood-500': themeColors.rosewood[500],
  '--color-rosewood-600': themeColors.rosewood[600],
  '--color-rosewood-700': themeColors.rosewood[700],
  '--color-rosewood-800': themeColors.rosewood[800],
  '--color-rosewood-900': themeColors.rosewood[900],
  
  '--color-carmine-50': themeColors.carmine[50],
  '--color-carmine-100': themeColors.carmine[100],
  '--color-carmine-200': themeColors.carmine[200],
  '--color-carmine-300': themeColors.carmine[300],
  '--color-carmine-400': themeColors.carmine[400],
  '--color-carmine-500': themeColors.carmine[500],
  '--color-carmine-600': themeColors.carmine[600],
  '--color-carmine-700': themeColors.carmine[700],
  '--color-carmine-800': themeColors.carmine[800],
  '--color-carmine-900': themeColors.carmine[900],
  
  '--color-auburn-50': themeColors.auburn[50],
  '--color-auburn-100': themeColors.auburn[100],
  '--color-auburn-200': themeColors.auburn[200],
  '--color-auburn-300': themeColors.auburn[300],
  '--color-auburn-400': themeColors.auburn[400],
  '--color-auburn-500': themeColors.auburn[500],
  '--color-auburn-600': themeColors.auburn[600],
  '--color-auburn-700': themeColors.auburn[700],
  '--color-auburn-800': themeColors.auburn[800],
  '--color-auburn-900': themeColors.auburn[900],
  
  '--color-burgundy-50': themeColors.burgundy[50],
  '--color-burgundy-100': themeColors.burgundy[100],
  '--color-burgundy-200': themeColors.burgundy[200],
  '--color-burgundy-300': themeColors.burgundy[300],
  '--color-burgundy-400': themeColors.burgundy[400],
  '--color-burgundy-500': themeColors.burgundy[500],
  '--color-burgundy-600': themeColors.burgundy[600],
  '--color-burgundy-700': themeColors.burgundy[700],
  '--color-burgundy-800': themeColors.burgundy[800],
  '--color-burgundy-900': themeColors.burgundy[900],
  
  '--color-cardinal-50': themeColors.cardinal[50],
  '--color-cardinal-100': themeColors.cardinal[100],
  '--color-cardinal-200': themeColors.cardinal[200],
  '--color-cardinal-300': themeColors.cardinal[300],
  '--color-cardinal-400': themeColors.cardinal[400],
  '--color-cardinal-500': themeColors.cardinal[500],
  '--color-cardinal-600': themeColors.cardinal[600],
  '--color-cardinal-700': themeColors.cardinal[700],
  '--color-cardinal-800': themeColors.cardinal[800],
  '--color-cardinal-900': themeColors.cardinal[900],
  
  // Semantic colors
  '--color-primary': semanticColors.primary,
  '--color-secondary': semanticColors.secondary,
  '--color-accent': semanticColors.accent,
  '--color-emphasis': semanticColors.emphasis,
  '--color-highlight': semanticColors.highlight,
  
  '--color-background-primary': semanticColors.background.primary,
  '--color-background-secondary': semanticColors.background.secondary,
  '--color-background-tertiary': semanticColors.background.tertiary,
  '--color-background-dark': semanticColors.background.dark,
  
  '--color-text-primary': semanticColors.text.primary,
  '--color-text-secondary': semanticColors.text.secondary,
  '--color-text-tertiary': semanticColors.text.tertiary,
  '--color-text-muted': semanticColors.text.muted,
  '--color-text-inverse': semanticColors.text.inverse,
  
  '--color-border-primary': semanticColors.border.primary,
  '--color-border-secondary': semanticColors.border.secondary,
  '--color-border-accent': semanticColors.border.accent,
  
  '--color-status-success': semanticColors.status.success,
  '--color-status-warning': semanticColors.status.warning,
  '--color-status-error': semanticColors.status.error,
  '--color-status-info': semanticColors.status.info,
};

export default {
  themeColors,
  semanticColors,
  tailwindColors,
  cssVariables,
};
