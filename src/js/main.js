const burgerBtn = document.querySelector('.header__burger')
const dropMenu = document.querySelector('.header__drop_nav')
const mainMovieContainer = document.querySelector('.main__movie_container')

dropMenu.style.left = '-100%'

burgerBtn.addEventListener('click', () => {
  dropMenu.style.left === '-100%' ? dropMenu.style.left = 0 : dropMenu.style.left = '-100%'
})

if (dropMenu.style.left === '0') document.addEventListener('click', () => dropMenu.style.left = '-100%')


JSON.parse(localStorage.getItem('movies')).forEach(el => {

  const mainMovieCard = document.createElement('a')
  mainMovieCard.setAttribute('href', '#')
  mainMovieCard.classList.add('main__movie_card')
  mainMovieContainer.appendChild(mainMovieCard)

  const mainMovieCardImg = document.createElement('div')
  mainMovieCardImg.classList.add('main_movie_card_img')
  mainMovieCard.appendChild(mainMovieCardImg)
  
  const span = document.createElement('span')
  span.innerText = el.movieTime
  mainMovieCardImg.appendChild(span)

  const mainMovieCardTitle = document.createElement('div')
  mainMovieCardTitle.classList.add('main__movie_card_title')
  mainMovieCard.appendChild(mainMovieCardTitle)

  const p = document.createElement('p')
  p.innerText = el.title.slice(0, 50) + '...'
  mainMovieCardTitle.appendChild(p)

  const img = document.createElement('img')
  img.setAttribute('src', './icons/heart.png')
  mainMovieCardTitle.appendChild(img)
})

localStorage.setItem('movies', JSON.stringify([
  {
    title: 'Calm Piano Music 24/7: study music, focus, think, meditation, relaxing music․․․',
    imageUrl: './images/img 1.png',
    movieTime: '23:20'
  },
  {
    title: 'Calm Piano Music 24/7: study music, focus, think, meditation, relaxing music․․․',
    imageUrl: './images/img 1.png',
    movieTime: '23:20'
  },
  {
    title: 'Calm Piano Music 24/7: study music, focus, think, meditation, relaxing music․․․',
    imageUrl: './images/img 1.png',
    movieTime: '23:20'
  },
  {
    title: 'Calm Piano Music 24/7: study music, focus, think, meditation, relaxing music․․․',
    imageUrl: './images/img 1.png',
    movieTime: '23:20'
  },
  {
    title: 'Calm Piano Music 24/7: study music, focus, think, meditation, relaxing music․․․',
    imageUrl: './images/img 1.png',
    movieTime: '23:20'
  },
  {
    title: 'Calm Piano Music 24/7: study music, focus, think, meditation, relaxing music․․․',
    imageUrl: './images/img 1.png',
    movieTime: '23:20'
  },
]))