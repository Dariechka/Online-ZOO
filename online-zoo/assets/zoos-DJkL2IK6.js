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
async function fetchAnimals() {
  const response = await fetch("./animals.json");
  return await response.json();
}
async function zoos(animalName = "gorilla") {
  const allAnimals = await fetchAnimals();
  let animal = allAnimals.find((x) => x.animal === animalName);
  if (!animal) {
    animal = allAnimals[0];
  }
  const topTitle = document.querySelector(".camera__top__title");
  topTitle.textContent = animal.title;
  const knowText = document.querySelector(".know__info__text");
  knowText.textContent = animal.know;
  const commonName = document.querySelector(".commonName");
  commonName.textContent = animal.commonName;
  const scientificName = document.querySelector(".scientificName");
  scientificName.textContent = animal.scientificName;
  const type = document.querySelector(".type");
  type.textContent = animal.type;
  const size = document.querySelector(".size");
  size.textContent = animal.size;
  const diet = document.querySelector(".diet");
  diet.textContent = animal.diet;
  const habitat = document.querySelector(".habitat");
  habitat.textContent = animal.habitat;
  let range = document.querySelector(".range");
  range.textContent = animal.range;
  const image = document.querySelector(".know__image__img");
  image.setAttribute("src", `/images/${animal.animal}_Page.png`);
  const knowLargeText = document.querySelector(".know__text");
  knowLargeText.textContent = animal.text;
  const donationTitle = document.querySelector(".camera__donation__text-info__title");
  donationTitle.textContent = animal.donationTitle;
  const donationText = document.querySelector(".camera__donation__text-info__text");
  donationText.textContent = animal.donationText;
}
export {
  zoos as z
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vcy1ESmtMMklLNi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZlYXR1cmVzL3BvcC11cC5qcyIsIi4uLy4uL3NyYy9mZWF0dXJlcy96b29zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvcFVwRGF0YSA9IFtcbiAge1xuICAgIGluZm86ICdEb25hdGlvbicsXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gQ2hvb3NlIHlvdXIgZG9uYXRpb24gYW1vdW50OjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kMTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQyMDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDMwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kNTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQ4MDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDEwMDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9wLXVwX19maXJzdF9fb3RoZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fb3RoZXJfX2J1dHRvblwiPk90aGVyIGFtb3VudDwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbW91bnRcIiBwYXR0ZXJuPVwiXlswLTkuLF0rJFwiIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2ZpcnN0X19vdGhlcl9faW5wdXRcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvciBwb3AtdXBfX2ZpcnN0X19vdGhlcl9fZXJyb3JcIj5JbnZhbGlkIG51bWJlcjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX3NwZWNpYWxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fc3BlY2lhbF9fYnV0dG9uXCI+Zm9yIHNwZWNpYWwgcGV0PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXQgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfZmF2b3JpdGVcIj5DaG9vc2UgeW91ciBmYXZvdXJpdGU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X2Zhdm9yaXRlXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCI+XG4gICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3AgcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LXRvcFwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b20gcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGxpPkx1a2FzIHRoZSBQYW5kYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5BbmR5IHRoZSBMZW11cjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5HbGVuIHRoZSBHb3JpbGxhPC9saT5cbiAgICAgICAgICAgICAgPGxpPk1pa2UgdGhlIEFsbGlnYXRvcjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TYW0gJiBMb3JhIHRoZSBlYWdsZXMgZmFtaWx5PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+TGl6IHRoZSBLb2FsYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TaGFrZSB0aGUgTGlvbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TZW5qYSB0aGUgVGlnZXI8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2dpZnRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdpZnRcIiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX3N0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX2NvbnRyb2xcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX3RpdGxlXCI+TWFrZSB0aGlzIGEgbW9udGhseSByZWN1cnJpbmcgZ2lmdDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5gLFxuICB9LFxuICB7XG4gICAgaW5mbzogJ0JpbGxpbmcnLFxuICAgIGFkZGl0aW9uYWxDbGFzczogJ3BvcC11cF9faW5mb3JtYXRpb25fX3RleHRfc2Vjb25kJyxcbiAgICBodG1sOiBgPGRpdiBjbGFzcz1cInBvcC11cF9fc2Vjb25kXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBZb3VyIE5hbWU8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcGF0dGVybj1cIl5bQS1aYS16XSpbQS1aYS16IF0qW0EtWmEtel0kXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBhbmQgbGFzdCBuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfc2Vjb25kXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvclwiPkludmFsaWQgbmFtZTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9wLXVwX19sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IFlvdXIgRW1haWwgQWRkcmVzcyA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfc2Vjb25kXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvciBwb3AtdXBfX2Vycm9yX2VtYWlsXCI+SW52YWxpZCBlbWFpbDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dCBwb3AtdXBfX2xhYmVsX3RleHRfbm90ZVwiPllvdSB3aWxsIHJlY2VpdmUgZW1haWxzIGZyb20gdGhlIE9ubGluZSBab28sIGluY2x1ZGluZyB1cGRhdGVzIGFuZCBuZXdzIG9uIHRoZSBsYXRlc3QgZGlzY292ZXJpZXMgYW5kIHRyYW5zbGF0aW9ucy4gWW91IGNhbiB1bnN1YnNjcmliZSBhdCBhbnkgdGltZS48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5gLFxuICB9LFxuICB7XG4gICAgaW5mbzogJ1BheW1lbnQnLFxuICAgIGFkZGl0aW9uYWxDbGFzczogJ3BvcC11cF9faW5mb3JtYXRpb25fdGhpcmQnLFxuICAgIGh0bWw6IGA8ZGl2IGNsYXNzPVwicG9wLXVwX190aGlyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX190aGlyZF9fc2VjdGlvbiBwb3AtdXBfX3RoaXJkX19zZWN0aW9uX3RvcFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IENyZWRpdCBDYXJkIE51bWJlcjwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2FyZC1udW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJeXFxcXGQrJFwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfY2FyZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2Vycm9yXCI+SW52YWxpZCBjYXJkIG51bWJlcjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IENWViBOdW1iZXI8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIl5cXFxcZHszLDR9JFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfY3Z2XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fZXJyb3JcIj5JbnZhbGlkIENWVjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fdGhpcmRfX3NlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19sYWJlbFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRcIj48c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gRXhwaXJhdGlvbiBEYXRlPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0X21vbnRoXCI+TW9udGg8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3cgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfbW9udGhcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy10b3BcIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbSBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy1ib3R0b21cIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0IHBvcC11cF9fc2VsZWN0X19saXN0X21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxsaT5KYW51YXJ5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+RmVicnVhcnk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5NYXJjaDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkFwcmlsPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TWF5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+SnVuZTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkp1bHk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5BdWd1c3Q8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TZXB0ZW1iZXI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5PY3RvYmVyPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Tm92ZW1iZXI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5EZWNlbWJlcjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19sYWJlbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyIHBvcC11cF9fc2VsZWN0X19oZWFkZXJfeWVhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dCBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dF95ZWFyXCI+WWVhcjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvdyBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd195ZWFyXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3AgcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF95ZWFyIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy10b3BcIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbSBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX3llYXIgaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3QgcG9wLXVwX19zZWxlY3RfX2xpc3RfeWVhciBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8bGk+MjAyNjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMjc8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDI4PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAyOTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDMxPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzMjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDM0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzNTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzY8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YCxcbiAgfSxcbl1cblxubGV0IHN0ZXAgPSAxXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG5jb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQnKVxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb25hdGUtcG9wLXVwJylcblxuZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJylcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIGBhZnRlcmJlZ2luYCxcbiAgICAgIGA8ZGl2IGNsYXNzPVwicG9wLXVwXCI+XG4gIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2hlYWRlclwiPlxuICAgIDxoMiBjbGFzcz1cInBvcC11cF9fdGl0bGVcIj5tYWtlIHlvdXIgZG9uYXRpb248L2gyPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBvcC11cF9faW5mb3JtYXRpb25cIj5cbiAgICA8cCBjbGFzcz1cInBvcC11cF9faW5mb3JtYXRpb25fX3RleHRcIj5QYXltZW50IEluZm9ybWF0aW9uOjwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2JvdHRvbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2R5bmFtaWNcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19idXR0b25zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19idXR0b25zX190b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fcG9pbnRzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX3BvaW50c19faXRlbVwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fcG9pbnRzX19pdGVtXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19wb2ludHNfX2l0ZW1cIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19iYWNrIGhpZGRlblwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19iYWNrX190ZXh0XCI+QmFjazwvc3Bhbj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjUgMjJcIj5cbiAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvd1wiIGNsYXNzPVwicG9wLXVwX19iYWNrX19zdmdcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX25leHRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX25leHRfX3RleHRcIj5uZXh0PC9zcGFuPlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjUgMjJcIj5cbiAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3dcIiBjbGFzcz1cInBvcC11cF9fbmV4dF9fc3ZnXCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19jb21wbGV0ZSBoaWRkZW5cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2NvbXBsZXRlX190ZXh0XCI+Y29tcGxldGUgZG9uYXRpb248L3NwYW4+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIyXCIgdmlld0JveD1cIjAgMCAyNSAyMlwiPlxuICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvd1wiIGNsYXNzPVwicG9wLXVwX19jb21wbGV0ZV9fc3ZnXCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YFxuICAgIClcblxuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cCcpXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX25leHQnKVxuICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19iYWNrJylcbiAgICBjb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX2NvbXBsZXRlJylcbiAgICBjb25zdCBkeW5hbWljQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fZHluYW1pYycpXG4gICAgY29uc3QgaW5mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19pbmZvcm1hdGlvbl9fdGV4dCcpXG4gICAgY29uc3QgcG9pbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fcG9pbnRzJylcbiAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0JylcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9faW5mb3JtYXRpb24nKVxuXG4gICAgZnVuY3Rpb24gY2hhbmdUZXh0KCkge1xuICAgICAgaW5mb3JtYXRpb24udGV4dENvbnRlbnQgPSBgJHtwb3BVcERhdGFbc3RlcCAtIDFdLmluZm99IEluZm9ybWF0aW9uOmBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgZHluYW1pY0NvbnRhaW5lci5jaGlsZHJlbikge1xuICAgICAgICBjaGlsZC5yZW1vdmUoKVxuICAgICAgfVxuICAgICAgZHluYW1pY0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoYGFmdGVyYmVnaW5gLCBwb3BVcERhdGFbc3RlcCAtIDFdLmh0bWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsbFBvaW50cygpIHtcbiAgICAgIDtbLi4ucG9pbnRzQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICAgICAgaW5kZXggPD0gc3RlcCAtIDEgPyBwb2ludC5jbGFzc0xpc3QuYWRkKCdmaWxsJykgOiBwb2ludC5jbGFzc0xpc3QucmVtb3ZlKCdmaWxsJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VQb3BVcCgpIHtcbiAgICAgIHBvcFVwLnJlbW92ZSgpXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpXG4gICAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXhJbmZvVGV4dCgpIHtcbiAgICAgIGluZm9UZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcC11cF9faW5mb3JtYXRpb25fX3RleHRfc2Vjb25kJylcbiAgICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncG9wLXVwX19pbmZvcm1hdGlvbl90aGlyZCcpXG4gICAgICBpZiAoc3RlcCA9PT0gMikge1xuICAgICAgICBpbmZvVGV4dC5jbGFzc0xpc3QuYWRkKCdwb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0X3NlY29uZCcpXG4gICAgICB9XG4gICAgICBpZiAoc3RlcCA9PT0gMykge1xuICAgICAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcC11cF9faW5mb3JtYXRpb25fdGhpcmQnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vZGFsc0xvZ2ljKCkge1xuICAgICAgaWYgKHN0ZXAgPT09IDEpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdEZhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X2Zhdm9yaXRlJylcbiAgICAgICAgY29uc3QgYXJyb3dCdXR0b25GYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd19mYXZvcml0ZScpXG4gICAgICAgIGNvbnN0IGlucHV0RmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfZmF2b3JpdGUnKVxuICAgICAgICBjb25zdCB0b3BBcnJvd0Zhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfZmF2b3JpdGUnKVxuICAgICAgICBjb25zdCBib3R0b21BcnJvd0Zhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b21fZmF2b3JpdGUnKVxuXG4gICAgICAgIGFycm93QnV0dG9uRmF2b3JpdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgc2VsZWN0TGlzdEZhdm9yaXRlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgdG9wQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgIGJvdHRvbUFycm93RmF2b3JpdGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgfSlcblxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBzZWxlY3RMaXN0RmF2b3JpdGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlucHV0RmF2b3JpdGUudGV4dENvbnRlbnQgPSBjaGlsZC50ZXh0Q29udGVudFxuICAgICAgICAgICAgc2VsZWN0TGlzdEZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICB0b3BBcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICBib3R0b21BcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBwb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChhcnJvd0J1dHRvbkZhdm9yaXRlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHJldHVyblxuICAgICAgICAgIHNlbGVjdExpc3RGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIHRvcEFycm93RmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICBib3R0b21BcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IDMpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdE1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X21vbnRoJylcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdFllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfeWVhcicpXG4gICAgICAgIGNvbnN0IGFycm93QnV0dG9uTW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfbW9udGgnKVxuICAgICAgICBjb25zdCBhcnJvd0J1dHRvblllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfeWVhcicpXG4gICAgICAgIGNvbnN0IGlucHV0TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfbW9udGgnKVxuICAgICAgICBjb25zdCBpbnB1dFllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfeWVhcicpXG4gICAgICAgIGNvbnN0IHRvcEFycm93TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF9tb250aCcpXG4gICAgICAgIGNvbnN0IGJvdHRvbUFycm93TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV9tb250aCcpXG4gICAgICAgIGNvbnN0IHRvcEFycm93WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX3llYXInKVxuICAgICAgICBjb25zdCBib3R0b21BcnJvd1llYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV95ZWFyJylcblxuICAgICAgICBhcnJvd0J1dHRvbk1vbnRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHNlbGVjdExpc3RNb250aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgIHRvcEFycm93TW9udGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICBib3R0b21BcnJvd01vbnRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYXJyb3dCdXR0b25ZZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHNlbGVjdExpc3RZZWFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgdG9wQXJyb3dZZWFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgYm90dG9tQXJyb3dZZWFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygc2VsZWN0TGlzdE1vbnRoLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dE1vbnRoLnRleHRDb250ZW50ID0gY2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgICAgIHNlbGVjdExpc3RNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgdG9wQXJyb3dNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgYm90dG9tQXJyb3dNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBzZWxlY3RMaXN0WWVhci5jaGlsZHJlbikge1xuICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXRZZWFyLnRleHRDb250ZW50ID0gY2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgICAgIHNlbGVjdExpc3RZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICB0b3BBcnJvd1llYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIGJvdHRvbUFycm93WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcG9wVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoYXJyb3dCdXR0b25Nb250aC5jb250YWlucyhldmVudC50YXJnZXQpIHx8IGFycm93QnV0dG9uWWVhci5jb250YWlucyhldmVudC50YXJnZXQpKSByZXR1cm5cbiAgICAgICAgICBzZWxlY3RMaXN0TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICB0b3BBcnJvd01vbnRoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgYm90dG9tQXJyb3dNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIHNlbGVjdExpc3RZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgdG9wQXJyb3dZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgYm90dG9tQXJyb3dZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdUZXh0KClcbiAgICByZW5kZXJDb250ZW50KClcbiAgICBmaWxsUG9pbnRzKClcbiAgICBmaXhJbmZvVGV4dCgpXG4gICAgbW9kYWxzTG9naWMoKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJylcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc3RlcCArPSAxXG4gICAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICBjaGFuZ1RleHQoKVxuICAgICAgcmVuZGVyQ29udGVudCgpXG4gICAgICBmaWxsUG9pbnRzKClcbiAgICAgIGZpeEluZm9UZXh0KClcbiAgICAgIG1vZGFsc0xvZ2ljKClcbiAgICAgIGlmIChzdGVwID09PSAzKSB7XG4gICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgY29tcGxldGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHN0ZXAgLT0gMVxuICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgY29tcGxldGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIGNoYW5nVGV4dCgpXG4gICAgICByZW5kZXJDb250ZW50KClcbiAgICAgIGZpbGxQb2ludHMoKVxuICAgICAgZml4SW5mb1RleHQoKVxuICAgICAgbW9kYWxzTG9naWMoKVxuICAgICAgaWYgKHN0ZXAgPT09IDEpIHtcbiAgICAgICAgYmFja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNsb3NlUG9wVXAoKVxuICAgICAgc3RlcCA9IDFcbiAgICB9KVxuXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsb3NlUG9wVXBMaXN0ZW5lcihldmVudCkge1xuICAgICAgaWYgKChwb3BVcC5jb250YWlucyhldmVudC50YXJnZXQpICYmICFjb21wbGV0ZS5jb250YWlucyhldmVudC50YXJnZXQpKSB8fCBidXR0b24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY2xvc2VQb3BVcCgpXG4gICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3BVcExpc3RlbmVyKVxuICAgIH0pXG4gIH0pXG59XG4iLCJhc3luYyBmdW5jdGlvbiBmZXRjaEFuaW1hbHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy4vYW5pbWFscy5qc29uJylcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB6b29zKGFuaW1hbE5hbWUgPSAnZ29yaWxsYScpIHtcbiAgY29uc3QgYWxsQW5pbWFscyA9IGF3YWl0IGZldGNoQW5pbWFscygpXG4gIGxldCBhbmltYWwgPSBhbGxBbmltYWxzLmZpbmQoKHgpID0+IHguYW5pbWFsID09PSBhbmltYWxOYW1lKVxuICBpZiAoIWFuaW1hbCkge1xuICAgIGFuaW1hbCA9IGFsbEFuaW1hbHNbMF1cbiAgfVxuXG4gIGNvbnN0IHRvcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYV9fdG9wX190aXRsZScpXG4gIHRvcFRpdGxlLnRleHRDb250ZW50ID0gYW5pbWFsLnRpdGxlXG4gIGNvbnN0IGtub3dUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtub3dfX2luZm9fX3RleHQnKVxuICBrbm93VGV4dC50ZXh0Q29udGVudCA9IGFuaW1hbC5rbm93XG4gIGNvbnN0IGNvbW1vbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbW9uTmFtZScpXG4gIGNvbW1vbk5hbWUudGV4dENvbnRlbnQgPSBhbmltYWwuY29tbW9uTmFtZVxuICBjb25zdCBzY2llbnRpZmljTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2llbnRpZmljTmFtZScpXG4gIHNjaWVudGlmaWNOYW1lLnRleHRDb250ZW50ID0gYW5pbWFsLnNjaWVudGlmaWNOYW1lXG4gIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHlwZScpXG4gIHR5cGUudGV4dENvbnRlbnQgPSBhbmltYWwudHlwZVxuICBjb25zdCBzaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemUnKVxuICBzaXplLnRleHRDb250ZW50ID0gYW5pbWFsLnNpemVcbiAgY29uc3QgZGlldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWV0JylcbiAgZGlldC50ZXh0Q29udGVudCA9IGFuaW1hbC5kaWV0XG4gIGNvbnN0IGhhYml0YXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFiaXRhdCcpXG4gIGhhYml0YXQudGV4dENvbnRlbnQgPSBhbmltYWwuaGFiaXRhdFxuICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2UnKVxuICByYW5nZS50ZXh0Q29udGVudCA9IGFuaW1hbC5yYW5nZVxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbm93X19pbWFnZV9faW1nJylcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgL2ltYWdlcy8ke2FuaW1hbC5hbmltYWx9X1BhZ2UucG5nYClcbiAgY29uc3Qga25vd0xhcmdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbm93X190ZXh0JylcbiAga25vd0xhcmdlVGV4dC50ZXh0Q29udGVudCA9IGFuaW1hbC50ZXh0XG4gIGNvbnN0IGRvbmF0aW9uVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhX19kb25hdGlvbl9fdGV4dC1pbmZvX190aXRsZScpXG4gIGRvbmF0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBhbmltYWwuZG9uYXRpb25UaXRsZVxuICBjb25zdCBkb25hdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhX19kb25hdGlvbl9fdGV4dC1pbmZvX190ZXh0JylcbiAgZG9uYXRpb25UZXh0LnRleHRDb250ZW50ID0gYW5pbWFsLmRvbmF0aW9uVGV4dFxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sWUFBWTtBQUFBLEVBQ2hCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBc0RWO0FBQUEsRUFDRTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04saUJBQWlCO0FBQUEsSUFDakIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUEwQlY7QUFBQSxFQUNFO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixpQkFBaUI7QUFBQSxJQUNqQixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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
