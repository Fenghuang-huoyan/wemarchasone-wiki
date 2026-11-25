export const siteConfig = {
  siteName: 'We March as One Guide',
  domain: 'wemarchasone.wiki',
  url: 'https://wemarchasone.wiki',
  gameTitle: 'We March as One',
  steamAppId: 5189160,
  steamUrl: 'https://store.steampowered.com/app/5189160/We_March_as_One/',
  supportEmail: 'playwemarchasone@gmail.com',
  social: [] as { href: string; label: string }[],
  developer: 'dux',
  publisher: 'dux',
  tagline: 'Unofficial English fan guide to the incremental auto battler about painting an army of shapes.',
  locale: 'en',
  themeColor: '#14181f',
  contentRoot: 'wemarchasone',
  homeTitle: 'We March as One Guide — Incremental Auto Battler, Release, and Army',
  homeDescription:
    'Unofficial English guide to We March as One (Steam AppID 5189160). dux’s incremental auto battler, still coming soon for Nov 13, 2026. Paint troops, gold, and the skill tree in the store’s own words. Not affiliated with dux or Valve.',
  analytics: {
    gaId: 'G-SDWYYDDBP3',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for We March as One: a sand-colored field under a pale sky, a mass of blue cubes facing a mass of red cubes',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for We March as One: the full title beside a wave of blue cubes meeting red cubes on sand',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'wemarchasone.wiki is an unofficial fan-made guide for We March as One. It is not affiliated with, endorsed by, or sponsored by dux, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. The full game was still marked coming soon on the date these pages were checked. This site does not sell the game, redeem codes, or recover accounts. The email in the footer is the support address printed on the Steam store page. This wiki does not read that mailbox.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/guide', label: 'Guide' },
    { href: '/units', label: 'Units' },
    { href: '/progression', label: 'Progression' },
    { href: '/tips', label: 'Tips' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  footerNav: [
    { href: '/', label: 'Home' },
    { href: '/guide', label: 'Guide' },
    { href: '/units', label: 'Units' },
    { href: '/progression', label: 'Progression' },
    { href: '/tips', label: 'Tips' },
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  version: {
    label: 'Updated Nov 2026',
    detail:
      'Verified against official Steam AppID 5189160 and Demo AppID 5403150 store specifications, campaign structure, and unit mechanics.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/5189160/We_March_as_One/',
      label: 'Steam store page',
    },
    {
      href: 'https://store.steampowered.com/app/5403150/We_March_as_One_Demo/',
      label: 'Steam demo page',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
