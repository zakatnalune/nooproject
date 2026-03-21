export default {
  title: 'NooProject',

  locales: {
    root: { label: 'EN', lang: 'en-US', link: '/en/' },
    ru: { label: 'RU', lang: 'ru-RU', link: '/ru/' }
  },

  themeConfig: {
    nav: [
      { text: 'RU', link: '/ru/' },
      { text: 'EN', link: '/en/' }
    ],

    sidebar: {
      '/ru/': [
        { text: 'Главная', link: '/ru/' },
        { text: 'Глава 1', link: '/ru/chapter-1' },
        { text: 'Библиография', link: '/ru/bibliography' },
        { text: 'Поддержка', link: '/ru/support' }
      ],
      '/en/': [
        { text: 'Home', link: '/en/' },
        { text: 'Chapter 1', link: '/en/chapter-1' },
        { text: 'Bibliography', link: '/en/bibliography' },
        { text: 'Support', link: '/en/support' }
      ]
    }
  }
} as const