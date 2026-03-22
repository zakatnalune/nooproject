import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',

  locales: {
    root: {
      label: 'RU',
      lang: 'ru-RU',
      link: '/ru/',
      title: 'NooProject',
      description: '',

      themeConfig: {
        nav: [
          { text: 'RU', link: '/ru/' },
          { text: 'EN', link: '/en/' }
        ],

        sidebar: {
          '/ru/': [
            { text: 'Главная', link: '/ru/' }
          ]
        }
      }
    },

    en: {
      label: 'EN',
      lang: 'en-US',
      link: '/en/',
      title: 'NooProject',
      description: '',

      themeConfig: {
        nav: [
          { text: 'RU', link: '/ru/' },
          { text: 'EN', link: '/en/' }
        ],

        sidebar: {
          '/en/': [
            { text: 'Home', link: '/en/' }
          ]
        }
      }
    }
  }
})