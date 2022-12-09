const rates = [
  { title: 'terrible', img: 'terrible.svg' },
  { title: 'bad', img: 'bad.svg' },
  { title: 'okay', img: 'okay.svg' },
  { title: 'good', img: 'good.svg' },
  { title: 'amazing', img: 'amazing.svg' }
]

const ratesBlock = document.querySelector('.rates')

rates.forEach(item => {
  ratesBlock.insertAdjacentHTML('beforeend',
    `<div class="rate-item">
            <img src="src/img/${item.img}" alt="amazing" class="h-12 w-12"/>
            <p class="rate-text"> ${item.title} </p>
          </div>`
  )
})

let rateItems = document.querySelectorAll('.rate-item')

rateItems.forEach(item => {
  item.addEventListener('click', e => {
    item.classList.toggle('active')
    Array.from(rateItems)
      .filter(rate => rate !== e.currentTarget)
      .forEach(rate => rate.classList.remove('active'))
  })
})

let submitBtn = document.getElementById('submit')
let inputValue = document.getElementById('reason')
let ratingReason = null

inputValue.addEventListener('change', e => {
  ratingReason = e.target.value
})

submitBtn.addEventListener('click', e => {
  e.preventDefault()
  let selectedRate = document.querySelector('.active')
  let errorMessage = document.querySelector('.error')
  let successMessage = document.querySelector('.success')

  if(selectedRate) {
    let params = {
      rate: selectedRate.innerText,
      reason: String(ratingReason).trim()
    }
    errorMessage.style.display = 'none'

    //sending data, then:

    selectedRate.classList.remove('active')
    selectedRate = null
    ratingReason = null
    inputValue.value = ''
    successMessage.style.display = 'block'
  } else {
    errorMessage.style.display = 'block'
  }
})

//DarkMode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const modeBtn = document.getElementById('mode')
modeBtn.addEventListener('change', () => {
  document.querySelector('html').classList.toggle('dark')
  if( document.querySelector('html').classList.contains('dark')) {
    localStorage.theme = 'dark'
  } else {
    localStorage.theme = 'light'
  }
})

