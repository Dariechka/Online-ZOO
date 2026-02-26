const body = document.body
const background = document.querySelector('.background')
const button = document.querySelector('.footer__button')

button.addEventListener('click', () => {
  body.classList.add('no-scroll')
  background.style.display = 'block'

  body.insertAdjacentHTML(
    `afterbegin`,
    `<div class="modal">
  <div class="modal__cross">
    <span class="modal__cross__item"></span>
    <span class="modal__cross__item"></span>
  </div>
  <div class="modal__image"></div>
  <div class="modal__content">
    <div class="modal__text">
      <h2 class="modal__text__title">together we care, save and protect!</h2>
      <p class="modal__text__text">Your most generous gift not only cares for countless animals, but it also offers hope
        and a vital lifeline to the world’s most endangered wildlife relying on us to survive.</p>
    </div>
    <div class="modal__buttons">
      <button class="modal__button">$20</button>
      <button class="modal__button">$30</button>
      <button class="modal__button">$50</button>
      <button class="modal__button">$80</button>
      <button class="modal__button">$100</button>
      <button class="modal__button modal__button_other">
        <span>Other <span class="modal__button_other_hidden"> amount</span></span>
      </button>
    </div>
  </div>
</div>`
  )

  const modal = document.querySelector('.modal')
  const closeButton = document.querySelector('.modal__cross')

  function closeModal() {
    modal.remove()
    body.classList.remove('no-scroll')
    background.style.display = 'none'
  }

  closeButton.addEventListener('click', () => closeModal())

  body.addEventListener('click', function closeModalListener(event) {
    if ((modal.contains(event.target) && !closeButton.contains(event.target)) || button.contains(event.target)) {
      return
    }

    closeModal()
    body.removeEventListener('click', closeModalListener)
  })
})
