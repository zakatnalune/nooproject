import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',

  locales: {
    root: {
      label: 'EN',
      lang: 'en-US',
      title: 'NooProject',
      description: '',
      themeConfig: {
        nav: [
          { text: 'EN', link: '/' },
          { text: 'RU', link: '/ru/' }
        ],
        sidebar: {
          '/': 
            [
{ text: 'Home', link: '/' },
{ text: 'About', link: '/about' }
            ]
        }
      }
    },

    ru: {
      label: 'RU',
      lang: 'ru-RU',
      link: '/ru/',
      title: 'NooProject',
      description: '',
      themeConfig: {
        nav: [
          { text: 'EN', link: '/' },
          { text: 'RU', link: '/ru/' }
        ],
        sidebar: {
          '/ru/': [
            { text: 'Главная', link: '/ru/' },
            { text: 'О проекте', link: '/ru/about' }      
                  ]
        }
      }
    }
  }
})
