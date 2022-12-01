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
