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
  image.setAttribute("src", `./images/${animal.animal}_Page.png`);
  const knowLargeText = document.querySelector(".know__text");
  knowLargeText.textContent = animal.text;
  const donationTitle = document.querySelector(".camera__donation__text-info__title");
  donationTitle.textContent = animal.donationTitle;
  const donationText = document.querySelector(".camera__donation__text-info__text");
  donationText.textContent = animal.donationText;
  const panel = document.querySelector(".panel__top");
  const bottomButton = document.querySelector(".panel__bottom");
  let step2 = 0;
  const animalsForPanel = allAnimals.sort((b, c) => {
    if (b.animal === animal.animal) return -1;
    if (c.animal === animal.animal) return 1;
    return 0;
  }).map((animalPanel) => transformAnimalForPanel(animalPanel, animalPanel.animal === animal.animal));
  function renderPanel() {
    const children = document.querySelectorAll(".panel__animal");
    for (let child of children) {
      child.remove();
    }
    const circlesHtml = animalsForPanel.slice(step2, step2 + 4);
    panel.insertAdjacentHTML("afterend", circlesHtml.join(""));
    step2 += 4;
    if (step2 > 4) {
      step2 = 0;
    }
    const circles = document.querySelectorAll(".panel__animal__circle");
    for (let circle of circles) {
      let classes = Array.from(circle.classList);
      circle.addEventListener("click", () => zoos(classes[1]));
    }
  }
  renderPanel();
  bottomButton.addEventListener("click", renderPanel);
}
function transformAnimalForPanel(animal, active = false) {
  return active ? `<div class="panel__animal active"><svg width="120" height="120" viewBox="0 0 120 120" class="panel__animal__border"><use href="./icon.svg#circle"></use></svg><div class="panel__animal__circle ${animal.animal}">${animal.svg}</div></div>` : `<div class="panel__animal"><svg width="120" height="120" viewBox="0 0 120 120" class="panel__animal__border"><use href="./icon.svg#circle"></use></svg><div class="panel__animal__circle ${animal.animal}">${animal.svg}</div></div>`;
}
export {
  zoos as z
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vcy0tOWp1LU1taC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZlYXR1cmVzL3BvcC11cC5qcyIsIi4uLy4uL3NyYy9mZWF0dXJlcy96b29zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvcFVwRGF0YSA9IFtcbiAge1xuICAgIGluZm86ICdEb25hdGlvbicsXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gQ2hvb3NlIHlvdXIgZG9uYXRpb24gYW1vdW50OjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kMTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQyMDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDMwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kNTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQ4MDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDEwMDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9wLXVwX19maXJzdF9fb3RoZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fb3RoZXJfX2J1dHRvblwiPk90aGVyIGFtb3VudDwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbW91bnRcIiBwYXR0ZXJuPVwiXlswLTkuLF0rJFwiIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2ZpcnN0X19vdGhlcl9faW5wdXRcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvciBwb3AtdXBfX2ZpcnN0X19vdGhlcl9fZXJyb3JcIj5JbnZhbGlkIG51bWJlcjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX3NwZWNpYWxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fc3BlY2lhbF9fYnV0dG9uXCI+Zm9yIHNwZWNpYWwgcGV0PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXQgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfZmF2b3JpdGVcIj5DaG9vc2UgeW91ciBmYXZvdXJpdGU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X2Zhdm9yaXRlXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCI+XG4gICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3AgcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LXRvcFwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b20gcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGxpPkx1a2FzIHRoZSBQYW5kYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5BbmR5IHRoZSBMZW11cjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5HbGVuIHRoZSBHb3JpbGxhPC9saT5cbiAgICAgICAgICAgICAgPGxpPk1pa2UgdGhlIEFsbGlnYXRvcjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TYW0gJiBMb3JhIHRoZSBlYWdsZXMgZmFtaWx5PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+TGl6IHRoZSBLb2FsYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TaGFrZSB0aGUgTGlvbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TZW5qYSB0aGUgVGlnZXI8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2dpZnRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdpZnRcIiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX3N0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX2NvbnRyb2xcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX3RpdGxlXCI+TWFrZSB0aGlzIGEgbW9udGhseSByZWN1cnJpbmcgZ2lmdDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5gLFxuICB9LFxuICB7XG4gICAgaW5mbzogJ0JpbGxpbmcnLFxuICAgIGFkZGl0aW9uYWxDbGFzczogJ3BvcC11cF9faW5mb3JtYXRpb25fX3RleHRfc2Vjb25kJyxcbiAgICBodG1sOiBgPGRpdiBjbGFzcz1cInBvcC11cF9fc2Vjb25kXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBZb3VyIE5hbWU8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcGF0dGVybj1cIl5bQS1aYS16XSpbQS1aYS16IF0qW0EtWmEtel0kXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBhbmQgbGFzdCBuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfc2Vjb25kXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvclwiPkludmFsaWQgbmFtZTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9wLXVwX19sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IFlvdXIgRW1haWwgQWRkcmVzcyA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfc2Vjb25kXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvciBwb3AtdXBfX2Vycm9yX2VtYWlsXCI+SW52YWxpZCBlbWFpbDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dCBwb3AtdXBfX2xhYmVsX3RleHRfbm90ZVwiPllvdSB3aWxsIHJlY2VpdmUgZW1haWxzIGZyb20gdGhlIE9ubGluZSBab28sIGluY2x1ZGluZyB1cGRhdGVzIGFuZCBuZXdzIG9uIHRoZSBsYXRlc3QgZGlzY292ZXJpZXMgYW5kIHRyYW5zbGF0aW9ucy4gWW91IGNhbiB1bnN1YnNjcmliZSBhdCBhbnkgdGltZS48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5gLFxuICB9LFxuICB7XG4gICAgaW5mbzogJ1BheW1lbnQnLFxuICAgIGFkZGl0aW9uYWxDbGFzczogJ3BvcC11cF9faW5mb3JtYXRpb25fdGhpcmQnLFxuICAgIGh0bWw6IGA8ZGl2IGNsYXNzPVwicG9wLXVwX190aGlyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX190aGlyZF9fc2VjdGlvbiBwb3AtdXBfX3RoaXJkX19zZWN0aW9uX3RvcFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IENyZWRpdCBDYXJkIE51bWJlcjwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2FyZC1udW1iZXJcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJeXFxcXGQrJFwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfY2FyZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2Vycm9yXCI+SW52YWxpZCBjYXJkIG51bWJlcjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IENWViBOdW1iZXI8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIl5cXFxcZHszLDR9JFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfY3Z2XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fZXJyb3JcIj5JbnZhbGlkIENWVjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fdGhpcmRfX3NlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19sYWJlbFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRcIj48c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gRXhwaXJhdGlvbiBEYXRlPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0X21vbnRoXCI+TW9udGg8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3cgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfbW9udGhcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy10b3BcIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbSBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy1ib3R0b21cIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0IHBvcC11cF9fc2VsZWN0X19saXN0X21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxsaT5KYW51YXJ5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+RmVicnVhcnk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5NYXJjaDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkFwcmlsPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TWF5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+SnVuZTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkp1bHk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5BdWd1c3Q8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TZXB0ZW1iZXI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5PY3RvYmVyPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Tm92ZW1iZXI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5EZWNlbWJlcjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19sYWJlbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyIHBvcC11cF9fc2VsZWN0X19oZWFkZXJfeWVhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dCBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dF95ZWFyXCI+WWVhcjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvdyBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd195ZWFyXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3AgcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF95ZWFyIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy10b3BcIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbSBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX3llYXIgaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3QgcG9wLXVwX19zZWxlY3RfX2xpc3RfeWVhciBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8bGk+MjAyNjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMjc8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDI4PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAyOTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDMxPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzMjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDM0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzNTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzY8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YCxcbiAgfSxcbl1cblxubGV0IHN0ZXAgPSAxXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG5jb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQnKVxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb25hdGUtcG9wLXVwJylcblxuZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJylcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIGBhZnRlcmJlZ2luYCxcbiAgICAgIGA8ZGl2IGNsYXNzPVwicG9wLXVwXCI+XG4gIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2hlYWRlclwiPlxuICAgIDxoMiBjbGFzcz1cInBvcC11cF9fdGl0bGVcIj5tYWtlIHlvdXIgZG9uYXRpb248L2gyPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBvcC11cF9faW5mb3JtYXRpb25cIj5cbiAgICA8cCBjbGFzcz1cInBvcC11cF9faW5mb3JtYXRpb25fX3RleHRcIj5QYXltZW50IEluZm9ybWF0aW9uOjwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2JvdHRvbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2R5bmFtaWNcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19idXR0b25zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19idXR0b25zX190b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fcG9pbnRzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX3BvaW50c19faXRlbVwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fcG9pbnRzX19pdGVtXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19wb2ludHNfX2l0ZW1cIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19iYWNrIGhpZGRlblwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19iYWNrX190ZXh0XCI+QmFjazwvc3Bhbj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjUgMjJcIj5cbiAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvd1wiIGNsYXNzPVwicG9wLXVwX19iYWNrX19zdmdcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX25leHRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX25leHRfX3RleHRcIj5uZXh0PC9zcGFuPlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjUgMjJcIj5cbiAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3dcIiBjbGFzcz1cInBvcC11cF9fbmV4dF9fc3ZnXCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19jb21wbGV0ZSBoaWRkZW5cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2NvbXBsZXRlX190ZXh0XCI+Y29tcGxldGUgZG9uYXRpb248L3NwYW4+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIyXCIgdmlld0JveD1cIjAgMCAyNSAyMlwiPlxuICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvd1wiIGNsYXNzPVwicG9wLXVwX19jb21wbGV0ZV9fc3ZnXCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YFxuICAgIClcblxuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cCcpXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX25leHQnKVxuICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19iYWNrJylcbiAgICBjb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX2NvbXBsZXRlJylcbiAgICBjb25zdCBkeW5hbWljQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fZHluYW1pYycpXG4gICAgY29uc3QgaW5mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19pbmZvcm1hdGlvbl9fdGV4dCcpXG4gICAgY29uc3QgcG9pbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fcG9pbnRzJylcbiAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0JylcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9faW5mb3JtYXRpb24nKVxuXG4gICAgZnVuY3Rpb24gY2hhbmdUZXh0KCkge1xuICAgICAgaW5mb3JtYXRpb24udGV4dENvbnRlbnQgPSBgJHtwb3BVcERhdGFbc3RlcCAtIDFdLmluZm99IEluZm9ybWF0aW9uOmBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgZHluYW1pY0NvbnRhaW5lci5jaGlsZHJlbikge1xuICAgICAgICBjaGlsZC5yZW1vdmUoKVxuICAgICAgfVxuICAgICAgZHluYW1pY0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoYGFmdGVyYmVnaW5gLCBwb3BVcERhdGFbc3RlcCAtIDFdLmh0bWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsbFBvaW50cygpIHtcbiAgICAgIDtbLi4ucG9pbnRzQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICAgICAgaW5kZXggPD0gc3RlcCAtIDEgPyBwb2ludC5jbGFzc0xpc3QuYWRkKCdmaWxsJykgOiBwb2ludC5jbGFzc0xpc3QucmVtb3ZlKCdmaWxsJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VQb3BVcCgpIHtcbiAgICAgIHBvcFVwLnJlbW92ZSgpXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpXG4gICAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXhJbmZvVGV4dCgpIHtcbiAgICAgIGluZm9UZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcC11cF9faW5mb3JtYXRpb25fX3RleHRfc2Vjb25kJylcbiAgICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgncG9wLXVwX19pbmZvcm1hdGlvbl90aGlyZCcpXG4gICAgICBpZiAoc3RlcCA9PT0gMikge1xuICAgICAgICBpbmZvVGV4dC5jbGFzc0xpc3QuYWRkKCdwb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0X3NlY29uZCcpXG4gICAgICB9XG4gICAgICBpZiAoc3RlcCA9PT0gMykge1xuICAgICAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcC11cF9faW5mb3JtYXRpb25fdGhpcmQnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vZGFsc0xvZ2ljKCkge1xuICAgICAgaWYgKHN0ZXAgPT09IDEpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdEZhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X2Zhdm9yaXRlJylcbiAgICAgICAgY29uc3QgYXJyb3dCdXR0b25GYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd19mYXZvcml0ZScpXG4gICAgICAgIGNvbnN0IGlucHV0RmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfZmF2b3JpdGUnKVxuICAgICAgICBjb25zdCB0b3BBcnJvd0Zhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfZmF2b3JpdGUnKVxuICAgICAgICBjb25zdCBib3R0b21BcnJvd0Zhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b21fZmF2b3JpdGUnKVxuXG4gICAgICAgIGFycm93QnV0dG9uRmF2b3JpdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgc2VsZWN0TGlzdEZhdm9yaXRlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgdG9wQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgIGJvdHRvbUFycm93RmF2b3JpdGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgfSlcblxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBzZWxlY3RMaXN0RmF2b3JpdGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlucHV0RmF2b3JpdGUudGV4dENvbnRlbnQgPSBjaGlsZC50ZXh0Q29udGVudFxuICAgICAgICAgICAgc2VsZWN0TGlzdEZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICB0b3BBcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICBib3R0b21BcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBwb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChhcnJvd0J1dHRvbkZhdm9yaXRlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHJldHVyblxuICAgICAgICAgIHNlbGVjdExpc3RGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIHRvcEFycm93RmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICBib3R0b21BcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IDMpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdE1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X21vbnRoJylcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdFllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfeWVhcicpXG4gICAgICAgIGNvbnN0IGFycm93QnV0dG9uTW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfbW9udGgnKVxuICAgICAgICBjb25zdCBhcnJvd0J1dHRvblllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfeWVhcicpXG4gICAgICAgIGNvbnN0IGlucHV0TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfbW9udGgnKVxuICAgICAgICBjb25zdCBpbnB1dFllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfeWVhcicpXG4gICAgICAgIGNvbnN0IHRvcEFycm93TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF9tb250aCcpXG4gICAgICAgIGNvbnN0IGJvdHRvbUFycm93TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV9tb250aCcpXG4gICAgICAgIGNvbnN0IHRvcEFycm93WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX3llYXInKVxuICAgICAgICBjb25zdCBib3R0b21BcnJvd1llYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV95ZWFyJylcblxuICAgICAgICBhcnJvd0J1dHRvbk1vbnRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHNlbGVjdExpc3RNb250aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgIHRvcEFycm93TW9udGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICBib3R0b21BcnJvd01vbnRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgIH0pXG5cbiAgICAgICAgYXJyb3dCdXR0b25ZZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHNlbGVjdExpc3RZZWFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgdG9wQXJyb3dZZWFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgYm90dG9tQXJyb3dZZWFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygc2VsZWN0TGlzdE1vbnRoLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dE1vbnRoLnRleHRDb250ZW50ID0gY2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgICAgIHNlbGVjdExpc3RNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgdG9wQXJyb3dNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgYm90dG9tQXJyb3dNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBzZWxlY3RMaXN0WWVhci5jaGlsZHJlbikge1xuICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXRZZWFyLnRleHRDb250ZW50ID0gY2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgICAgIHNlbGVjdExpc3RZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICB0b3BBcnJvd1llYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIGJvdHRvbUFycm93WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcG9wVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoYXJyb3dCdXR0b25Nb250aC5jb250YWlucyhldmVudC50YXJnZXQpIHx8IGFycm93QnV0dG9uWWVhci5jb250YWlucyhldmVudC50YXJnZXQpKSByZXR1cm5cbiAgICAgICAgICBzZWxlY3RMaXN0TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICB0b3BBcnJvd01vbnRoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgYm90dG9tQXJyb3dNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIHNlbGVjdExpc3RZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgdG9wQXJyb3dZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgYm90dG9tQXJyb3dZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdUZXh0KClcbiAgICByZW5kZXJDb250ZW50KClcbiAgICBmaWxsUG9pbnRzKClcbiAgICBmaXhJbmZvVGV4dCgpXG4gICAgbW9kYWxzTG9naWMoKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJylcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc3RlcCArPSAxXG4gICAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICBjaGFuZ1RleHQoKVxuICAgICAgcmVuZGVyQ29udGVudCgpXG4gICAgICBmaWxsUG9pbnRzKClcbiAgICAgIGZpeEluZm9UZXh0KClcbiAgICAgIG1vZGFsc0xvZ2ljKClcbiAgICAgIGlmIChzdGVwID09PSAzKSB7XG4gICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgY29tcGxldGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHN0ZXAgLT0gMVxuICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgY29tcGxldGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIGNoYW5nVGV4dCgpXG4gICAgICByZW5kZXJDb250ZW50KClcbiAgICAgIGZpbGxQb2ludHMoKVxuICAgICAgZml4SW5mb1RleHQoKVxuICAgICAgbW9kYWxzTG9naWMoKVxuICAgICAgaWYgKHN0ZXAgPT09IDEpIHtcbiAgICAgICAgYmFja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNsb3NlUG9wVXAoKVxuICAgICAgc3RlcCA9IDFcbiAgICB9KVxuXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsb3NlUG9wVXBMaXN0ZW5lcihldmVudCkge1xuICAgICAgaWYgKChwb3BVcC5jb250YWlucyhldmVudC50YXJnZXQpICYmICFjb21wbGV0ZS5jb250YWlucyhldmVudC50YXJnZXQpKSB8fCBidXR0b24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY2xvc2VQb3BVcCgpXG4gICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3BVcExpc3RlbmVyKVxuICAgIH0pXG4gIH0pXG59XG4iLCJhc3luYyBmdW5jdGlvbiBmZXRjaEFuaW1hbHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy4vYW5pbWFscy5qc29uJylcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB6b29zKGFuaW1hbE5hbWUgPSAnZ29yaWxsYScpIHtcbiAgY29uc3QgYWxsQW5pbWFscyA9IGF3YWl0IGZldGNoQW5pbWFscygpXG4gIGxldCBhbmltYWwgPSBhbGxBbmltYWxzLmZpbmQoKHgpID0+IHguYW5pbWFsID09PSBhbmltYWxOYW1lKVxuICBpZiAoIWFuaW1hbCkge1xuICAgIGFuaW1hbCA9IGFsbEFuaW1hbHNbMF1cbiAgfVxuXG4gIGNvbnN0IHRvcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYV9fdG9wX190aXRsZScpXG4gIHRvcFRpdGxlLnRleHRDb250ZW50ID0gYW5pbWFsLnRpdGxlXG4gIGNvbnN0IGtub3dUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtub3dfX2luZm9fX3RleHQnKVxuICBrbm93VGV4dC50ZXh0Q29udGVudCA9IGFuaW1hbC5rbm93XG4gIGNvbnN0IGNvbW1vbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbW9uTmFtZScpXG4gIGNvbW1vbk5hbWUudGV4dENvbnRlbnQgPSBhbmltYWwuY29tbW9uTmFtZVxuICBjb25zdCBzY2llbnRpZmljTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2llbnRpZmljTmFtZScpXG4gIHNjaWVudGlmaWNOYW1lLnRleHRDb250ZW50ID0gYW5pbWFsLnNjaWVudGlmaWNOYW1lXG4gIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHlwZScpXG4gIHR5cGUudGV4dENvbnRlbnQgPSBhbmltYWwudHlwZVxuICBjb25zdCBzaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemUnKVxuICBzaXplLnRleHRDb250ZW50ID0gYW5pbWFsLnNpemVcbiAgY29uc3QgZGlldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWV0JylcbiAgZGlldC50ZXh0Q29udGVudCA9IGFuaW1hbC5kaWV0XG4gIGNvbnN0IGhhYml0YXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFiaXRhdCcpXG4gIGhhYml0YXQudGV4dENvbnRlbnQgPSBhbmltYWwuaGFiaXRhdFxuICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2UnKVxuICByYW5nZS50ZXh0Q29udGVudCA9IGFuaW1hbC5yYW5nZVxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbm93X19pbWFnZV9faW1nJylcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9pbWFnZXMvJHthbmltYWwuYW5pbWFsfV9QYWdlLnBuZ2ApXG4gIGNvbnN0IGtub3dMYXJnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua25vd19fdGV4dCcpXG4gIGtub3dMYXJnZVRleHQudGV4dENvbnRlbnQgPSBhbmltYWwudGV4dFxuICBjb25zdCBkb25hdGlvblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYV9fZG9uYXRpb25fX3RleHQtaW5mb19fdGl0bGUnKVxuICBkb25hdGlvblRpdGxlLnRleHRDb250ZW50ID0gYW5pbWFsLmRvbmF0aW9uVGl0bGVcbiAgY29uc3QgZG9uYXRpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYV9fZG9uYXRpb25fX3RleHQtaW5mb19fdGV4dCcpXG4gIGRvbmF0aW9uVGV4dC50ZXh0Q29udGVudCA9IGFuaW1hbC5kb25hdGlvblRleHRcblxuICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW5lbF9fdG9wJylcbiAgY29uc3QgYm90dG9tQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhbmVsX19ib3R0b20nKVxuICBsZXQgc3RlcCA9IDBcbiAgY29uc3QgYW5pbWFsc0ZvclBhbmVsID0gYWxsQW5pbWFsc1xuICAgIC5zb3J0KChiLCBjKSA9PiB7XG4gICAgICBpZiAoYi5hbmltYWwgPT09IGFuaW1hbC5hbmltYWwpIHJldHVybiAtMVxuICAgICAgaWYgKGMuYW5pbWFsID09PSBhbmltYWwuYW5pbWFsKSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9KVxuICAgIC5tYXAoKGFuaW1hbFBhbmVsKSA9PiB0cmFuc2Zvcm1BbmltYWxGb3JQYW5lbChhbmltYWxQYW5lbCwgYW5pbWFsUGFuZWwuYW5pbWFsID09PSBhbmltYWwuYW5pbWFsKSlcblxuICBmdW5jdGlvbiByZW5kZXJQYW5lbCgpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYW5lbF9fYW5pbWFsJylcbiAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgY2hpbGQucmVtb3ZlKClcbiAgICB9XG4gICAgY29uc3QgY2lyY2xlc0h0bWwgPSBhbmltYWxzRm9yUGFuZWwuc2xpY2Uoc3RlcCwgc3RlcCArIDQpXG4gICAgcGFuZWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGNpcmNsZXNIdG1sLmpvaW4oJycpKVxuXG4gICAgc3RlcCArPSA0XG4gICAgaWYgKHN0ZXAgPiA0KSB7XG4gICAgICBzdGVwID0gMFxuICAgIH1cbiAgICBjb25zdCBjaXJjbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsX19hbmltYWxfX2NpcmNsZScpXG4gICAgZm9yIChsZXQgY2lyY2xlIG9mIGNpcmNsZXMpIHtcbiAgICAgIGxldCBjbGFzc2VzID0gQXJyYXkuZnJvbShjaXJjbGUuY2xhc3NMaXN0KVxuICAgICAgY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gem9vcyhjbGFzc2VzWzFdKSlcbiAgICB9XG4gIH1cblxuICByZW5kZXJQYW5lbCgpXG4gIGJvdHRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclBhbmVsKVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1BbmltYWxGb3JQYW5lbChhbmltYWwsIGFjdGl2ZSA9IGZhbHNlKSB7XG4gIHJldHVybiBhY3RpdmVcbiAgICA/IGA8ZGl2IGNsYXNzPVwicGFuZWxfX2FuaW1hbCBhY3RpdmVcIj48c3ZnIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiMTIwXCIgdmlld0JveD1cIjAgMCAxMjAgMTIwXCIgY2xhc3M9XCJwYW5lbF9fYW5pbWFsX19ib3JkZXJcIj48dXNlIGhyZWY9XCIuL2ljb24uc3ZnI2NpcmNsZVwiPjwvdXNlPjwvc3ZnPjxkaXYgY2xhc3M9XCJwYW5lbF9fYW5pbWFsX19jaXJjbGUgJHthbmltYWwuYW5pbWFsfVwiPiR7YW5pbWFsLnN2Z308L2Rpdj48L2Rpdj5gXG4gICAgOiBgPGRpdiBjbGFzcz1cInBhbmVsX19hbmltYWxcIj48c3ZnIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiMTIwXCIgdmlld0JveD1cIjAgMCAxMjAgMTIwXCIgY2xhc3M9XCJwYW5lbF9fYW5pbWFsX19ib3JkZXJcIj48dXNlIGhyZWY9XCIuL2ljb24uc3ZnI2NpcmNsZVwiPjwvdXNlPjwvc3ZnPjxkaXYgY2xhc3M9XCJwYW5lbF9fYW5pbWFsX19jaXJjbGUgJHthbmltYWwuYW5pbWFs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
