import { makeRoutes, cbs, favicon, bgImage } from './utils'

export const main = () => {
  ;(() => {
    if (localStorage.getItem('theme') == 'dark') document.body.classList.add('dark-mode')
    document.querySelectorAll('.dark').forEach((dark) =>
      dark.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode')
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light')
      })
    )
  })()
  ;(() => {
    const bur = document.querySelector('.dropdown')
    bur.addEventListener('click', () => bur.parentElement.classList.toggle('open'))
  })()
}

makeRoutes([
  [/^\/about$/g, cbs(favicon('Sciecne.ico'), bgImage('Lighthouse.jpg'))],
  [/^\/quran$/g, cbs(favicon('Quran-Logo.png'), bgImage('Quran.jpg'))],
  [/^\/books$/g, cbs(favicon('Books.svg'), bgImage('Mountain.jpg'))],
  [/^\/academic$/g, cbs(favicon('Academic.svg'), bgImage('Night Sky.jpg'))],
  [/^\/codes$/g, cbs(favicon('Codes.png'), bgImage('Night City.jpg'))],
  [/^\/docs\/?.*\/?.*$/g, cbs(bgImage('Beauty2.jpg'))],
])
