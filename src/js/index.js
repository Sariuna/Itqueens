function initHeader() {
  const header = document.querySelector(".js-header")

  if (!header) {
    return
  }

  const button = header.querySelector('.js-header-burger-button')

  button.addEventListener('click', () => header.classList.toggle('open'))
}

initHeader()