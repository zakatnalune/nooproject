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
              { text: 'Chapter 1. Anatomy of the Collapse', link: '/chapter-1' },
              { text: 'Chapter 2. The Hour of the Bull: The Point of Systemic Collapse', link: '/chapter-2' },
              { text: 'Chapter 3. The Resource-Based World: The Legacy of Jacque Fresco', link: '/chapter-3' },
              { text: 'Bibliography', link: '/bibliography' },
              { text: 'Support', link: '/support' },
              { text: 'License', link: '/license' },
            ]
        }
      }
    },

    ru: {
      label: 'RU',
      lang: 'ru-RU',
      link: '/ru/',
      title: 'Проект Ноосфера',
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
            { text: 'Глава 5. Динамика Статуса: Поток, а не Застой', link: '/ru/chapter-5' },
            { text: 'Глава 6. Энергетическая Матрица', link: '/ru/chapter-6' },
            { text: 'Глава 7. Утилитаризм и «Люди как боги»: Этика будущего', link: '/ru/chapter-7' },
            { text: 'Глава 8. Идентификация: Твой телефон и твоё лицо — твой паспорт', link: '/ru/chapter-8' },
            { text: 'Глава 9. Города Выбора: Локализация порока через Гуманизм', link: '/ru/chapter-9' },
            { text: 'Глава 10. Ноосферагенез: Планета как единый дом', link: '/ru/chapter-10' },
            { text: 'Фундаментальная библиотека', link: '/ru/bibliography' },
            { text: 'Поддержать проект', link: '/ru/support' },
            { text: 'Лицензия', link: '/ru/license' },
                  ]
        }
      }
    }
  }
})
