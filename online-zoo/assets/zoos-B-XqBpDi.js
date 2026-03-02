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
                  <use href="./icon.svg#arrow-bottom"></use>
                </svg>
              </div>
            </div>
            <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-top pop-up__select__list__arrow-top_favorite hidden">
              <use href="./icon.svg#arrow-top"></use>
            </svg>
            <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-bottom pop-up__select__list__arrow-bottom_favorite hidden">
              <use href="./icon.svg#arrow-bottom"></use>
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
                    <use href="./icon.svg#arrow-bottom"></use>
                  </svg>
                </div>
              </div>
              <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-top pop-up__select__list__arrow-top_month hidden">
                <use href="./icon.svg#arrow-top"></use>
              </svg>
              <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-bottom pop-up__select__list__arrow-bottom_month hidden">
                <use href="./icon.svg#arrow-bottom"></use>
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
                    <use href="./icon.svg#arrow-bottom"></use>
                  </svg>
                </div>
              </div>
              <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-top pop-up__select__list__arrow-top_year hidden">
                <use href="./icon.svg#arrow-top"></use>
              </svg>
              <svg width="17" height="10" viewBox="0 0 17 10" class="pop-up__select__list__arrow-bottom pop-up__select__list__arrow-bottom_year hidden">
                <use href="./icon.svg#arrow-bottom"></use>
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
  const panel = document.querySelector(".panel");
  const topPanelElement = document.querySelector(".panel__top");
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
    topPanelElement.insertAdjacentHTML("afterend", circlesHtml.join(""));
    step2 += 4;
    if (step2 > 4) {
      step2 = 0;
    }
    const circles = document.querySelectorAll(".panel__animal__circle");
    for (let circle of circles) {
      let classes = Array.from(circle.classList);
      circle.addEventListener("click", () => {
        zoos(classes[1]);
        closePanel();
      });
    }
  }
  renderPanel();
  bottomButton.addEventListener("click", () => {
    renderPanel();
    closePanel();
  });
  const openButton = document.querySelector(".open-button");
  const closeButton = document.querySelector(".close-button");
  const bage = document.querySelector(".panel__bage");
  openButton.addEventListener("click", () => {
    panel.setAttribute("panel-open", "true");
    openButton.setAttribute("panel-open", "true");
    closeButton.setAttribute("panel-open", "true");
    bage.setAttribute("panel-open", "true");
    for (const animal2 of document.querySelectorAll(".panel__animal")) {
      animal2.setAttribute("panel-open", "true");
    }
  });
  closeButton.addEventListener("click", () => closePanel());
  function closePanel() {
    panel.removeAttribute("panel-open");
    openButton.removeAttribute("panel-open");
    closeButton.removeAttribute("panel-open");
    bage.removeAttribute("panel-open");
    for (const animal2 of document.querySelectorAll(".panel__animal")) {
      animal2.removeAttribute("panel-open");
    }
  }
}
function transformAnimalForPanel(animal, active = false) {
  return active ? `<div class="panel__animal active"><svg width="120" height="120" viewBox="0 0 120 120" class="panel__animal__border"><use href="./icon.svg#circle"></use></svg><div class="panel__animal__circle ${animal.animal}">${animal.svg}</div><p class="panel__animal__text">${animal.svgText}</p></div>` : `<div class="panel__animal"><svg width="120" height="120" viewBox="0 0 120 120" class="panel__animal__border"><use href="./icon.svg#circle"></use></svg><div class="panel__animal__circle ${animal.animal}">${animal.svg}</div><p class="panel__animal__text">${animal.svgText}</p></div>`;
}
export {
  zoos as z
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vcy1CLVhxQnBEaS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZlYXR1cmVzL3BvcC11cC5qcyIsIi4uLy4uL3NyYy9mZWF0dXJlcy96b29zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvcFVwRGF0YSA9IFtcbiAge1xuICAgIGluZm86ICdEb25hdGlvbicsXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gQ2hvb3NlIHlvdXIgZG9uYXRpb24gYW1vdW50OjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kMTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQyMDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDMwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kNTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQ4MDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDEwMDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9wLXVwX19maXJzdF9fb3RoZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fb3RoZXJfX2J1dHRvblwiPk90aGVyIGFtb3VudDwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbW91bnRcIiBwYXR0ZXJuPVwiXlswLTkuLF0rJFwiIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2ZpcnN0X19vdGhlcl9faW5wdXRcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvciBwb3AtdXBfX2ZpcnN0X19vdGhlcl9fZXJyb3JcIj5JbnZhbGlkIG51bWJlcjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX3NwZWNpYWxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fc3BlY2lhbF9fYnV0dG9uXCI+Zm9yIHNwZWNpYWwgcGV0PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXQgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfZmF2b3JpdGVcIj5DaG9vc2UgeW91ciBmYXZvdXJpdGU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X2Zhdm9yaXRlXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCI+XG4gICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIuL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCIgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wIHBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfZmF2b3JpdGUgaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi4vaWNvbi5zdmcjYXJyb3ctdG9wXCI+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbSBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX2Zhdm9yaXRlIGhpZGRlblwiPlxuICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIuL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGxpPkx1a2FzIHRoZSBQYW5kYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5BbmR5IHRoZSBMZW11cjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5HbGVuIHRoZSBHb3JpbGxhPC9saT5cbiAgICAgICAgICAgICAgPGxpPk1pa2UgdGhlIEFsbGlnYXRvcjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TYW0gJiBMb3JhIHRoZSBlYWdsZXMgZmFtaWx5PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+TGl6IHRoZSBLb2FsYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TaGFrZSB0aGUgTGlvbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TZW5qYSB0aGUgVGlnZXI8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2dpZnRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdpZnRcIiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX3N0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX2NvbnRyb2xcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX3RpdGxlXCI+TWFrZSB0aGlzIGEgbW9udGhseSByZWN1cnJpbmcgZ2lmdDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5gLFxuICB9LFxuICB7XG4gICAgaW5mbzogJ0JpbGxpbmcnLFxuICAgIGFkZGl0aW9uYWxDbGFzczogJ3BvcC11cF9faW5mb3JtYXRpb25fX3RleHRfc2Vjb25kJyxcbiAgICBodG1sOiBgPGRpdiBjbGFzcz1cInBvcC11cF9fc2Vjb25kXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBZb3VyIE5hbWU8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcGF0dGVybj1cIl5bQS1aYS16XSpbQS1aYS16IF0qW0EtWmEtel0kXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBhbmQgbGFzdCBuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfc2Vjb25kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2Vycm9yXCI+SW52YWxpZCBuYW1lPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3AtdXBfX2xhYmVsXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRcIj48c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gWW91ciBFbWFpbCBBZGRyZXNzIDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzcz1cInBvcC11cF9faW5wdXQgcG9wLXVwX19pbnB1dF9zZWNvbmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fZXJyb3IgcG9wLXVwX19lcnJvcl9lbWFpbFwiPkludmFsaWQgZW1haWw8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHQgcG9wLXVwX19sYWJlbF90ZXh0X25vdGVcIj5Zb3Ugd2lsbCByZWNlaXZlIGVtYWlscyBmcm9tIHRoZSBPbmxpbmUgWm9vLCBpbmNsdWRpbmcgdXBkYXRlcyBhbmQgbmV3cyBvbiB0aGUgbGF0ZXN0IGRpc2NvdmVyaWVzIGFuZCB0cmFuc2xhdGlvbnMuIFlvdSBjYW4gdW5zdWJzY3JpYmUgYXQgYW55IHRpbWUuPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+YCxcbiAgfSxcbiAge1xuICAgIGluZm86ICdQYXltZW50JyxcbiAgICBhZGRpdGlvbmFsQ2xhc3M6ICdwb3AtdXBfX2luZm9ybWF0aW9uX3RoaXJkJyxcbiAgICBodG1sOiBgPGRpdiBjbGFzcz1cInBvcC11cF9fdGhpcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fdGhpcmRfX3NlY3Rpb24gcG9wLXVwX190aGlyZF9fc2VjdGlvbl90b3BcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3AtdXBfX2xhYmVsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBDcmVkaXQgQ2FyZCBOdW1iZXI8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhcmQtbnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiXlxcXFxkKyRcIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2lucHV0X2NhcmRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2Vycm9yXCI+SW52YWxpZCBjYXJkIG51bWJlcjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IENWViBOdW1iZXI8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIl5cXFxcZHszLDR9JFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfY3Z2XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvclwiPkludmFsaWQgQ1ZWPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX190aGlyZF9fc2VjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2xhYmVsXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBFeHBpcmF0aW9uIERhdGU8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXQgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfbW9udGhcIj5Nb250aDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvdyBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd19tb250aFwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi4vaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi4vaWNvbi5zdmcjYXJyb3ctdG9wXCI+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b20gcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV9tb250aCBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIuL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3QgcG9wLXVwX19zZWxlY3RfX2xpc3RfbW9udGggaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGxpPkphbnVhcnk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5GZWJydWFyeTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk1hcmNoPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+QXByaWw8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5NYXk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5KdW5lPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+SnVseTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkF1Z3VzdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlNlcHRlbWJlcjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk9jdG9iZXI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Ob3ZlbWJlcjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkRlY2VtYmVyPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2xhYmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXIgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl95ZWFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0X3llYXJcIj5ZZWFyPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X3llYXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIuL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3AgcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF95ZWFyIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi4vaWNvbi5zdmcjYXJyb3ctdG9wXCI+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b20gcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV95ZWFyIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi4vaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdCBwb3AtdXBfX3NlbGVjdF9fbGlzdF95ZWFyIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxsaT4yMDI2PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAyNzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMjg8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDI5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzMDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDMyPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzMzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDM1PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzNjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gLFxuICB9LFxuXVxuXG5sZXQgc3RlcCA9IDFcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcbmNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZCcpXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvbmF0ZS1wb3AtdXAnKVxuXG5mb3IgKGxldCBidXR0b24gb2YgYnV0dG9ucykge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKVxuICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuICAgIGJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgYGFmdGVyYmVnaW5gLFxuICAgICAgYDxkaXYgY2xhc3M9XCJwb3AtdXBcIj5cbiAgPGRpdiBjbGFzcz1cInBvcC11cF9faGVhZGVyXCI+XG4gICAgPGgyIGNsYXNzPVwicG9wLXVwX190aXRsZVwiPm1ha2UgeW91ciBkb25hdGlvbjwvaDI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicG9wLXVwX19pbmZvcm1hdGlvblwiPlxuICAgIDxwIGNsYXNzPVwicG9wLXVwX19pbmZvcm1hdGlvbl9fdGV4dFwiPlBheW1lbnQgSW5mb3JtYXRpb246PC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBvcC11cF9fYm90dG9tXCI+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cF9fZHluYW1pY1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2J1dHRvbnNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2J1dHRvbnNfX3RvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19wb2ludHNcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fcG9pbnRzX19pdGVtXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19wb2ludHNfX2l0ZW1cIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX3BvaW50c19faXRlbVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2JhY2sgaGlkZGVuXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2JhY2tfX3RleHRcIj5CYWNrPC9zcGFuPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIyXCIgdmlld0JveD1cIjAgMCAyNSAyMlwiPlxuICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93XCIgY2xhc3M9XCJwb3AtdXBfX2JhY2tfX3N2Z1wiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fbmV4dFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbmV4dF9fdGV4dFwiPm5leHQ8L3NwYW4+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIyXCIgdmlld0JveD1cIjAgMCAyNSAyMlwiPlxuICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvd1wiIGNsYXNzPVwicG9wLXVwX19uZXh0X19zdmdcIj48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2NvbXBsZXRlIGhpZGRlblwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY29tcGxldGVfX3RleHRcIj5jb21wbGV0ZSBkb25hdGlvbjwvc3Bhbj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAwIDI1IDIyXCI+XG4gICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93XCIgY2xhc3M9XCJwb3AtdXBfX2NvbXBsZXRlX19zdmdcIj48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gXG4gICAgKVxuXG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwJylcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fbmV4dCcpXG4gICAgY29uc3QgYmFja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX2JhY2snKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fY29tcGxldGUnKVxuICAgIGNvbnN0IGR5bmFtaWNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19keW5hbWljJylcbiAgICBjb25zdCBpbmZvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0JylcbiAgICBjb25zdCBwb2ludHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19wb2ludHMnKVxuICAgIGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9faW5mb3JtYXRpb25fX3RleHQnKVxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19pbmZvcm1hdGlvbicpXG5cbiAgICBmdW5jdGlvbiBjaGFuZ1RleHQoKSB7XG4gICAgICBpbmZvcm1hdGlvbi50ZXh0Q29udGVudCA9IGAke3BvcFVwRGF0YVtzdGVwIC0gMV0uaW5mb30gSW5mb3JtYXRpb246YFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBkeW5hbWljQ29udGFpbmVyLmNoaWxkcmVuKSB7XG4gICAgICAgIGNoaWxkLnJlbW92ZSgpXG4gICAgICB9XG4gICAgICBkeW5hbWljQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChgYWZ0ZXJiZWdpbmAsIHBvcFVwRGF0YVtzdGVwIC0gMV0uaHRtbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWxsUG9pbnRzKCkge1xuICAgICAgO1suLi5wb2ludHNDb250YWluZXIuY2hpbGRyZW5dLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xuICAgICAgICBpbmRleCA8PSBzdGVwIC0gMSA/IHBvaW50LmNsYXNzTGlzdC5hZGQoJ2ZpbGwnKSA6IHBvaW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbGwnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZVBvcFVwKCkge1xuICAgICAgcG9wVXAucmVtb3ZlKClcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJylcbiAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeEluZm9UZXh0KCkge1xuICAgICAgaW5mb1RleHQuY2xhc3NMaXN0LnJlbW92ZSgncG9wLXVwX19pbmZvcm1hdGlvbl9fdGV4dF9zZWNvbmQnKVxuICAgICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwb3AtdXBfX2luZm9ybWF0aW9uX3RoaXJkJylcbiAgICAgIGlmIChzdGVwID09PSAyKSB7XG4gICAgICAgIGluZm9UZXh0LmNsYXNzTGlzdC5hZGQoJ3BvcC11cF9faW5mb3JtYXRpb25fX3RleHRfc2Vjb25kJylcbiAgICAgIH1cbiAgICAgIGlmIChzdGVwID09PSAzKSB7XG4gICAgICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wLXVwX19pbmZvcm1hdGlvbl90aGlyZCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9kYWxzTG9naWMoKSB7XG4gICAgICBpZiAoc3RlcCA9PT0gMSkge1xuICAgICAgICBjb25zdCBzZWxlY3RMaXN0RmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfZmF2b3JpdGUnKVxuICAgICAgICBjb25zdCBhcnJvd0J1dHRvbkZhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X2Zhdm9yaXRlJylcbiAgICAgICAgY29uc3QgaW5wdXRGYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dF9mYXZvcml0ZScpXG4gICAgICAgIGNvbnN0IHRvcEFycm93RmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF9mYXZvcml0ZScpXG4gICAgICAgIGNvbnN0IGJvdHRvbUFycm93RmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV9mYXZvcml0ZScpXG5cbiAgICAgICAgYXJyb3dCdXR0b25GYXZvcml0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBzZWxlY3RMaXN0RmF2b3JpdGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICB0b3BBcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgYm90dG9tQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICB9KVxuXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHNlbGVjdExpc3RGYXZvcml0ZS5jaGlsZHJlbikge1xuICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXRGYXZvcml0ZS50ZXh0Q29udGVudCA9IGNoaWxkLnRleHRDb250ZW50XG4gICAgICAgICAgICBzZWxlY3RMaXN0RmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIHRvcEFycm93RmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIGJvdHRvbUFycm93RmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGFycm93QnV0dG9uRmF2b3JpdGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgcmV0dXJuXG4gICAgICAgICAgc2VsZWN0TGlzdEZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgdG9wQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIGJvdHRvbUFycm93RmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoc3RlcCA9PT0gMykge1xuICAgICAgICBjb25zdCBzZWxlY3RMaXN0TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfbW9udGgnKVxuICAgICAgICBjb25zdCBzZWxlY3RMaXN0WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF95ZWFyJylcbiAgICAgICAgY29uc3QgYXJyb3dCdXR0b25Nb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd19tb250aCcpXG4gICAgICAgIGNvbnN0IGFycm93QnV0dG9uWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd195ZWFyJylcbiAgICAgICAgY29uc3QgaW5wdXRNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dF9tb250aCcpXG4gICAgICAgIGNvbnN0IGlucHV0WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dF95ZWFyJylcbiAgICAgICAgY29uc3QgdG9wQXJyb3dNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX21vbnRoJylcbiAgICAgICAgY29uc3QgYm90dG9tQXJyb3dNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX21vbnRoJylcbiAgICAgICAgY29uc3QgdG9wQXJyb3dZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfeWVhcicpXG4gICAgICAgIGNvbnN0IGJvdHRvbUFycm93WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX3llYXInKVxuXG4gICAgICAgIGFycm93QnV0dG9uTW9udGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgc2VsZWN0TGlzdE1vbnRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgdG9wQXJyb3dNb250aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgIGJvdHRvbUFycm93TW9udGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgfSlcblxuICAgICAgICBhcnJvd0J1dHRvblllYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgc2VsZWN0TGlzdFllYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICB0b3BBcnJvd1llYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICBib3R0b21BcnJvd1llYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgfSlcblxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBzZWxlY3RMaXN0TW9udGguY2hpbGRyZW4pIHtcbiAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlucHV0TW9udGgudGV4dENvbnRlbnQgPSBjaGlsZC50ZXh0Q29udGVudFxuICAgICAgICAgICAgc2VsZWN0TGlzdE1vbnRoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICB0b3BBcnJvd01vbnRoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICBib3R0b21BcnJvd01vbnRoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHNlbGVjdExpc3RZZWFyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dFllYXIudGV4dENvbnRlbnQgPSBjaGlsZC50ZXh0Q29udGVudFxuICAgICAgICAgICAgc2VsZWN0TGlzdFllYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIHRvcEFycm93WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgYm90dG9tQXJyb3dZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBwb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChhcnJvd0J1dHRvbk1vbnRoLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHwgYXJyb3dCdXR0b25ZZWFyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHJldHVyblxuICAgICAgICAgIHNlbGVjdExpc3RNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIHRvcEFycm93TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICBib3R0b21BcnJvd01vbnRoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgc2VsZWN0TGlzdFllYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICB0b3BBcnJvd1llYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICBib3R0b21BcnJvd1llYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ1RleHQoKVxuICAgIHJlbmRlckNvbnRlbnQoKVxuICAgIGZpbGxQb2ludHMoKVxuICAgIGZpeEluZm9UZXh0KClcbiAgICBtb2RhbHNMb2dpYygpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKVxuICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzdGVwICs9IDFcbiAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIGNoYW5nVGV4dCgpXG4gICAgICByZW5kZXJDb250ZW50KClcbiAgICAgIGZpbGxQb2ludHMoKVxuICAgICAgZml4SW5mb1RleHQoKVxuICAgICAgbW9kYWxzTG9naWMoKVxuICAgICAgaWYgKHN0ZXAgPT09IDMpIHtcbiAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICBjb21wbGV0ZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc3RlcCAtPSAxXG4gICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICBjb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgY2hhbmdUZXh0KClcbiAgICAgIHJlbmRlckNvbnRlbnQoKVxuICAgICAgZmlsbFBvaW50cygpXG4gICAgICBmaXhJbmZvVGV4dCgpXG4gICAgICBtb2RhbHNMb2dpYygpXG4gICAgICBpZiAoc3RlcCA9PT0gMSkge1xuICAgICAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY2xvc2VQb3BVcCgpXG4gICAgICBzdGVwID0gMVxuICAgIH0pXG5cbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gY2xvc2VQb3BVcExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoKHBvcFVwLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWNvbXBsZXRlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHx8IGJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjbG9zZVBvcFVwKClcbiAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcFVwTGlzdGVuZXIpXG4gICAgfSlcbiAgfSlcbn1cbiIsImFzeW5jIGZ1bmN0aW9uIGZldGNoQW5pbWFscygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnLi9hbmltYWxzLmpzb24nKVxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHpvb3MoYW5pbWFsTmFtZSA9ICdnb3JpbGxhJykge1xuICBjb25zdCBhbGxBbmltYWxzID0gYXdhaXQgZmV0Y2hBbmltYWxzKClcbiAgbGV0IGFuaW1hbCA9IGFsbEFuaW1hbHMuZmluZCgoeCkgPT4geC5hbmltYWwgPT09IGFuaW1hbE5hbWUpXG4gIGlmICghYW5pbWFsKSB7XG4gICAgYW5pbWFsID0gYWxsQW5pbWFsc1swXVxuICB9XG5cbiAgY29uc3QgdG9wVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhX190b3BfX3RpdGxlJylcbiAgdG9wVGl0bGUudGV4dENvbnRlbnQgPSBhbmltYWwudGl0bGVcbiAgY29uc3Qga25vd1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua25vd19faW5mb19fdGV4dCcpXG4gIGtub3dUZXh0LnRleHRDb250ZW50ID0gYW5pbWFsLmtub3dcbiAgY29uc3QgY29tbW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tb25OYW1lJylcbiAgY29tbW9uTmFtZS50ZXh0Q29udGVudCA9IGFuaW1hbC5jb21tb25OYW1lXG4gIGNvbnN0IHNjaWVudGlmaWNOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjaWVudGlmaWNOYW1lJylcbiAgc2NpZW50aWZpY05hbWUudGV4dENvbnRlbnQgPSBhbmltYWwuc2NpZW50aWZpY05hbWVcbiAgY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50eXBlJylcbiAgdHlwZS50ZXh0Q29udGVudCA9IGFuaW1hbC50eXBlXG4gIGNvbnN0IHNpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l6ZScpXG4gIHNpemUudGV4dENvbnRlbnQgPSBhbmltYWwuc2l6ZVxuICBjb25zdCBkaWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpZXQnKVxuICBkaWV0LnRleHRDb250ZW50ID0gYW5pbWFsLmRpZXRcbiAgY29uc3QgaGFiaXRhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYWJpdGF0JylcbiAgaGFiaXRhdC50ZXh0Q29udGVudCA9IGFuaW1hbC5oYWJpdGF0XG4gIGxldCByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZScpXG4gIHJhbmdlLnRleHRDb250ZW50ID0gYW5pbWFsLnJhbmdlXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtub3dfX2ltYWdlX19pbWcnKVxuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuL2ltYWdlcy8ke2FuaW1hbC5hbmltYWx9X1BhZ2UucG5nYClcbiAgY29uc3Qga25vd0xhcmdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbm93X190ZXh0JylcbiAga25vd0xhcmdlVGV4dC50ZXh0Q29udGVudCA9IGFuaW1hbC50ZXh0XG4gIGNvbnN0IGRvbmF0aW9uVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhX19kb25hdGlvbl9fdGV4dC1pbmZvX190aXRsZScpXG4gIGRvbmF0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBhbmltYWwuZG9uYXRpb25UaXRsZVxuICBjb25zdCBkb25hdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhX19kb25hdGlvbl9fdGV4dC1pbmZvX190ZXh0JylcbiAgZG9uYXRpb25UZXh0LnRleHRDb250ZW50ID0gYW5pbWFsLmRvbmF0aW9uVGV4dFxuXG4gIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhbmVsJylcbiAgY29uc3QgdG9wUGFuZWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhbmVsX190b3AnKVxuICBjb25zdCBib3R0b21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFuZWxfX2JvdHRvbScpXG4gIGxldCBzdGVwID0gMFxuICBjb25zdCBhbmltYWxzRm9yUGFuZWwgPSBhbGxBbmltYWxzXG4gICAgLnNvcnQoKGIsIGMpID0+IHtcbiAgICAgIGlmIChiLmFuaW1hbCA9PT0gYW5pbWFsLmFuaW1hbCkgcmV0dXJuIC0xXG4gICAgICBpZiAoYy5hbmltYWwgPT09IGFuaW1hbC5hbmltYWwpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH0pXG4gICAgLm1hcCgoYW5pbWFsUGFuZWwpID0+IHRyYW5zZm9ybUFuaW1hbEZvclBhbmVsKGFuaW1hbFBhbmVsLCBhbmltYWxQYW5lbC5hbmltYWwgPT09IGFuaW1hbC5hbmltYWwpKVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBhbmVsKCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsX19hbmltYWwnKVxuICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZC5yZW1vdmUoKVxuICAgIH1cbiAgICBjb25zdCBjaXJjbGVzSHRtbCA9IGFuaW1hbHNGb3JQYW5lbC5zbGljZShzdGVwLCBzdGVwICsgNClcbiAgICB0b3BQYW5lbEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGNpcmNsZXNIdG1sLmpvaW4oJycpKVxuXG4gICAgc3RlcCArPSA0XG4gICAgaWYgKHN0ZXAgPiA0KSB7XG4gICAgICBzdGVwID0gMFxuICAgIH1cbiAgICBjb25zdCBjaXJjbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsX19hbmltYWxfX2NpcmNsZScpXG4gICAgZm9yIChsZXQgY2lyY2xlIG9mIGNpcmNsZXMpIHtcbiAgICAgIGxldCBjbGFzc2VzID0gQXJyYXkuZnJvbShjaXJjbGUuY2xhc3NMaXN0KVxuICAgICAgY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB6b29zKGNsYXNzZXNbMV0pXG4gICAgICAgIGNsb3NlUGFuZWwoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXJQYW5lbCgpXG4gIGJvdHRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW5kZXJQYW5lbCgpXG4gICAgY2xvc2VQYW5lbCgpXG4gIH0pXG5cbiAgY29uc3Qgb3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLWJ1dHRvbicpXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpXG4gIGNvbnN0IGJhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFuZWxfX2JhZ2UnKVxuICBvcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBhbmVsLnNldEF0dHJpYnV0ZSgncGFuZWwtb3BlbicsICd0cnVlJylcbiAgICBvcGVuQnV0dG9uLnNldEF0dHJpYnV0ZSgncGFuZWwtb3BlbicsICd0cnVlJylcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3BhbmVsLW9wZW4nLCAndHJ1ZScpXG4gICAgYmFnZS5zZXRBdHRyaWJ1dGUoJ3BhbmVsLW9wZW4nLCAndHJ1ZScpXG4gICAgZm9yIChjb25zdCBhbmltYWwgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsX19hbmltYWwnKSkge1xuICAgICAgYW5pbWFsLnNldEF0dHJpYnV0ZSgncGFuZWwtb3BlbicsICd0cnVlJylcbiAgICB9XG4gIH0pXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VQYW5lbCgpKVxuXG4gIGZ1bmN0aW9uIGNsb3NlUGFuZWwoKSB7XG4gICAgcGFuZWwucmVtb3ZlQXR0cmlidXRlKCdwYW5lbC1vcGVuJylcbiAgICBvcGVuQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgncGFuZWwtb3BlbicpXG4gICAgY2xvc2VCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdwYW5lbC1vcGVuJylcbiAgICBiYWdlLnJlbW92ZUF0dHJpYnV0ZSgncGFuZWwtb3BlbicpXG4gICAgZm9yIChjb25zdCBhbmltYWwgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsX19hbmltYWwnKSkge1xuICAgICAgYW5pbWFsLnJlbW92ZUF0dHJpYnV0ZSgncGFuZWwtb3BlbicpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUFuaW1hbEZvclBhbmVsKGFuaW1hbCwgYWN0aXZlID0gZmFsc2UpIHtcbiAgcmV0dXJuIGFjdGl2ZVxuICAgID8gYDxkaXYgY2xhc3M9XCJwYW5lbF9fYW5pbWFsIGFjdGl2ZVwiPjxzdmcgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIxMjBcIiB2aWV3Qm94PVwiMCAwIDEyMCAxMjBcIiBjbGFzcz1cInBhbmVsX19hbmltYWxfX2JvcmRlclwiPjx1c2UgaHJlZj1cIi4vaWNvbi5zdmcjY2lyY2xlXCI+PC91c2U+PC9zdmc+PGRpdiBjbGFzcz1cInBhbmVsX19hbmltYWxfX2NpcmNsZSAke2FuaW1hbC5hbmltYWx9XCI+JHthbmltYWwuc3ZnfTwvZGl2PjxwIGNsYXNzPVwicGFuZWxfX2FuaW1hbF9fdGV4dFwiPiR7YW5pbWFsLnN2Z1RleHR9PC9wPjwvZGl2PmBcbiAgICA6IGA8ZGl2IGNsYXNzPVwicGFuZWxfX2FuaW1hbFwiPjxzdmcgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIxMjBcIiB2aWV3Qm94PVwiMCAwIDEyMCAxMjBcIiBjbGFzcz1cInBhbmVsX19hbmltYWxfX2JvcmRlclwiPjx1c2UgaHJlZj1cIi4vaWNvbi5zdmcjY2lyY2xlXCI+PC91c2U+PC9zdmc+PGRpdiBjbGFzcz1cInBhbmVsX19hbmltYWxfX2NpcmNsZSAke2FuaW1hbC5hbmltYWx9XCI+JHthbmltYWwuc3ZnfTwvZGl2PjxwIGNsYXNzPVwicGFuZWxfX2FuaW1hbF9fdGV4dFwiPiR7YW5pbWFsLnN2Z1RleHR9PC9wPjwvZGl2PmBcbn1cbiJdLCJuYW1lcyI6WyJzdGVwIiwiYW5pbWFsIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFlBQVk7QUFBQSxFQUNoQjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXNEVjtBQUFBLEVBQ0U7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLGlCQUFpQjtBQUFBLElBQ2pCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBMEJWO0FBQUEsRUFDRTtBQUFBLElBQ0UsTUFBTTtBQUFBLElB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
