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
            { text: 'Глава 1 Анатомия краха', link: '/ru/chapter-1' },
            { text: 'Глава 2 Час Быка: Точка системного коллапса', link: '/ru/chapter-2' },
            { text: 'Глава 3 Ресурсоориентированный мир: Наследие Жака Фреско', link: '/ru/chapter-3' },
            { text: 'Глава 4. Коэффициент Полезности (КП): Математика справедливости', link: '/ru/chapter-4' },
            { text: 'Фундаментальная библиотека', link: '/ru/bibliography' },
            { text: 'О проекте', link: '/ru/support' },
                  ]
        }
      }
    }
  }
})
