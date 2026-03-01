const popUpData = [
  {
    info: "Donation",
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
      </div>`
  },
  {
    info: "Billing",
    additionalClass: "pop-up__information__text_second",
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
          />
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
          />
          <span class="pop-up__error pop-up__error_email">Invalid email</span>
          <span class="pop-up__label_text pop-up__label_text_note">You will receive emails from the Online Zoo, including updates and news on the latest discoveries and translations. You can unsubscribe at any time.</span>
        </label>
      </div>`
  },
  {
    info: "Payment",
    additionalClass: "pop-up__information_third",
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
            />
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
            />
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
      </div>`
  }
];
let step = 1;
const body = document.body;
const background = document.querySelector(".background");
const buttons = document.querySelectorAll(".donate-pop-up");
for (let button of buttons) {
  button.addEventListener("click", () => {
    body.classList.add("no-scroll");
    background.style.display = "block";
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
    );
    const popUp = document.querySelector(".pop-up");
    const nextButton = document.querySelector(".pop-up__next");
    const backButton = document.querySelector(".pop-up__back");
    const complete = document.querySelector(".pop-up__complete");
    const dynamicContainer = document.querySelector(".pop-up__dynamic");
    const information = document.querySelector(".pop-up__information__text");
    const pointsContainer = document.querySelector(".pop-up__points");
    const infoText = document.querySelector(".pop-up__information__text");
    const infoContainer = document.querySelector(".pop-up__information");
    function changText() {
      information.textContent = `${popUpData[step - 1].info} Information:`;
    }
    function renderContent() {
      for (let child of dynamicContainer.children) {
        child.remove();
      }
      dynamicContainer.insertAdjacentHTML(`afterbegin`, popUpData[step - 1].html);
    }
    function fillPoints() {
      [...pointsContainer.children].forEach((point, index) => {
        index <= step - 1 ? point.classList.add("fill") : point.classList.remove("fill");
      });
    }
    function closePopUp() {
      popUp.remove();
      body.classList.remove("no-scroll");
      background.style.display = "none";
    }
    function fixInfoText() {
      infoText.classList.remove("pop-up__information__text_second");
      infoContainer.classList.remove("pop-up__information_third");
      if (step === 2) {
        infoText.classList.add("pop-up__information__text_second");
      }
      if (step === 3) {
        infoContainer.classList.add("pop-up__information_third");
      }
    }
    function modalsLogic() {
      if (step === 1) {
        const selectListFavorite = document.querySelector(".pop-up__select__list_favorite");
        const arrowButtonFavorite = document.querySelector(".pop-up__select__header__arrow_favorite");
        const inputFavorite = document.querySelector(".pop-up__select__header__input_favorite");
        const topArrowFavorite = document.querySelector(".pop-up__select__list__arrow-top_favorite");
        const bottomArrowFavorite = document.querySelector(".pop-up__select__list__arrow-bottom_favorite");
        arrowButtonFavorite.addEventListener("click", () => {
          selectListFavorite.classList.toggle("hidden");
          topArrowFavorite.classList.toggle("hidden");
          bottomArrowFavorite.classList.toggle("hidden");
        });
        for (let child of selectListFavorite.children) {
          child.addEventListener("click", () => {
            inputFavorite.textContent = child.textContent;
            selectListFavorite.classList.add("hidden");
            topArrowFavorite.classList.add("hidden");
            bottomArrowFavorite.classList.add("hidden");
          });
        }
        popUp.addEventListener("click", (event) => {
          if (arrowButtonFavorite.contains(event.target)) return;
          selectListFavorite.classList.add("hidden");
          topArrowFavorite.classList.add("hidden");
          bottomArrowFavorite.classList.add("hidden");
        });
      } else if (step === 3) {
        const selectListMonth = document.querySelector(".pop-up__select__list_month");
        const selectListYear = document.querySelector(".pop-up__select__list_year");
        const arrowButtonMonth = document.querySelector(".pop-up__select__header__arrow_month");
        const arrowButtonYear = document.querySelector(".pop-up__select__header__arrow_year");
        const inputMonth = document.querySelector(".pop-up__select__header__input_month");
        const inputYear = document.querySelector(".pop-up__select__header__input_year");
        const topArrowMonth = document.querySelector(".pop-up__select__list__arrow-top_month");
        const bottomArrowMonth = document.querySelector(".pop-up__select__list__arrow-bottom_month");
        const topArrowYear = document.querySelector(".pop-up__select__list__arrow-top_year");
        const bottomArrowYear = document.querySelector(".pop-up__select__list__arrow-bottom_year");
        arrowButtonMonth.addEventListener("click", () => {
          selectListMonth.classList.toggle("hidden");
          topArrowMonth.classList.toggle("hidden");
          bottomArrowMonth.classList.toggle("hidden");
        });
        arrowButtonYear.addEventListener("click", () => {
          selectListYear.classList.toggle("hidden");
          topArrowYear.classList.toggle("hidden");
          bottomArrowYear.classList.toggle("hidden");
        });
        for (let child of selectListMonth.children) {
          child.addEventListener("click", () => {
            inputMonth.textContent = child.textContent;
            selectListMonth.classList.add("hidden");
            topArrowMonth.classList.add("hidden");
            bottomArrowMonth.classList.add("hidden");
          });
        }
        for (let child of selectListYear.children) {
          child.addEventListener("click", () => {
            inputYear.textContent = child.textContent;
            selectListYear.classList.add("hidden");
            topArrowYear.classList.add("hidden");
            bottomArrowYear.classList.add("hidden");
          });
        }
        popUp.addEventListener("click", (event) => {
          if (arrowButtonMonth.contains(event.target) || arrowButtonYear.contains(event.target)) return;
          selectListMonth.classList.add("hidden");
          topArrowMonth.classList.add("hidden");
          bottomArrowMonth.classList.add("hidden");
          selectListYear.classList.add("hidden");
          topArrowYear.classList.add("hidden");
          bottomArrowYear.classList.add("hidden");
        });
      }
    }
    changText();
    renderContent();
    fillPoints();
    fixInfoText();
    modalsLogic();
    body.classList.add("no-scroll");
    background.style.display = "block";
    nextButton.addEventListener("click", () => {
      step += 1;
      backButton.classList.remove("hidden");
      changText();
      renderContent();
      fillPoints();
      fixInfoText();
      modalsLogic();
      if (step === 3) {
        nextButton.classList.add("hidden");
        complete.classList.remove("hidden");
      }
    });
    backButton.addEventListener("click", () => {
      step -= 1;
      nextButton.classList.remove("hidden");
      complete.classList.add("hidden");
      changText();
      renderContent();
      fillPoints();
      fixInfoText();
      modalsLogic();
      if (step === 1) {
        backButton.classList.add("hidden");
      }
    });
    complete.addEventListener("click", () => {
      closePopUp();
      step = 1;
    });
    body.addEventListener("click", function closePopUpListener(event) {
      if (popUp.contains(event.target) && !complete.contains(event.target) || button.contains(event.target)) {
        return;
      }
      closePopUp();
      body.removeEventListener("click", closePopUpListener);
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wLXVwLUNBTGlrYmwtLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmVhdHVyZXMvcG9wLXVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvcFVwRGF0YSA9IFtcbiAge1xuICAgIGluZm86ICdEb25hdGlvbicsXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gQ2hvb3NlIHlvdXIgZG9uYXRpb24gYW1vdW50OjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kMTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQyMDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDMwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kNTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQ4MDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDEwMDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9wLXVwX19maXJzdF9fb3RoZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fb3RoZXJfX2J1dHRvblwiPk90aGVyIGFtb3VudDwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbW91bnRcIiBwYXR0ZXJuPVwiXlswLTkuLF0rJFwiIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2ZpcnN0X19vdGhlcl9faW5wdXRcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvciBwb3AtdXBfX2ZpcnN0X19vdGhlcl9fZXJyb3JcIj5JbnZhbGlkIG51bWJlcjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX3NwZWNpYWxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fc3BlY2lhbF9fYnV0dG9uXCI+Zm9yIHNwZWNpYWwgcGV0PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXQgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfZmF2b3JpdGVcIj5DaG9vc2UgeW91ciBmYXZvdXJpdGU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X2Zhdm9yaXRlXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCI+XG4gICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3AgcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LXRvcFwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b20gcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGxpPkx1a2FzIHRoZSBQYW5kYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5BbmR5IHRoZSBMZW11cjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5HbGVuIHRoZSBHb3JpbGxhPC9saT5cbiAgICAgICAgICAgICAgPGxpPk1pa2UgdGhlIEFsbGlnYXRvcjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TYW0gJiBMb3JhIHRoZSBlYWdsZXMgZmFtaWx5PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+TGl6IHRoZSBLb2FsYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TaGFrZSB0aGUgTGlvbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TZW5qYSB0aGUgVGlnZXI8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2dpZnRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdpZnRcIiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX3N0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX2NvbnRyb2xcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX3RpdGxlXCI+TWFrZSB0aGlzIGEgbW9udGhseSByZWN1cnJpbmcgZ2lmdDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5gLFxuICB9LFxuICB7XG4gICAgaW5mbzogJ0JpbGxpbmcnLFxuICAgIGFkZGl0aW9uYWxDbGFzczogJ3BvcC11cF9faW5mb3JtYXRpb25fX3RleHRfc2Vjb25kJyxcbiAgICBodG1sOiBgPGRpdiBjbGFzcz1cInBvcC11cF9fc2Vjb25kXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBZb3VyIE5hbWU8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcGF0dGVybj1cIl5bQS1aYS16XSpbQS1aYS16IF0qW0EtWmEtel0kXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBhbmQgbGFzdCBuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfc2Vjb25kXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvclwiPkludmFsaWQgbmFtZTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9wLXVwX19sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IFlvdXIgRW1haWwgQWRkcmVzcyA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfc2Vjb25kXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvciBwb3AtdXBfX2Vycm9yX2VtYWlsXCI+SW52YWxpZCBlbWFpbDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dCBwb3AtdXBfX2xhYmVsX3RleHRfbm90ZVwiPllvdSB3aWxsIHJlY2VpdmUgZW1haWxzIGZyb20gdGhlIE9ubGluZSBab28sIGluY2x1ZGluZyB1cGRhdGVzIGFuZCBuZXdzIG9uIHRoZSBsYXRlc3QgZGlzY292ZXJpZXMgYW5kIHRyYW5zbGF0aW9ucy4gWW91IGNhbiB1bnN1YnNjcmliZSBhdCBhbnkgdGltZS48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5gLFxuICB9LFxuICB7XG4gICAgaW5mbzogJ1BheW1lbnQnLFxuICAgIGFkZGl0aW9uYWxDbGFzczogJ3BvcC11cF9faW5mb3JtYXRpb25fdGhpcmQnLFxuICAgIGh0bWw6IGA8ZGl2IGNsYXNzPVwicG9wLXVwX190aGlyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX190aGlyZF9fc2VjdGlvbiBwb3AtdXBfX3RoaXJkX19zZWN0aW9uX3RvcFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IENyZWRpdCBDYXJkIE51bWJlcjwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2FyZC1udW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJeXFxcXGQrJFwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfY2FyZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2Vycm9yXCI+SW52YWxpZCBjYXJkIG51bWJlcjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IENWViBOdW1iZXI8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIl5cXFxcZHszLDR9JFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfY3Z2XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fZXJyb3JcIj5JbnZhbGlkIENWVjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fdGhpcmRfX3NlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19sYWJlbFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRcIj48c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gRXhwaXJhdGlvbiBEYXRlPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0X21vbnRoXCI+TW9udGg8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3cgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfbW9udGhcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy10b3BcIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbSBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy1ib3R0b21cIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0IHBvcC11cF9fc2VsZWN0X19saXN0X21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxsaT5KYW51YXJ5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+RmVicnVhcnk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5NYXJjaDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkFwcmlsPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TWF5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+SnVuZTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkp1bHk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5BdWd1c3Q8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TZXB0ZW1iZXI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5PY3RvYmVyPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Tm92ZW1iZXI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5EZWNlbWJlcjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19sYWJlbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyIHBvcC11cF9fc2VsZWN0X19oZWFkZXJfeWVhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dCBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dF95ZWFyXCI+WWVhcjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvdyBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd195ZWFyXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3AgcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF95ZWFyIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy10b3BcIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbSBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX3llYXIgaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3QgcG9wLXVwX19zZWxlY3RfX2xpc3RfeWVhciBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8bGk+MjAyNjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMjc8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDI4PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAyOTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDMxPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzMjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDM0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzNTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzY8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YCxcbiAgfSxcbl1cblxubGV0IHN0ZXAgPSAxXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG5jb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQnKVxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb25hdGUtcG9wLXVwJylcblxuZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJylcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgICAgIGJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgYGFmdGVyYmVnaW5gLFxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJwb3AtdXBcIj5cbiAgPGRpdiBjbGFzcz1cInBvcC11cF9faGVhZGVyXCI+XG4gICAgPGgyIGNsYXNzPVwicG9wLXVwX190aXRsZVwiPm1ha2UgeW91ciBkb25hdGlvbjwvaDI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicG9wLXVwX19pbmZvcm1hdGlvblwiPlxuICAgIDxwIGNsYXNzPVwicG9wLXVwX19pbmZvcm1hdGlvbl9fdGV4dFwiPlBheW1lbnQgSW5mb3JtYXRpb246PC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBvcC11cF9fYm90dG9tXCI+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cF9fZHluYW1pY1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2J1dHRvbnNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2J1dHRvbnNfX3RvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19wb2ludHNcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fcG9pbnRzX19pdGVtXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19wb2ludHNfX2l0ZW1cIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX3BvaW50c19faXRlbVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2JhY2sgaGlkZGVuXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2JhY2tfX3RleHRcIj5CYWNrPC9zcGFuPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIyXCIgdmlld0JveD1cIjAgMCAyNSAyMlwiPlxuICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93XCIgY2xhc3M9XCJwb3AtdXBfX2JhY2tfX3N2Z1wiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fbmV4dFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbmV4dF9fdGV4dFwiPm5leHQ8L3NwYW4+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIyXCIgdmlld0JveD1cIjAgMCAyNSAyMlwiPlxuICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvd1wiIGNsYXNzPVwicG9wLXVwX19uZXh0X19zdmdcIj48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2NvbXBsZXRlIGhpZGRlblwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY29tcGxldGVfX3RleHRcIj5jb21wbGV0ZSBkb25hdGlvbjwvc3Bhbj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAwIDI1IDIyXCI+XG4gICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93XCIgY2xhc3M9XCJwb3AtdXBfX2NvbXBsZXRlX19zdmdcIj48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gXG4gICAgICAgIClcblxuICAgICAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXAnKVxuICAgICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fbmV4dCcpXG4gICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19iYWNrJylcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19jb21wbGV0ZScpXG4gICAgICAgIGNvbnN0IGR5bmFtaWNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19keW5hbWljJylcbiAgICAgICAgY29uc3QgaW5mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19pbmZvcm1hdGlvbl9fdGV4dCcpXG4gICAgICAgIGNvbnN0IHBvaW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3BvaW50cycpXG4gICAgICAgIGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9faW5mb3JtYXRpb25fX3RleHQnKVxuICAgICAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9faW5mb3JtYXRpb24nKVxuXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nVGV4dCgpIHtcbiAgICAgICAgICAgIGluZm9ybWF0aW9uLnRleHRDb250ZW50ID0gYCR7cG9wVXBEYXRhW3N0ZXAgLSAxXS5pbmZvfSBJbmZvcm1hdGlvbjpgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgZHluYW1pY0NvbnRhaW5lci5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeW5hbWljQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChgYWZ0ZXJiZWdpbmAsIHBvcFVwRGF0YVtzdGVwIC0gMV0uaHRtbClcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZpbGxQb2ludHMoKSB7XG4gICAgICAgICAgICA7Wy4uLnBvaW50c0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaW5kZXggPD0gc3RlcCAtIDEgPyBwb2ludC5jbGFzc0xpc3QuYWRkKCdmaWxsJykgOiBwb2ludC5jbGFzc0xpc3QucmVtb3ZlKCdmaWxsJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjbG9zZVBvcFVwKCkge1xuICAgICAgICAgICAgcG9wVXAucmVtb3ZlKClcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJylcbiAgICAgICAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZml4SW5mb1RleHQoKSB7XG4gICAgICAgICAgICBpbmZvVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdwb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0X3NlY29uZCcpXG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcC11cF9faW5mb3JtYXRpb25fdGhpcmQnKVxuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBpbmZvVGV4dC5jbGFzc0xpc3QuYWRkKCdwb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0X3NlY29uZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RlcCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wLXVwX19pbmZvcm1hdGlvbl90aGlyZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb2RhbHNMb2dpYygpIHtcbiAgICAgICAgICAgIGlmIChzdGVwID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0TGlzdEZhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X2Zhdm9yaXRlJylcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJvd0J1dHRvbkZhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X2Zhdm9yaXRlJylcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEZhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0X2Zhdm9yaXRlJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BBcnJvd0Zhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfZmF2b3JpdGUnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGJvdHRvbUFycm93RmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV9mYXZvcml0ZScpXG5cbiAgICAgICAgICAgICAgICBhcnJvd0J1dHRvbkZhdm9yaXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RMaXN0RmF2b3JpdGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgdG9wQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICBib3R0b21BcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHNlbGVjdExpc3RGYXZvcml0ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RmF2b3JpdGUudGV4dENvbnRlbnQgPSBjaGlsZC50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TGlzdEZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BBcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b21BcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJvd0J1dHRvbkZhdm9yaXRlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RMaXN0RmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgdG9wQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICBib3R0b21BcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdExpc3RNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9tb250aCcpXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0TGlzdFllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfeWVhcicpXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyb3dCdXR0b25Nb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd19tb250aCcpXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyb3dCdXR0b25ZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X3llYXInKVxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfbW9udGgnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dF95ZWFyJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BBcnJvd01vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfbW9udGgnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGJvdHRvbUFycm93TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV9tb250aCcpXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wQXJyb3dZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfeWVhcicpXG4gICAgICAgICAgICAgICAgY29uc3QgYm90dG9tQXJyb3dZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b21feWVhcicpXG5cbiAgICAgICAgICAgICAgICBhcnJvd0J1dHRvbk1vbnRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RMaXN0TW9udGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgdG9wQXJyb3dNb250aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICBib3R0b21BcnJvd01vbnRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGFycm93QnV0dG9uWWVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0TGlzdFllYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgdG9wQXJyb3dZZWFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbUFycm93WWVhci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBzZWxlY3RMaXN0TW9udGguY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE1vbnRoLnRleHRDb250ZW50ID0gY2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdExpc3RNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wQXJyb3dNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tQXJyb3dNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHNlbGVjdExpc3RZZWFyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRZZWFyLnRleHRDb250ZW50ID0gY2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdExpc3RZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BBcnJvd1llYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbUFycm93WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyb3dCdXR0b25Nb250aC5jb250YWlucyhldmVudC50YXJnZXQpIHx8IGFycm93QnV0dG9uWWVhci5jb250YWlucyhldmVudC50YXJnZXQpKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0TGlzdE1vbnRoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIHRvcEFycm93TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tQXJyb3dNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RMaXN0WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICB0b3BBcnJvd1llYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tQXJyb3dZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nVGV4dCgpXG4gICAgICAgIHJlbmRlckNvbnRlbnQoKVxuICAgICAgICBmaWxsUG9pbnRzKClcbiAgICAgICAgZml4SW5mb1RleHQoKVxuICAgICAgICBtb2RhbHNMb2dpYygpXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJylcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzdGVwICs9IDFcbiAgICAgICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICAgIGNoYW5nVGV4dCgpXG4gICAgICAgICAgICByZW5kZXJDb250ZW50KClcbiAgICAgICAgICAgIGZpbGxQb2ludHMoKVxuICAgICAgICAgICAgZml4SW5mb1RleHQoKVxuICAgICAgICAgICAgbW9kYWxzTG9naWMoKVxuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgY29tcGxldGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3RlcCAtPSAxXG4gICAgICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICBjb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgY2hhbmdUZXh0KClcbiAgICAgICAgICAgIHJlbmRlckNvbnRlbnQoKVxuICAgICAgICAgICAgZmlsbFBvaW50cygpXG4gICAgICAgICAgICBmaXhJbmZvVGV4dCgpXG4gICAgICAgICAgICBtb2RhbHNMb2dpYygpXG4gICAgICAgICAgICBpZiAoc3RlcCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNsb3NlUG9wVXAoKVxuICAgICAgICAgICAgc3RlcCA9IDFcbiAgICAgICAgfSlcblxuICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gY2xvc2VQb3BVcExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoKHBvcFVwLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWNvbXBsZXRlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHx8IGJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsb3NlUG9wVXAoKVxuICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wVXBMaXN0ZW5lcilcbiAgICAgICAgfSlcbiAgICB9KVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sWUFBWTtBQUFBLEVBQ2hCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBc0RWO0FBQUEsRUFDRTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04saUJBQWlCO0FBQUEsSUFDakIsTUFBTTtBQUFBO0FBQUE7QUFB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
