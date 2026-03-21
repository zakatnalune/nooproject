export default {
  title: 'NooProject',
  locales: {
    root: { label: 'RU', lang: 'ru-RU', link: '/ru/' },
    en: { label: 'EN', lang: 'en-US', link: '/en/' }
  },
  themeConfig: {
    nav: [
      { text: 'RU', link: '/ru/' },
      { text: 'EN', link: '/en/' }
    ],
    sidebar: {
      '/ru/': [{ text: 'Главная', link: '/ru/' }],
      '/en/': [{ text: 'Home', link: '/en/' }]
    }
  }
} as const