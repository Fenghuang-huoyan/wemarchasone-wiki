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
  homeTitle: 'We March as One Database & Army Calculator — Unpacked Unit Stats & Skill Tree',
  homeDescription:
    'Unpacked We March as One unit stats, wave calculator, 62-node skill tree costs, and armor counter matrix from Demo Build #26192930 (Steam AppID 5189160 / 5403150).',
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
    'wemarchasone.wiki is an unofficial fan-made guide for We March as One. It is not affiliated with, endorsed by, or sponsored by dux, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. Unit and wave numbers are verified against Demo Build #26192930 and official Steam store records. This site does not sell the game, redeem codes, or recover accounts. The developer email listed on Steam belongs to dux; this wiki does not read that mailbox.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/calculator', label: 'Calculator' },
    { href: '/units', label: 'Units' },
    { href: '/progression', label: 'Skill Tree' },
    { href: '/guide', label: 'Guide' },
    { href: '/tips', label: 'Tips' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  footerNav: [
    { href: '/', label: 'Home' },
    { href: '/calculator', label: 'Army Calculator' },
    { href: '/units', label: 'Units Database' },
    { href: '/progression', label: 'Skill Tree & Gold' },
    { href: '/guide', label: 'Guide' },
    { href: '/tips', label: 'Tips' },
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  version: {
    label: 'Unpacked Build #26192930',
    detail:
      'Client-verified unit stats, armor counters, 62 skill tree nodes, and 25 campaign waves unpacked from Demo Build #26192930 (26 Nov 2026).',
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
