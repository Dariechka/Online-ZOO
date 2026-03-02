const popUpData = [
  {
    info: 'Donation',
    html: `<div class="pop-up__first">
        <div class="pop-up__first__amount">
          <p class="pop-up__first__amount_text"><span class="pop-up__first__amount_text_asterix">*</span> Choose your donation amount:</p>
          <div class="pop-up__first__amount__buttons">
            <button class="pop-up__first__amount__button">$10</button>
            <button class="pop-up__first__amount__button">$20</button>
            <button class="pop-up__first__amount__button">$30</button>
            <button class="pop-up__first__amount__button">$50</button>
            <button class="pop-up__first__amount__button">$80</button>
            <button class="pop-up__first__amount__button">$100</button>
          </div>
        </div>
        <label class="pop-up__first__other">
          <button class="pop-up__first__other__button">Other amount</button>
          <input type="text" name="amount" pattern="^[0-9.,]+$" class="pop-up__input pop-up__first__other__input" />
          <span class="pop-up__error pop-up__first__other__error">Invalid number</span>
        </label>
        <div class="pop-up__first__special">
          <button class="pop-up__first__special__button">for special pet</button>
          <div class="pop-up__select">
            <div class="pop-up__select__header">
              <div class="pop-up__select__header__input pop-up__select__header__input_favorite">Choose your favourite</div>
              <div class="pop-up__select__header__arrow pop-up__select__header__arrow_favorite">
                <svg width="17" height="10" viewBox="0 0 17 10">
                  <use href="/icon.svg#arrow-bottom"></use>
                </svg>
              </div>
            </div>
            <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-top pop-up__select__list__arrow-top_favorite hidden">
              <use href="/icon.svg#arrow-top"></use>
            </svg>
            <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-bottom pop-up__select__list__arrow-bottom_favorite hidden">
              <use href="/icon.svg#arrow-bottom"></use>
            </svg>
            <ul class="pop-up__select__list pop-up__select__list_favorite hidden">
              <li>Lukas the Panda</li>
              <li>Andy the Lemur</li>
              <li>Glen the Gorilla</li>
              <li>Mike the Alligator</li>
              <li>Sam & Lora the eagles family</li>
              <li class="active">Liz the Koala</li>
              <li>Shake the Lion</li>
              <li>Senja the Tiger</li>
            </ul>
          </div>
        </div>
        <label class="pop-up__first__gift">
          <input type="checkbox" name="gift" class="pop-up__checkbox">
          <span class="pop-up__checkbox__state">
            <span class="pop-up__checkbox__control"></span>
            <span class="pop-up__checkbox__title">Make this a monthly recurring gift</span>
          </span>
        </label>
      </div>`,
  },
  {
    info: 'Billing',
    additionalClass: 'pop-up__information__text_second',
    html: `<div class="pop-up__second">
        <label class="pop-up__label">
          <span class="pop-up__label_text"><span class="pop-up__label_text_asterix">*</span> Your Name</span>
          <input
              type="text"
              name="name"
              autocomplete="name"
              pattern="^[A-Za-z]*[A-Za-z ]*[A-Za-z]$"
              placeholder="First and last name"
              class="pop-up__input pop-up__input_second"
          >
          <span class="pop-up__error">Invalid name</span>
        </label>
        <label class="pop-up__label">
          <span class="pop-up__label_text"><span class="pop-up__label_text_asterix">*</span> Your Email Address </span>
          <input
              type="email"
              name="email"
              autocomplete="email"
              placeholder="Enter your email"
              class="pop-up__input pop-up__input_second"
          >
          <span class="pop-up__error pop-up__error_email">Invalid email</span>
          <span class="pop-up__label_text pop-up__label_text_note">You will receive emails from the Online Zoo, including updates and news on the latest discoveries and translations. You can unsubscribe at any time.</span>
        </label>
      </div>`,
  },
  {
    info: 'Payment',
    additionalClass: 'pop-up__information_third',
    html: `<div class="pop-up__third">
        <div class="pop-up__third__section pop-up__third__section_top">
          <label class="pop-up__label">
            <span class="pop-up__label_text"><span class="pop-up__label_text_asterix">*</span> Credit Card Number</span>
            <input
                type="text"
                name="card-number"
                pattern="^\\d+$"
                autocomplete="none"
                class="pop-up__input pop-up__input_card"
            >
            <span class="pop-up__error">Invalid card number</span>
          </label>
          <label class="pop-up__label">
            <span class="pop-up__label_text"><span class="pop-up__label_text_asterix">*</span> CVV Number</span>
            <input
                type="text"
                name="cvv"
                autocomplete="none"
                pattern="^\\d{3,4}$"
                class="pop-up__input pop-up__input_cvv"
            >
            <span class="pop-up__error">Invalid CVV</span>
          </label>
        </div>
        <div class="pop-up__third__section">
          <div class="pop-up__label">
            <p class="pop-up__label_text"><span class="pop-up__label_text_asterix">*</span> Expiration Date</p>
            <div class="pop-up__select">
              <div class="pop-up__select__header">
                <div class="pop-up__select__header__input pop-up__select__header__input_month">Month</div>
                <div class="pop-up__select__header__arrow pop-up__select__header__arrow_month">
                  <svg width="17" height="10" viewBox="0 0 17 10">
                    <use href="/icon.svg#arrow-bottom"></use>
                  </svg>
                </div>
              </div>
              <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-top pop-up__select__list__arrow-top_month hidden">
                <use href="/icon.svg#arrow-top"></use>
              </svg>
              <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-bottom pop-up__select__list__arrow-bottom_month hidden">
                <use href="/icon.svg#arrow-bottom"></use>
              </svg>
              <ul class="pop-up__select__list pop-up__select__list_month hidden">
                <li>January</li>
                <li>February</li>
                <li>March</li>
                <li>April</li>
                <li>May</li>
                <li>June</li>
                <li>July</li>
                <li>August</li>
                <li>September</li>
                <li>October</li>
                <li>November</li>
                <li>December</li>
              </ul>
            </div>
          </div>
          <div class="pop-up__label">
            <div class="pop-up__select">
              <div class="pop-up__select__header pop-up__select__header_year">
                <div class="pop-up__select__header__input pop-up__select__header__input_year">Year</div>
                <div class="pop-up__select__header__arrow pop-up__select__header__arrow_year">
                  <svg width="17" height="10" viewBox="0 0 17 10">
                    <use href="/icon.svg#arrow-bottom"></use>
                  </svg>
                </div>
              </div>
              <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-top pop-up__select__list__arrow-top_year hidden">
                <use href="/icon.svg#arrow-top"></use>
              </svg>
              <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-bottom pop-up__select__list__arrow-bottom_year hidden">
                <use href="/icon.svg#arrow-bottom"></use>
              </svg>
              <ul class="pop-up__select__list pop-up__select__list_year hidden">
                <li>2026</li>
                <li>2027</li>
                <li>2028</li>
                <li>2029</li>
                <li>2030</li>
                <li>2031</li>
                <li>2032</li>
                <li>2033</li>
                <li>2034</li>
                <li>2035</li>
                <li>2036</li>
              </ul>
            </div>
          </div>
        </div>
      </div>`,
  },
]

let step = 1

const body = document.body
const background = document.querySelector('.background')
const buttons = document.querySelectorAll('.donate-pop-up')

for (let button of buttons) {
  button.addEventListener('click', () => {
    body.classList.add('no-scroll')
    background.style.display = 'block'

    body.insertAdjacentHTML(
      `afterbegin`,
      `<div class="pop-up">
  <div class="pop-up__header">
    <h2 class="pop-up__title">make your donation</h2>
  </div>
  <div class="pop-up__information">
    <p class="pop-up__information__text">Payment Information:</p>
  </div>
  <div class="pop-up__bottom">
    <div class="pop-up__dynamic">
    </div>
    <div class="pop-up__buttons">
      <div class="pop-up__buttons__top">
        <div class="pop-up__points">
          <span class="pop-up__points__item"></span>
          <span class="pop-up__points__item"></span>
          <span class="pop-up__points__item"></span>
        </div>
        <button class="pop-up__back hidden">
          <span class="pop-up__back__text">Back</span>
          <svg width="25" height="22" viewBox="0 0 25 22">
            <use href="/icon.svg#arrow" class="pop-up__back__svg"></use>
          </svg>
        </button>
      </div>
      <button class="pop-up__next">
        <span class="pop-up__next__text">next</span>
        <svg width="25" height="22" viewBox="0 0 25 22">
          <use href="/icon.svg#arrow" class="pop-up__next__svg"></use>
        </svg>
      </button>
      <button class="pop-up__complete hidden">
        <span class="pop-up__complete__text">complete donation</span>
        <svg width="25" height="22" viewBox="0 0 25 22">
          <use href="/icon.svg#arrow" class="pop-up__complete__svg"></use>
        </svg>
      </button>
    </div>
  </div>
</div>`
    )

    const popUp = document.querySelector('.pop-up')
    const nextButton = document.querySelector('.pop-up__next')
    const backButton = document.querySelector('.pop-up__back')
    const complete = document.querySelector('.pop-up__complete')
    const dynamicContainer = document.querySelector('.pop-up__dynamic')
    const information = document.querySelector('.pop-up__information__text')
    const pointsContainer = document.querySelector('.pop-up__points')
    const infoText = document.querySelector('.pop-up__information__text')
    const infoContainer = document.querySelector('.pop-up__information')

    function changText() {
      information.textContent = `${popUpData[step - 1].info} Information:`
    }

    function renderContent() {
      for (let child of dynamicContainer.children) {
        child.remove()
      }
      dynamicContainer.insertAdjacentHTML(`afterbegin`, popUpData[step - 1].html)
    }

    function fillPoints() {
      ;[...pointsContainer.children].forEach((point, index) => {
        index <= step - 1 ? point.classList.add('fill') : point.classList.remove('fill')
      })
    }

    function closePopUp() {
      popUp.remove()
      body.classList.remove('no-scroll')
      background.style.display = 'none'
    }

    function fixInfoText() {
      infoText.classList.remove('pop-up__information__text_second')
      infoContainer.classList.remove('pop-up__information_third')
      if (step === 2) {
        infoText.classList.add('pop-up__information__text_second')
      }
      if (step === 3) {
        infoContainer.classList.add('pop-up__information_third')
      }
    }

    function modalsLogic() {
      if (step === 1) {
        const selectListFavorite = document.querySelector('.pop-up__select__list_favorite')
        const arrowButtonFavorite = document.querySelector('.pop-up__select__header__arrow_favorite')
        const inputFavorite = document.querySelector('.pop-up__select__header__input_favorite')
        const topArrowFavorite = document.querySelector('.pop-up__select__list__arrow-top_favorite')
        const bottomArrowFavorite = document.querySelector('.pop-up__select__list__arrow-bottom_favorite')

        arrowButtonFavorite.addEventListener('click', () => {
          selectListFavorite.classList.toggle('hidden')
          topArrowFavorite.classList.toggle('hidden')
          bottomArrowFavorite.classList.toggle('hidden')
        })

        for (let child of selectListFavorite.children) {
          child.addEventListener('click', () => {
            inputFavorite.textContent = child.textContent
            selectListFavorite.classList.add('hidden')
            topArrowFavorite.classList.add('hidden')
            bottomArrowFavorite.classList.add('hidden')
          })
        }
        popUp.addEventListener('click', (event) => {
          if (arrowButtonFavorite.contains(event.target)) return
          selectListFavorite.classList.add('hidden')
          topArrowFavorite.classList.add('hidden')
          bottomArrowFavorite.classList.add('hidden')
        })
      } else if (step === 3) {
        const selectListMonth = document.querySelector('.pop-up__select__list_month')
        const selectListYear = document.querySelector('.pop-up__select__list_year')
        const arrowButtonMonth = document.querySelector('.pop-up__select__header__arrow_month')
        const arrowButtonYear = document.querySelector('.pop-up__select__header__arrow_year')
        const inputMonth = document.querySelector('.pop-up__select__header__input_month')
        const inputYear = document.querySelector('.pop-up__select__header__input_year')
        const topArrowMonth = document.querySelector('.pop-up__select__list__arrow-top_month')
        const bottomArrowMonth = document.querySelector('.pop-up__select__list__arrow-bottom_month')
        const topArrowYear = document.querySelector('.pop-up__select__list__arrow-top_year')
        const bottomArrowYear = document.querySelector('.pop-up__select__list__arrow-bottom_year')

        arrowButtonMonth.addEventListener('click', () => {
          selectListMonth.classList.toggle('hidden')
          topArrowMonth.classList.toggle('hidden')
          bottomArrowMonth.classList.toggle('hidden')
        })

        arrowButtonYear.addEventListener('click', () => {
          selectListYear.classList.toggle('hidden')
          topArrowYear.classList.toggle('hidden')
          bottomArrowYear.classList.toggle('hidden')
        })

        for (let child of selectListMonth.children) {
          child.addEventListener('click', () => {
            inputMonth.textContent = child.textContent
            selectListMonth.classList.add('hidden')
            topArrowMonth.classList.add('hidden')
            bottomArrowMonth.classList.add('hidden')
          })
        }

        for (let child of selectListYear.children) {
          child.addEventListener('click', () => {
            inputYear.textContent = child.textContent
            selectListYear.classList.add('hidden')
            topArrowYear.classList.add('hidden')
            bottomArrowYear.classList.add('hidden')
          })
        }
        popUp.addEventListener('click', (event) => {
          if (arrowButtonMonth.contains(event.target) || arrowButtonYear.contains(event.target)) return
          selectListMonth.classList.add('hidden')
          topArrowMonth.classList.add('hidden')
          bottomArrowMonth.classList.add('hidden')
          selectListYear.classList.add('hidden')
          topArrowYear.classList.add('hidden')
          bottomArrowYear.classList.add('hidden')
        })
      }
    }

    changText()
    renderContent()
    fillPoints()
    fixInfoText()
    modalsLogic()
    body.classList.add('no-scroll')
    background.style.display = 'block'

    nextButton.addEventListener('click', () => {
      step += 1
      backButton.classList.remove('hidden')
      changText()
      renderContent()
      fillPoints()
      fixInfoText()
      modalsLogic()
      if (step === 3) {
        nextButton.classList.add('hidden')
        complete.classList.remove('hidden')
      }
    })

    backButton.addEventListener('click', () => {
      step -= 1
      nextButton.classList.remove('hidden')
      complete.classList.add('hidden')
      changText()
      renderContent()
      fillPoints()
      fixInfoText()
      modalsLogic()
      if (step === 1) {
        backButton.classList.add('hidden')
      }
    })

    complete.addEventListener('click', () => {
      closePopUp()
      step = 1
    })

    body.addEventListener('click', function closePopUpListener(event) {
      if ((popUp.contains(event.target) && !complete.contains(event.target)) || button.contains(event.target)) {
        return
      }

      closePopUp()
      body.removeEventListener('click', closePopUpListener)
    })
  })
}
