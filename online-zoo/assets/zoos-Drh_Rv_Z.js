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
                    <use href="/icon.svg#arrow-bottom"></use>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vcy1EcmhfUnZfWi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZlYXR1cmVzL3BvcC11cC5qcyIsIi4uLy4uL3NyYy9mZWF0dXJlcy96b29zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvcFVwRGF0YSA9IFtcbiAge1xuICAgIGluZm86ICdEb25hdGlvbicsXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gQ2hvb3NlIHlvdXIgZG9uYXRpb24gYW1vdW50OjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kMTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQyMDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDMwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kNTA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQ4MDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDEwMDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9wLXVwX19maXJzdF9fb3RoZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fb3RoZXJfX2J1dHRvblwiPk90aGVyIGFtb3VudDwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbW91bnRcIiBwYXR0ZXJuPVwiXlswLTkuLF0rJFwiIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2ZpcnN0X19vdGhlcl9faW5wdXRcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvciBwb3AtdXBfX2ZpcnN0X19vdGhlcl9fZXJyb3JcIj5JbnZhbGlkIG51bWJlcjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX3NwZWNpYWxcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fc3BlY2lhbF9fYnV0dG9uXCI+Zm9yIHNwZWNpYWwgcGV0PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXQgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfZmF2b3JpdGVcIj5DaG9vc2UgeW91ciBmYXZvdXJpdGU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X2Zhdm9yaXRlXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCI+XG4gICAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIuL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCIgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wIHBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfZmF2b3JpdGUgaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi4vaWNvbi5zdmcjYXJyb3ctdG9wXCI+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbSBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX2Zhdm9yaXRlIGhpZGRlblwiPlxuICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIuL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9mYXZvcml0ZSBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGxpPkx1a2FzIHRoZSBQYW5kYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5BbmR5IHRoZSBMZW11cjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5HbGVuIHRoZSBHb3JpbGxhPC9saT5cbiAgICAgICAgICAgICAgPGxpPk1pa2UgdGhlIEFsbGlnYXRvcjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TYW0gJiBMb3JhIHRoZSBlYWdsZXMgZmFtaWx5PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+TGl6IHRoZSBLb2FsYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TaGFrZSB0aGUgTGlvbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5TZW5qYSB0aGUgVGlnZXI8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2dpZnRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdpZnRcIiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX3N0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX2NvbnRyb2xcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fY2hlY2tib3hfX3RpdGxlXCI+TWFrZSB0aGlzIGEgbW9udGhseSByZWN1cnJpbmcgZ2lmdDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5gLFxuICB9LFxuICB7XG4gICAgaW5mbzogJ0JpbGxpbmcnLFxuICAgIGFkZGl0aW9uYWxDbGFzczogJ3BvcC11cF9faW5mb3JtYXRpb25fX3RleHRfc2Vjb25kJyxcbiAgICBodG1sOiBgPGRpdiBjbGFzcz1cInBvcC11cF9fc2Vjb25kXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBZb3VyIE5hbWU8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcGF0dGVybj1cIl5bQS1aYS16XSpbQS1aYS16IF0qW0EtWmEtel0kXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBhbmQgbGFzdCBuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfc2Vjb25kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2Vycm9yXCI+SW52YWxpZCBuYW1lPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3AtdXBfX2xhYmVsXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRcIj48c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gWW91ciBFbWFpbCBBZGRyZXNzIDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzcz1cInBvcC11cF9faW5wdXQgcG9wLXVwX19pbnB1dF9zZWNvbmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fZXJyb3IgcG9wLXVwX19lcnJvcl9lbWFpbFwiPkludmFsaWQgZW1haWw8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHQgcG9wLXVwX19sYWJlbF90ZXh0X25vdGVcIj5Zb3Ugd2lsbCByZWNlaXZlIGVtYWlscyBmcm9tIHRoZSBPbmxpbmUgWm9vLCBpbmNsdWRpbmcgdXBkYXRlcyBhbmQgbmV3cyBvbiB0aGUgbGF0ZXN0IGRpc2NvdmVyaWVzIGFuZCB0cmFuc2xhdGlvbnMuIFlvdSBjYW4gdW5zdWJzY3JpYmUgYXQgYW55IHRpbWUuPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+YCxcbiAgfSxcbiAge1xuICAgIGluZm86ICdQYXltZW50JyxcbiAgICBhZGRpdGlvbmFsQ2xhc3M6ICdwb3AtdXBfX2luZm9ybWF0aW9uX3RoaXJkJyxcbiAgICBodG1sOiBgPGRpdiBjbGFzcz1cInBvcC11cF9fdGhpcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fdGhpcmRfX3NlY3Rpb24gcG9wLXVwX190aGlyZF9fc2VjdGlvbl90b3BcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3AtdXBfX2xhYmVsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBDcmVkaXQgQ2FyZCBOdW1iZXI8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhcmQtbnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiXlxcXFxkKyRcIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2lucHV0X2NhcmRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2Vycm9yXCI+SW52YWxpZCBjYXJkIG51bWJlcjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IENWViBOdW1iZXI8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIl5cXFxcZHszLDR9JFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb3AtdXBfX2lucHV0IHBvcC11cF9faW5wdXRfY3Z2XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvclwiPkludmFsaWQgQ1ZWPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX190aGlyZF9fc2VjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2xhYmVsXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBFeHBpcmF0aW9uIERhdGU8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXQgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfbW9udGhcIj5Nb250aDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvdyBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd19tb250aFwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy1ib3R0b21cIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCIgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wIHBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfbW9udGggaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiLi9pY29uLnN2ZyNhcnJvdy10b3BcIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbSBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX21vbnRoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi4vaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9tb250aCBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8bGk+SmFudWFyeTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkZlYnJ1YXJ5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TWFyY2g8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5BcHJpbDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk1heTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkp1bmU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5KdWx5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+QXVndXN0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+U2VwdGVtYmVyPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+T2N0b2JlcjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk5vdmVtYmVyPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+RGVjZW1iZXI8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlciBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX3llYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXQgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfeWVhclwiPlllYXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3cgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfeWVhclwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi4vaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX3llYXIgaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiLi9pY29uLnN2ZyNhcnJvdy10b3BcIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbSBwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX3llYXIgaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiLi9pY29uLnN2ZyNhcnJvdy1ib3R0b21cIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0IHBvcC11cF9fc2VsZWN0X19saXN0X3llYXIgaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGxpPjIwMjY8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDI3PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAyODwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMjk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDMwPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzMTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDMzPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzNDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDM2PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmAsXG4gIH0sXG5dXG5cbmxldCBzdGVwID0gMVxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kJylcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9uYXRlLXBvcC11cCcpXG5cbmZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpXG4gICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBgYWZ0ZXJiZWdpbmAsXG4gICAgICBgPGRpdiBjbGFzcz1cInBvcC11cFwiPlxuICA8ZGl2IGNsYXNzPVwicG9wLXVwX19oZWFkZXJcIj5cbiAgICA8aDIgY2xhc3M9XCJwb3AtdXBfX3RpdGxlXCI+bWFrZSB5b3VyIGRvbmF0aW9uPC9oMj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2luZm9ybWF0aW9uXCI+XG4gICAgPHAgY2xhc3M9XCJwb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0XCI+UGF5bWVudCBJbmZvcm1hdGlvbjo8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicG9wLXVwX19ib3R0b21cIj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19keW5hbWljXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvcC11cF9fYnV0dG9uc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fYnV0dG9uc19fdG9wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3BvaW50c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19wb2ludHNfX2l0ZW1cIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX3BvaW50c19faXRlbVwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fcG9pbnRzX19pdGVtXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fYmFjayBoaWRkZW5cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fYmFja19fdGV4dFwiPkJhY2s8L3NwYW4+XG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAwIDI1IDIyXCI+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3dcIiBjbGFzcz1cInBvcC11cF9fYmFja19fc3ZnXCI+PC91c2U+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19uZXh0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19uZXh0X190ZXh0XCI+bmV4dDwvc3Bhbj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAwIDI1IDIyXCI+XG4gICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93XCIgY2xhc3M9XCJwb3AtdXBfX25leHRfX3N2Z1wiPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fY29tcGxldGUgaGlkZGVuXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19jb21wbGV0ZV9fdGV4dFwiPmNvbXBsZXRlIGRvbmF0aW9uPC9zcGFuPlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjUgMjJcIj5cbiAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3dcIiBjbGFzcz1cInBvcC11cF9fY29tcGxldGVfX3N2Z1wiPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmBcbiAgICApXG5cbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXAnKVxuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19uZXh0JylcbiAgICBjb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fYmFjaycpXG4gICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19jb21wbGV0ZScpXG4gICAgY29uc3QgZHluYW1pY0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX2R5bmFtaWMnKVxuICAgIGNvbnN0IGluZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9faW5mb3JtYXRpb25fX3RleHQnKVxuICAgIGNvbnN0IHBvaW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3BvaW50cycpXG4gICAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19pbmZvcm1hdGlvbl9fdGV4dCcpXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX2luZm9ybWF0aW9uJylcblxuICAgIGZ1bmN0aW9uIGNoYW5nVGV4dCgpIHtcbiAgICAgIGluZm9ybWF0aW9uLnRleHRDb250ZW50ID0gYCR7cG9wVXBEYXRhW3N0ZXAgLSAxXS5pbmZvfSBJbmZvcm1hdGlvbjpgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIGR5bmFtaWNDb250YWluZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGQucmVtb3ZlKClcbiAgICAgIH1cbiAgICAgIGR5bmFtaWNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKGBhZnRlcmJlZ2luYCwgcG9wVXBEYXRhW3N0ZXAgLSAxXS5odG1sKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbGxQb2ludHMoKSB7XG4gICAgICA7Wy4uLnBvaW50c0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGluZGV4IDw9IHN0ZXAgLSAxID8gcG9pbnQuY2xhc3NMaXN0LmFkZCgnZmlsbCcpIDogcG9pbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmlsbCcpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlUG9wVXAoKSB7XG4gICAgICBwb3BVcC5yZW1vdmUoKVxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKVxuICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZml4SW5mb1RleHQoKSB7XG4gICAgICBpbmZvVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdwb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0X3NlY29uZCcpXG4gICAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcC11cF9faW5mb3JtYXRpb25fdGhpcmQnKVxuICAgICAgaWYgKHN0ZXAgPT09IDIpIHtcbiAgICAgICAgaW5mb1RleHQuY2xhc3NMaXN0LmFkZCgncG9wLXVwX19pbmZvcm1hdGlvbl9fdGV4dF9zZWNvbmQnKVxuICAgICAgfVxuICAgICAgaWYgKHN0ZXAgPT09IDMpIHtcbiAgICAgICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwb3AtdXBfX2luZm9ybWF0aW9uX3RoaXJkJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb2RhbHNMb2dpYygpIHtcbiAgICAgIGlmIChzdGVwID09PSAxKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3RGYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9mYXZvcml0ZScpXG4gICAgICAgIGNvbnN0IGFycm93QnV0dG9uRmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfZmF2b3JpdGUnKVxuICAgICAgICBjb25zdCBpbnB1dEZhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0X2Zhdm9yaXRlJylcbiAgICAgICAgY29uc3QgdG9wQXJyb3dGYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX2Zhdm9yaXRlJylcbiAgICAgICAgY29uc3QgYm90dG9tQXJyb3dGYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX2Zhdm9yaXRlJylcblxuICAgICAgICBhcnJvd0J1dHRvbkZhdm9yaXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHNlbGVjdExpc3RGYXZvcml0ZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgIHRvcEFycm93RmF2b3JpdGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICBib3R0b21BcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygc2VsZWN0TGlzdEZhdm9yaXRlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dEZhdm9yaXRlLnRleHRDb250ZW50ID0gY2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgICAgIHNlbGVjdExpc3RGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgdG9wQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgYm90dG9tQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcG9wVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoYXJyb3dCdXR0b25GYXZvcml0ZS5jb250YWlucyhldmVudC50YXJnZXQpKSByZXR1cm5cbiAgICAgICAgICBzZWxlY3RMaXN0RmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICB0b3BBcnJvd0Zhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgYm90dG9tQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChzdGVwID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3RNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9tb250aCcpXG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3RZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X3llYXInKVxuICAgICAgICBjb25zdCBhcnJvd0J1dHRvbk1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X21vbnRoJylcbiAgICAgICAgY29uc3QgYXJyb3dCdXR0b25ZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X3llYXInKVxuICAgICAgICBjb25zdCBpbnB1dE1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0X21vbnRoJylcbiAgICAgICAgY29uc3QgaW5wdXRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0X3llYXInKVxuICAgICAgICBjb25zdCB0b3BBcnJvd01vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfbW9udGgnKVxuICAgICAgICBjb25zdCBib3R0b21BcnJvd01vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b21fbW9udGgnKVxuICAgICAgICBjb25zdCB0b3BBcnJvd1llYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF95ZWFyJylcbiAgICAgICAgY29uc3QgYm90dG9tQXJyb3dZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b21feWVhcicpXG5cbiAgICAgICAgYXJyb3dCdXR0b25Nb250aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBzZWxlY3RMaXN0TW9udGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICB0b3BBcnJvd01vbnRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgYm90dG9tQXJyb3dNb250aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICB9KVxuXG4gICAgICAgIGFycm93QnV0dG9uWWVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBzZWxlY3RMaXN0WWVhci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgIHRvcEFycm93WWVhci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgIGJvdHRvbUFycm93WWVhci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICB9KVxuXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHNlbGVjdExpc3RNb250aC5jaGlsZHJlbikge1xuICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXRNb250aC50ZXh0Q29udGVudCA9IGNoaWxkLnRleHRDb250ZW50XG4gICAgICAgICAgICBzZWxlY3RMaXN0TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIHRvcEFycm93TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIGJvdHRvbUFycm93TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygc2VsZWN0TGlzdFllYXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlucHV0WWVhci50ZXh0Q29udGVudCA9IGNoaWxkLnRleHRDb250ZW50XG4gICAgICAgICAgICBzZWxlY3RMaXN0WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgdG9wQXJyb3dZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICBib3R0b21BcnJvd1llYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGFycm93QnV0dG9uTW9udGguY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fCBhcnJvd0J1dHRvblllYXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgcmV0dXJuXG4gICAgICAgICAgc2VsZWN0TGlzdE1vbnRoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgdG9wQXJyb3dNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIGJvdHRvbUFycm93TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICBzZWxlY3RMaXN0WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIHRvcEFycm93WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgIGJvdHRvbUFycm93WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nVGV4dCgpXG4gICAgcmVuZGVyQ29udGVudCgpXG4gICAgZmlsbFBvaW50cygpXG4gICAgZml4SW5mb1RleHQoKVxuICAgIG1vZGFsc0xvZ2ljKClcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpXG4gICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHN0ZXAgKz0gMVxuICAgICAgYmFja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgY2hhbmdUZXh0KClcbiAgICAgIHJlbmRlckNvbnRlbnQoKVxuICAgICAgZmlsbFBvaW50cygpXG4gICAgICBmaXhJbmZvVGV4dCgpXG4gICAgICBtb2RhbHNMb2dpYygpXG4gICAgICBpZiAoc3RlcCA9PT0gMykge1xuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIGNvbXBsZXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzdGVwIC09IDFcbiAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIGNvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICBjaGFuZ1RleHQoKVxuICAgICAgcmVuZGVyQ29udGVudCgpXG4gICAgICBmaWxsUG9pbnRzKClcbiAgICAgIGZpeEluZm9UZXh0KClcbiAgICAgIG1vZGFsc0xvZ2ljKClcbiAgICAgIGlmIChzdGVwID09PSAxKSB7XG4gICAgICAgIGJhY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjbG9zZVBvcFVwKClcbiAgICAgIHN0ZXAgPSAxXG4gICAgfSlcblxuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjbG9zZVBvcFVwTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgIGlmICgocG9wVXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhY29tcGxldGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgfHwgYnV0dG9uLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNsb3NlUG9wVXAoKVxuICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wVXBMaXN0ZW5lcilcbiAgICB9KVxuICB9KVxufVxuIiwiYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbmltYWxzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcuL2FuaW1hbHMuanNvbicpXG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gem9vcyhhbmltYWxOYW1lID0gJ2dvcmlsbGEnKSB7XG4gIGNvbnN0IGFsbEFuaW1hbHMgPSBhd2FpdCBmZXRjaEFuaW1hbHMoKVxuICBsZXQgYW5pbWFsID0gYWxsQW5pbWFscy5maW5kKCh4KSA9PiB4LmFuaW1hbCA9PT0gYW5pbWFsTmFtZSlcbiAgaWYgKCFhbmltYWwpIHtcbiAgICBhbmltYWwgPSBhbGxBbmltYWxzWzBdXG4gIH1cblxuICBjb25zdCB0b3BUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmFfX3RvcF9fdGl0bGUnKVxuICB0b3BUaXRsZS50ZXh0Q29udGVudCA9IGFuaW1hbC50aXRsZVxuICBjb25zdCBrbm93VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbm93X19pbmZvX190ZXh0JylcbiAga25vd1RleHQudGV4dENvbnRlbnQgPSBhbmltYWwua25vd1xuICBjb25zdCBjb21tb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1vbk5hbWUnKVxuICBjb21tb25OYW1lLnRleHRDb250ZW50ID0gYW5pbWFsLmNvbW1vbk5hbWVcbiAgY29uc3Qgc2NpZW50aWZpY05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NpZW50aWZpY05hbWUnKVxuICBzY2llbnRpZmljTmFtZS50ZXh0Q29udGVudCA9IGFuaW1hbC5zY2llbnRpZmljTmFtZVxuICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR5cGUnKVxuICB0eXBlLnRleHRDb250ZW50ID0gYW5pbWFsLnR5cGVcbiAgY29uc3Qgc2l6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplJylcbiAgc2l6ZS50ZXh0Q29udGVudCA9IGFuaW1hbC5zaXplXG4gIGNvbnN0IGRpZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlldCcpXG4gIGRpZXQudGV4dENvbnRlbnQgPSBhbmltYWwuZGlldFxuICBjb25zdCBoYWJpdGF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhYml0YXQnKVxuICBoYWJpdGF0LnRleHRDb250ZW50ID0gYW5pbWFsLmhhYml0YXRcbiAgbGV0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlJylcbiAgcmFuZ2UudGV4dENvbnRlbnQgPSBhbmltYWwucmFuZ2VcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua25vd19faW1hZ2VfX2ltZycpXG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vaW1hZ2VzLyR7YW5pbWFsLmFuaW1hbH1fUGFnZS5wbmdgKVxuICBjb25zdCBrbm93TGFyZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtub3dfX3RleHQnKVxuICBrbm93TGFyZ2VUZXh0LnRleHRDb250ZW50ID0gYW5pbWFsLnRleHRcbiAgY29uc3QgZG9uYXRpb25UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmFfX2RvbmF0aW9uX190ZXh0LWluZm9fX3RpdGxlJylcbiAgZG9uYXRpb25UaXRsZS50ZXh0Q29udGVudCA9IGFuaW1hbC5kb25hdGlvblRpdGxlXG4gIGNvbnN0IGRvbmF0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmFfX2RvbmF0aW9uX190ZXh0LWluZm9fX3RleHQnKVxuICBkb25hdGlvblRleHQudGV4dENvbnRlbnQgPSBhbmltYWwuZG9uYXRpb25UZXh0XG5cbiAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFuZWwnKVxuICBjb25zdCB0b3BQYW5lbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFuZWxfX3RvcCcpXG4gIGNvbnN0IGJvdHRvbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW5lbF9fYm90dG9tJylcbiAgbGV0IHN0ZXAgPSAwXG4gIGNvbnN0IGFuaW1hbHNGb3JQYW5lbCA9IGFsbEFuaW1hbHNcbiAgICAuc29ydCgoYiwgYykgPT4ge1xuICAgICAgaWYgKGIuYW5pbWFsID09PSBhbmltYWwuYW5pbWFsKSByZXR1cm4gLTFcbiAgICAgIGlmIChjLmFuaW1hbCA9PT0gYW5pbWFsLmFuaW1hbCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfSlcbiAgICAubWFwKChhbmltYWxQYW5lbCkgPT4gdHJhbnNmb3JtQW5pbWFsRm9yUGFuZWwoYW5pbWFsUGFuZWwsIGFuaW1hbFBhbmVsLmFuaW1hbCA9PT0gYW5pbWFsLmFuaW1hbCkpXG5cbiAgZnVuY3Rpb24gcmVuZGVyUGFuZWwoKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWxfX2FuaW1hbCcpXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkLnJlbW92ZSgpXG4gICAgfVxuICAgIGNvbnN0IGNpcmNsZXNIdG1sID0gYW5pbWFsc0ZvclBhbmVsLnNsaWNlKHN0ZXAsIHN0ZXAgKyA0KVxuICAgIHRvcFBhbmVsRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgY2lyY2xlc0h0bWwuam9pbignJykpXG5cbiAgICBzdGVwICs9IDRcbiAgICBpZiAoc3RlcCA+IDQpIHtcbiAgICAgIHN0ZXAgPSAwXG4gICAgfVxuICAgIGNvbnN0IGNpcmNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWxfX2FuaW1hbF9fY2lyY2xlJylcbiAgICBmb3IgKGxldCBjaXJjbGUgb2YgY2lyY2xlcykge1xuICAgICAgbGV0IGNsYXNzZXMgPSBBcnJheS5mcm9tKGNpcmNsZS5jbGFzc0xpc3QpXG4gICAgICBjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHpvb3MoY2xhc3Nlc1sxXSlcbiAgICAgICAgY2xvc2VQYW5lbCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBhbmVsKClcbiAgYm90dG9tQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbmRlclBhbmVsKClcbiAgICBjbG9zZVBhbmVsKClcbiAgfSlcblxuICBjb25zdCBvcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tYnV0dG9uJylcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJylcbiAgY29uc3QgYmFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW5lbF9fYmFnZScpXG4gIG9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGFuZWwuc2V0QXR0cmlidXRlKCdwYW5lbC1vcGVuJywgJ3RydWUnKVxuICAgIG9wZW5CdXR0b24uc2V0QXR0cmlidXRlKCdwYW5lbC1vcGVuJywgJ3RydWUnKVxuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgncGFuZWwtb3BlbicsICd0cnVlJylcbiAgICBiYWdlLnNldEF0dHJpYnV0ZSgncGFuZWwtb3BlbicsICd0cnVlJylcbiAgICBmb3IgKGNvbnN0IGFuaW1hbCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWxfX2FuaW1hbCcpKSB7XG4gICAgICBhbmltYWwuc2V0QXR0cmlidXRlKCdwYW5lbC1vcGVuJywgJ3RydWUnKVxuICAgIH1cbiAgfSlcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZVBhbmVsKCkpXG5cbiAgZnVuY3Rpb24gY2xvc2VQYW5lbCgpIHtcbiAgICBwYW5lbC5yZW1vdmVBdHRyaWJ1dGUoJ3BhbmVsLW9wZW4nKVxuICAgIG9wZW5CdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdwYW5lbC1vcGVuJylcbiAgICBjbG9zZUJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ3BhbmVsLW9wZW4nKVxuICAgIGJhZ2UucmVtb3ZlQXR0cmlidXRlKCdwYW5lbC1vcGVuJylcbiAgICBmb3IgKGNvbnN0IGFuaW1hbCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWxfX2FuaW1hbCcpKSB7XG4gICAgICBhbmltYWwucmVtb3ZlQXR0cmlidXRlKCdwYW5lbC1vcGVuJylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtQW5pbWFsRm9yUGFuZWwoYW5pbWFsLCBhY3RpdmUgPSBmYWxzZSkge1xuICByZXR1cm4gYWN0aXZlXG4gICAgPyBgPGRpdiBjbGFzcz1cInBhbmVsX19hbmltYWwgYWN0aXZlXCI+PHN2ZyB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiIGNsYXNzPVwicGFuZWxfX2FuaW1hbF9fYm9yZGVyXCI+PHVzZSBocmVmPVwiLi9pY29uLnN2ZyNjaXJjbGVcIj48L3VzZT48L3N2Zz48ZGl2IGNsYXNzPVwicGFuZWxfX2FuaW1hbF9fY2lyY2xlICR7YW5pbWFsLmFuaW1hbH1cIj4ke2FuaW1hbC5zdmd9PC9kaXY+PHAgY2xhc3M9XCJwYW5lbF9fYW5pbWFsX190ZXh0XCI+JHthbmltYWwuc3ZnVGV4dH08L3A+PC9kaXY+YFxuICAgIDogYDxkaXYgY2xhc3M9XCJwYW5lbF9fYW5pbWFsXCI+PHN2ZyB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiIGNsYXNzPVwicGFuZWxfX2FuaW1hbF9fYm9yZGVyXCI+PHVzZSBocmVmPVwiLi9pY29uLnN2ZyNjaXJjbGVcIj48L3VzZT48L3N2Zz48ZGl2IGNsYXNzPVwicGFuZWxfX2FuaW1hbF9fY2lyY2xlICR7YW5pbWFsLmFuaW1hbH1cIj4ke2FuaW1hbC5zdmd9PC9kaXY+PHAgY2xhc3M9XCJwYW5lbF9fYW5pbWFsX190ZXh0XCI+JHthbmltYWwuc3ZnVGV4dH08L3A+PC9kaXY+YFxufVxuIl0sIm5hbWVzIjpbInN0ZXAiLCJhbmltYWwiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sWUFBWTtBQUFBLEVBQ2hCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBc0RWO0FBQUEsRUFDRTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04saUJBQWlCO0FBQUEsSUFDakIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUEwQlY7QUFBQSxFQUNFO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFD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
