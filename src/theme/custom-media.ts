export const query = {
  xs: '(max-width: 559px)',
  sm: '(min-width: 600px) and (max-width: 889px)',
  md: '(min-width: 900px) and (max-width: 1199px)',
  lg: '(min-width: 1200px) and (max-width: 1535px)',
  xl: '(min-width: 1536px)',

  gteMedium: '(min-width: 900px)',
  gteLarge: '(min-width: 1200px)',

  lteMedium: '(max-width: 1199px)',
  lteLarge: '(max-width: 1535px)',
};

export const media = {
  xs: `@media ${query.xs}`,
  sm: `@media ${query.sm}`,
  md: `@media ${query.md}`,
  lg: `@media ${query.lg}`,
  xl: `@media ${query.xl}`,

  gteMedium: `@media ${query.gteMedium}`,
  gteLarge: `@media ${query.gteLarge}`,

  lteMedium: `@media ${query.lteMedium}`,
  lteLarge: `@media ${query.lteLarge}`,
};
