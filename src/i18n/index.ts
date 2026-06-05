import tr from './tr.json';
import en from './en.json';
import ar from './ar.json';

// Supported locales
export type Locale = 'tr' | 'en' | 'ar';

// Translation map
const translations: Record<Locale, typeof tr> = { tr, en, ar };

/**
 * Returns the full translation object for a given locale.
 */
export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.tr;
}

/**
 * Returns the opposite locales for hreflang tags.
 */
export function getAlternateLocales(current: Locale): Locale[] {
  return (['tr', 'en', 'ar'] as Locale[]).filter((l) => l !== current);
}

/**
 * Determines if a locale uses RTL direction.
 */
export function isRTL(locale: Locale): boolean {
  return locale === 'ar';
}

/**
 * Returns the font family string for headings based on locale.
 * Arabic doesn't support Bebas Neue so we use Cairo instead.
 */
export function getHeadingFont(locale: Locale): string {
  return locale === 'ar' ? 'Cairo' : 'Bebas Neue';
}

/**
 * Returns the body font family string based on locale.
 */
export function getBodyFont(locale: Locale): string {
  return locale === 'ar' ? 'Tajawal' : 'DM Sans';
}

/**
 * Extracts locale from a URL path.
 */
export function getLocaleFromPath(path: string): Locale {
  const segments = path.split('/').filter(Boolean);
  const first = segments[0] as Locale;
  if (['tr', 'en', 'ar'].includes(first)) return first;
  return 'tr';
}

/**
 * Returns the localized path for a given route and locale.
 */
export function localizedPath(path: string, locale: Locale): string {
  return `/${locale}${path === '/' ? '' : path}`;
}

/**
 * All navigation links.
 */
export function getNavLinks(locale: Locale) {
  const t = getTranslations(locale);
  return [
    { href: localizedPath('/', locale), label: t.nav.home },
    { href: localizedPath('/about', locale), label: t.nav.about },
    { href: localizedPath('/products', locale), label: t.nav.products },
    { href: localizedPath('/quality', locale), label: t.nav.quality },
    { href: localizedPath('/network', locale), label: t.nav.network },
    { href: localizedPath('/technical-data', locale), label: t.nav.technicalData },
    { href: localizedPath('/faq', locale), label: t.nav.faq },
    { href: localizedPath('/referanslar', locale), label: t.nav.references },
    { href: localizedPath('/contact', locale), label: t.nav.contact },
  ];
}

/**
 * Product category keys in display order.
 */
export const CATEGORY_KEYS = [
  'radiatorCores',
  'fullRadiators',
  'intercoolers',
  'oilCoolers',
  'acRadiators',
  'industrialCoolers',
  'heaters',
  'aftercoolers',
] as const;

export type CategoryKey = (typeof CATEGORY_KEYS)[number];
