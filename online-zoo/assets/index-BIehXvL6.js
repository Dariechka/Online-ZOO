(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const menu = document.querySelector(".header__right-block");
const button$1 = document.querySelector(".header__burger-menu");
const body$2 = document.body;
const links = document.querySelectorAll(".header__navigation_item");
const mql = window.matchMedia("(max-width: 768px)");
mql.addEventListener("change", (e) => {
  if (!e.matches) {
    closeMenu();
  }
});
function closeMenu() {
  menu.removeAttribute("data-open");
  body$2.classList.remove("no-scroll");
  button$1.removeAttribute("data-open");
}
for (const link of links) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    closeMenu();
    setTimeout(() => {
      window.location.href = `${link.getAttribute("href")}`;
    }, 500);
  });
}
button$1.addEventListener("click", function() {
  if (button$1.hasAttribute("data-open")) {
    closeMenu();
  } else {
    menu.setAttribute("data-open", "");
    body$2.classList.add("no-scroll");
    body$2.addEventListener("click", function closeMenuOnBodyClick(event) {
      if (button$1.contains(event.target) || menu.contains(event.target)) {
        return;
      }
      closeMenu();
      removeEventListener("click", closeMenuOnBodyClick);
    });
    setTimeout(() => {
      button$1.setAttribute("data-open", "");
    }, 300);
  }
});
const ribbon = document.querySelector(".slider__ribbon");
const slider = document.querySelector(".slider");
const leftButton = document.querySelector(".slider__button_left");
const rightButton = document.querySelector(".slider__button_right");
leftButton.setAttribute("disabled", "disabled");
async function fetchAnimals() {
  const response = await fetch("./animals.json");
  return await response.json();
}
(async () => {
  const allAnimals = await fetchAnimals();
  const cardsHtml = allAnimals.map(
    (animal) => `<div class="card">
                <div class="card__image">
                  <img class="card__image__img" src="/images/${animal.animal}.png" alt="Animal" />
                </div>
                <div class="card__text-block">
                  <div class="card__text-block__top">
                    <h3 class="card__title">${animal.cardName}</h3>
                    <p class="card__text">${animal.cardText}</p>
                  </div>
                  <button class="card__button">
                    <span class="card__button__text">VIEW LIVE CAM</span>
                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="card__button__svg">
                      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.8777 0.135121C14.6725 0.224325 14.4862 0.355065 14.3293 0.519851C14.1721 0.684221 14.0473 0.879485 13.9622 1.09446C13.877 1.30944 13.8332 1.5399 13.8332 1.77265C13.8332 2.00539 13.877 2.23586 13.9622 2.45083C14.0473 2.66581 14.1721 2.86107 14.3293 3.02544L21.1182 10.1365H1.80205C1.32411 10.1365 0.865757 10.3738 0.527808 10.7963C0.189858 11.2187 0 11.7917 0 12.3891C0 12.9865 0.189858 13.5594 0.527808 13.9819C0.865757 14.4043 1.32411 14.6416 1.80205 14.6416H21.1191L14.3293 21.7536C14.0122 22.0859 13.8341 22.5366 13.8341 23.0064C13.8341 23.4763 14.0122 23.927 14.3293 24.2592C14.6464 24.5915 15.0765 24.7782 15.5249 24.7782C15.9733 24.7782 16.4034 24.5915 16.7205 24.2592L26.8525 13.6423C27.0097 13.478 27.1345 13.2827 27.2196 13.0677C27.3048 12.8528 27.3486 12.6223 27.3486 12.3895C27.3486 12.1568 27.3048 11.9263 27.2196 11.7114C27.1345 11.4964 27.0097 11.3011 26.8525 11.1367L16.7205 0.519851C16.5636 0.355065 16.3773 0.224325 16.1721 0.135121C15.967 0.0459159 15.747 0 15.5249 0C15.3028 0 15.0829 0.0459159 14.8777 0.135121Z"/>
                    </svg>
                  </button>
                </div>
                <div class="card__name">${animal.name}</div>
              </div>`
  ).join("");
  ribbon.insertAdjacentHTML("beforeend", cardsHtml);
  const card = document.querySelector(".card");
  let paddingLeft = parseFloat(getComputedStyle(slider).paddingLeft);
  function calculateCardWidth() {
    return card.getBoundingClientRect().width;
  }
  function calculateRibbonLength() {
    const calculateFunction = (rows, gap) => paddingLeft + allAnimals.length / rows * calculateCardWidth() + (allAnimals.length / rows - 1) * gap;
    if (window.innerWidth > 1500) {
      return calculateFunction(2, 40);
    } else if (window.innerWidth > 960 && window.innerWidth <= 1500) {
      return calculateFunction(2, 20);
    } else if (window.innerWidth > 430 && window.innerWidth <= 960) {
      return calculateFunction(1, 20);
    } else {
      return calculateFunction(1, 10);
    }
  }
  function calcDelta() {
    return calculateRibbonLength() / 6;
  }
  let startX = 0;
  let currentX = 0;
  let shift = 0;
  window.addEventListener("resize", () => {
    ribbon.style.transform = `translateX(0px)`;
    leftButton.setAttribute("disabled", "disabled");
    rightButton.removeAttribute("disabled");
    shift = 0;
    startX = 0;
    currentX = 0;
  });
  rightButton.addEventListener("click", () => {
    shift -= calcDelta();
    leftButton.removeAttribute("disabled");
    ribbon.style.transform = `translateX(${shift}px)`;
    if (calculateRibbonLength() + shift - window.innerWidth <= 80) {
      rightButton.setAttribute("disabled", "disabled");
    }
  });
  leftButton.addEventListener("click", () => {
    rightButton.removeAttribute("disabled");
    shift += calcDelta();
    ribbon.style.transform = `translateX(${shift}px)`;
    if (shift >= 0) {
      leftButton.setAttribute("disabled", "disabled");
    }
  });
  ribbon.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });
  ribbon.addEventListener("touchmove", (e) => {
    currentX = e.touches[0].clientX;
    const delta = currentX - startX;
    let newShift = shift + delta;
    const ribbonWidth = calculateRibbonLength();
    const maxRight = ribbonWidth - window.innerWidth;
    if (Math.abs(newShift) > maxRight - 80) {
      newShift = -(maxRight - 80);
    }
    if (newShift > 0) {
      newShift = 0;
    }
    ribbon.style.transform = `translateX(${newShift}px)`;
  });
  ribbon.addEventListener("touchend", (e) => {
    const delta = e.changedTouches[0].clientX - startX;
    shift += delta;
  });
})();
const body$1 = document.body;
const background$1 = document.querySelector(".background");
const button = document.querySelector(".footer__button");
button.addEventListener("click", () => {
  body$1.classList.add("no-scroll");
  background$1.style.display = "block";
  body$1.insertAdjacentHTML(
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
  );
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".modal__cross");
  function closeModal() {
    modal.remove();
    body$1.classList.remove("no-scroll");
    background$1.style.display = "none";
  }
  closeButton.addEventListener("click", () => closeModal());
  body$1.addEventListener("click", function closeModalListener(event) {
    if (modal.contains(event.target) && !closeButton.contains(event.target) || button.contains(event.target)) {
      return;
    }
    closeModal();
    body$1.removeEventListener("click", closeModalListener);
  });
});
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
for (let button2 of buttons) {
  button2.addEventListener("click", () => {
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
      if (popUp.contains(event.target) && !complete.contains(event.target) || button2.contains(event.target)) {
        return;
      }
      closePopUp();
      body.removeEventListener("click", closePopUpListener);
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtQkllaFh2TDYuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZWF0dXJlcy9idXJnZXItbWVudS5qcyIsIi4uLy4uL3NyYy9mZWF0dXJlcy9zbGlkZXIuanMiLCIuLi8uLi9zcmMvZmVhdHVyZXMvbW9kYWwuanMiLCIuLi8uLi9zcmMvZmVhdHVyZXMvcG9wLXVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19yaWdodC1ibG9jaycpXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXItbWVudScpXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19uYXZpZ2F0aW9uX2l0ZW0nKVxuY29uc3QgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpXG5cbm1xbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICBpZiAoIWUubWF0Y2hlcykge1xuICAgIGNsb3NlTWVudSgpXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcbiAgbWVudS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtb3BlbicpXG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJylcbiAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1vcGVuJylcbn1cblxuZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY2xvc2VNZW51KClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKX1gXG4gICAgfSwgNTAwKVxuICB9KVxufVxuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChidXR0b24uaGFzQXR0cmlidXRlKCdkYXRhLW9wZW4nKSkge1xuICAgIGNsb3NlTWVudSgpXG4gIH0gZWxzZSB7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicsICcnKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsJylcblxuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjbG9zZU1lbnVPbkJvZHlDbGljayhldmVudCkge1xuICAgICAgaWYgKGJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpIHx8IG1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNsb3NlTWVudSgpXG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudU9uQm9keUNsaWNrKVxuICAgIH0pXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicsICcnKVxuICAgIH0sIDMwMClcbiAgfVxufSlcbiIsImNvbnN0IHJpYmJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3JpYmJvbicpXG5jb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyJylcbmNvbnN0IGxlZnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19idXR0b25fbGVmdCcpXG5jb25zdCByaWdodEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2J1dHRvbl9yaWdodCcpXG5cbmxlZnRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQW5pbWFscygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnLi9hbmltYWxzLmpzb24nKVxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG59XG5cbjsoYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxBbmltYWxzID0gYXdhaXQgZmV0Y2hBbmltYWxzKClcblxuICBjb25zdCBjYXJkc0h0bWwgPSBhbGxBbmltYWxzXG4gICAgLm1hcChcbiAgICAgIChhbmltYWwpID0+XG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmRfX2ltYWdlX19pbWdcIiBzcmM9XCIvaW1hZ2VzLyR7YW5pbWFsLmFuaW1hbH0ucG5nXCIgYWx0PVwiQW5pbWFsXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fdGV4dC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX3RleHQtYmxvY2tfX3RvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkX190aXRsZVwiPiR7YW5pbWFsLmNhcmROYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPiR7YW5pbWFsLmNhcmRUZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhcmRfX2J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmRfX2J1dHRvbl9fdGV4dFwiPlZJRVcgTElWRSBDQU08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyOCAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiY2FyZF9fYnV0dG9uX19zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE0Ljg3NzcgMC4xMzUxMjFDMTQuNjcyNSAwLjIyNDMyNSAxNC40ODYyIDAuMzU1MDY1IDE0LjMyOTMgMC41MTk4NTFDMTQuMTcyMSAwLjY4NDIyMSAxNC4wNDczIDAuODc5NDg1IDEzLjk2MjIgMS4wOTQ0NkMxMy44NzcgMS4zMDk0NCAxMy44MzMyIDEuNTM5OSAxMy44MzMyIDEuNzcyNjVDMTMuODMzMiAyLjAwNTM5IDEzLjg3NyAyLjIzNTg2IDEzLjk2MjIgMi40NTA4M0MxNC4wNDczIDIuNjY1ODEgMTQuMTcyMSAyLjg2MTA3IDE0LjMyOTMgMy4wMjU0NEwyMS4xMTgyIDEwLjEzNjVIMS44MDIwNUMxLjMyNDExIDEwLjEzNjUgMC44NjU3NTcgMTAuMzczOCAwLjUyNzgwOCAxMC43OTYzQzAuMTg5ODU4IDExLjIxODcgMCAxMS43OTE3IDAgMTIuMzg5MUMwIDEyLjk4NjUgMC4xODk4NTggMTMuNTU5NCAwLjUyNzgwOCAxMy45ODE5QzAuODY1NzU3IDE0LjQwNDMgMS4zMjQxMSAxNC42NDE2IDEuODAyMDUgMTQuNjQxNkgyMS4xMTkxTDE0LjMyOTMgMjEuNzUzNkMxNC4wMTIyIDIyLjA4NTkgMTMuODM0MSAyMi41MzY2IDEzLjgzNDEgMjMuMDA2NEMxMy44MzQxIDIzLjQ3NjMgMTQuMDEyMiAyMy45MjcgMTQuMzI5MyAyNC4yNTkyQzE0LjY0NjQgMjQuNTkxNSAxNS4wNzY1IDI0Ljc3ODIgMTUuNTI0OSAyNC43NzgyQzE1Ljk3MzMgMjQuNzc4MiAxNi40MDM0IDI0LjU5MTUgMTYuNzIwNSAyNC4yNTkyTDI2Ljg1MjUgMTMuNjQyM0MyNy4wMDk3IDEzLjQ3OCAyNy4xMzQ1IDEzLjI4MjcgMjcuMjE5NiAxMy4wNjc3QzI3LjMwNDggMTIuODUyOCAyNy4zNDg2IDEyLjYyMjMgMjcuMzQ4NiAxMi4zODk1QzI3LjM0ODYgMTIuMTU2OCAyNy4zMDQ4IDExLjkyNjMgMjcuMjE5NiAxMS43MTE0QzI3LjEzNDUgMTEuNDk2NCAyNy4wMDk3IDExLjMwMTEgMjYuODUyNSAxMS4xMzY3TDE2LjcyMDUgMC41MTk4NTFDMTYuNTYzNiAwLjM1NTA2NSAxNi4zNzczIDAuMjI0MzI1IDE2LjE3MjEgMC4xMzUxMjFDMTUuOTY3IDAuMDQ1OTE1OSAxNS43NDcgMCAxNS41MjQ5IDBDMTUuMzAyOCAwIDE1LjA4MjkgMC4wNDU5MTU5IDE0Ljg3NzcgMC4xMzUxMjFaXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19uYW1lXCI+JHthbmltYWwubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+YFxuICAgIClcbiAgICAuam9pbignJylcbiAgcmliYm9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY2FyZHNIdG1sKVxuXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpXG4gIGxldCBwYWRkaW5nTGVmdCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZXIpLnBhZGRpbmdMZWZ0KVxuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZUNhcmRXaWR0aCgpIHtcbiAgICByZXR1cm4gY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICB9XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlUmliYm9uTGVuZ3RoKCkge1xuICAgIGNvbnN0IGNhbGN1bGF0ZUZ1bmN0aW9uID0gKHJvd3MsIGdhcCkgPT5cbiAgICAgIHBhZGRpbmdMZWZ0ICsgKGFsbEFuaW1hbHMubGVuZ3RoIC8gcm93cykgKiBjYWxjdWxhdGVDYXJkV2lkdGgoKSArIChhbGxBbmltYWxzLmxlbmd0aCAvIHJvd3MgLSAxKSAqIGdhcFxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDE1MDApIHtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVGdW5jdGlvbigyLCA0MClcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTYwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDE1MDApIHtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVGdW5jdGlvbigyLCAyMClcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNDMwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDk2MCkge1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZUZ1bmN0aW9uKDEsIDIwKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2FsY3VsYXRlRnVuY3Rpb24oMSwgMTApXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FsY0RlbHRhKCkge1xuICAgIHJldHVybiBjYWxjdWxhdGVSaWJib25MZW5ndGgoKSAvIDZcbiAgfVxuXG4gIGxldCBzdGFydFggPSAwXG4gIGxldCBjdXJyZW50WCA9IDBcbiAgbGV0IHNoaWZ0ID0gMFxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgcmliYm9uLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDBweClgXG4gICAgbGVmdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICByaWdodEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICBzaGlmdCA9IDBcbiAgICBzdGFydFggPSAwXG4gICAgY3VycmVudFggPSAwXG4gIH0pXG5cbiAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hpZnQgLT0gY2FsY0RlbHRhKClcbiAgICBsZWZ0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIHJpYmJvbi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3NoaWZ0fXB4KWBcbiAgICBpZiAoY2FsY3VsYXRlUmliYm9uTGVuZ3RoKCkgKyBzaGlmdCAtIHdpbmRvdy5pbm5lcldpZHRoIDw9IDgwKSB7XG4gICAgICByaWdodEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9XG4gIH0pXG5cbiAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByaWdodEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICBzaGlmdCArPSBjYWxjRGVsdGEoKVxuICAgIHJpYmJvbi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3NoaWZ0fXB4KWBcbiAgICBpZiAoc2hpZnQgPj0gMCkge1xuICAgICAgbGVmdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICB9XG4gIH0pXG5cbiAgcmliYm9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgIHN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYXG4gIH0pXG5cbiAgcmliYm9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgY3VycmVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxuICAgIGNvbnN0IGRlbHRhID0gY3VycmVudFggLSBzdGFydFhcbiAgICBsZXQgbmV3U2hpZnQgPSBzaGlmdCArIGRlbHRhXG4gICAgY29uc3QgcmliYm9uV2lkdGggPSBjYWxjdWxhdGVSaWJib25MZW5ndGgoKVxuICAgIGNvbnN0IG1heFJpZ2h0ID0gcmliYm9uV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgaWYgKE1hdGguYWJzKG5ld1NoaWZ0KSA+IG1heFJpZ2h0IC0gODApIHtcbiAgICAgIG5ld1NoaWZ0ID0gLShtYXhSaWdodCAtIDgwKVxuICAgIH1cblxuICAgIGlmIChuZXdTaGlmdCA+IDApIHtcbiAgICAgIG5ld1NoaWZ0ID0gMFxuICAgIH1cblxuICAgIHJpYmJvbi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke25ld1NoaWZ0fXB4KWBcbiAgfSlcblxuICByaWJib24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IGRlbHRhID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gc3RhcnRYXG4gICAgc2hpZnQgKz0gZGVsdGFcbiAgfSlcbn0pKClcbiIsImNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG5jb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQnKVxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fYnV0dG9uJylcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpXG4gIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuICBib2R5Lmluc2VydEFkamFjZW50SFRNTChcbiAgICBgYWZ0ZXJiZWdpbmAsXG4gICAgYDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxuICA8ZGl2IGNsYXNzPVwibW9kYWxfX2Nyb3NzXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJtb2RhbF9fY3Jvc3NfX2l0ZW1cIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJtb2RhbF9fY3Jvc3NfX2l0ZW1cIj48L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ltYWdlXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fdGV4dFwiPlxuICAgICAgPGgyIGNsYXNzPVwibW9kYWxfX3RleHRfX3RpdGxlXCI+dG9nZXRoZXIgd2UgY2FyZSwgc2F2ZSBhbmQgcHJvdGVjdCE8L2gyPlxuICAgICAgPHAgY2xhc3M9XCJtb2RhbF9fdGV4dF9fdGV4dFwiPllvdXIgbW9zdCBnZW5lcm91cyBnaWZ0IG5vdCBvbmx5IGNhcmVzIGZvciBjb3VudGxlc3MgYW5pbWFscywgYnV0IGl0IGFsc28gb2ZmZXJzIGhvcGVcbiAgICAgICAgYW5kIGEgdml0YWwgbGlmZWxpbmUgdG8gdGhlIHdvcmxk4oCZcyBtb3N0IGVuZGFuZ2VyZWQgd2lsZGxpZmUgcmVseWluZyBvbiB1cyB0byBzdXJ2aXZlLjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2J1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnV0dG9uXCI+JDIwPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J1dHRvblwiPiQzMDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idXR0b25cIj4kNTA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnV0dG9uXCI+JDgwPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J1dHRvblwiPiQxMDA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnV0dG9uIG1vZGFsX19idXR0b25fb3RoZXJcIj5cbiAgICAgICAgPHNwYW4+T3RoZXIgPHNwYW4gY2xhc3M9XCJtb2RhbF9fYnV0dG9uX290aGVyX2hpZGRlblwiPiBhbW91bnQ8L3NwYW4+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YFxuICApXG5cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY3Jvc3MnKVxuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWwucmVtb3ZlKClcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpXG4gICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cblxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSlcblxuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gY2xvc2VNb2RhbExpc3RlbmVyKGV2ZW50KSB7XG4gICAgaWYgKChtb2RhbC5jb250YWlucyhldmVudC50YXJnZXQpICYmICFjbG9zZUJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpKSB8fCBidXR0b24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpXG4gICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWxMaXN0ZW5lcilcbiAgfSlcbn0pXG4iLCJjb25zdCBwb3BVcERhdGEgPSBbXG4gIHtcbiAgICBpbmZvOiAnRG9uYXRpb24nLFxuICAgIGh0bWw6IGA8ZGl2IGNsYXNzPVwicG9wLXVwX19maXJzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50XCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IENob29zZSB5b3VyIGRvbmF0aW9uIGFtb3VudDo8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDEwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kMjA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQzMDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX2Ftb3VudF9fYnV0dG9uXCI+JDUwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19maXJzdF9fYW1vdW50X19idXR0b25cIj4kODA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19hbW91bnRfX2J1dHRvblwiPiQxMDA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fZmlyc3RfX290aGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX290aGVyX19idXR0b25cIj5PdGhlciBhbW91bnQ8L2J1dHRvbj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYW1vdW50XCIgcGF0dGVybj1cIl5bMC05LixdKyRcIiBjbGFzcz1cInBvcC11cF9faW5wdXQgcG9wLXVwX19maXJzdF9fb3RoZXJfX2lucHV0XCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fZXJyb3IgcG9wLXVwX19maXJzdF9fb3RoZXJfX2Vycm9yXCI+SW52YWxpZCBudW1iZXI8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19zcGVjaWFsXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcC11cF9fZmlyc3RfX3NwZWNpYWxfX2J1dHRvblwiPmZvciBzcGVjaWFsIHBldDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0X2Zhdm9yaXRlXCI+Q2hvb3NlIHlvdXIgZmF2b3VyaXRlPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvdyBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd19mYXZvcml0ZVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxNyAxMFwiPlxuICAgICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCIgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wIHBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfZmF2b3JpdGUgaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy10b3BcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCIgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tIHBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b21fZmF2b3JpdGUgaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy1ib3R0b21cIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2xpc3QgcG9wLXVwX19zZWxlY3RfX2xpc3RfZmF2b3JpdGUgaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxsaT5MdWthcyB0aGUgUGFuZGE8L2xpPlxuICAgICAgICAgICAgICA8bGk+QW5keSB0aGUgTGVtdXI8L2xpPlxuICAgICAgICAgICAgICA8bGk+R2xlbiB0aGUgR29yaWxsYTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5NaWtlIHRoZSBBbGxpZ2F0b3I8L2xpPlxuICAgICAgICAgICAgICA8bGk+U2FtICYgTG9yYSB0aGUgZWFnbGVzIGZhbWlseTwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPkxpeiB0aGUgS29hbGE8L2xpPlxuICAgICAgICAgICAgICA8bGk+U2hha2UgdGhlIExpb248L2xpPlxuICAgICAgICAgICAgICA8bGk+U2VuamEgdGhlIFRpZ2VyPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3AtdXBfX2ZpcnN0X19naWZ0XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJnaWZ0XCIgY2xhc3M9XCJwb3AtdXBfX2NoZWNrYm94XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2NoZWNrYm94X19zdGF0ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2NoZWNrYm94X19jb250cm9sXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2NoZWNrYm94X190aXRsZVwiPk1ha2UgdGhpcyBhIG1vbnRobHkgcmVjdXJyaW5nIGdpZnQ8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+YCxcbiAgfSxcbiAge1xuICAgIGluZm86ICdCaWxsaW5nJyxcbiAgICBhZGRpdGlvbmFsQ2xhc3M6ICdwb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0X3NlY29uZCcsXG4gICAgaHRtbDogYDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlY29uZFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3AtdXBfX2xhYmVsXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRcIj48c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dF9hc3Rlcml4XCI+Kjwvc3Bhbj4gWW91ciBOYW1lPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwibmFtZVwiXG4gICAgICAgICAgICAgIHBhdHRlcm49XCJeW0EtWmEtel0qW0EtWmEteiBdKltBLVphLXpdJFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgYW5kIGxhc3QgbmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2lucHV0X3NlY29uZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fZXJyb3JcIj5JbnZhbGlkIG5hbWU8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBZb3VyIEVtYWlsIEFkZHJlc3MgPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2lucHV0X3NlY29uZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fZXJyb3IgcG9wLXVwX19lcnJvcl9lbWFpbFwiPkludmFsaWQgZW1haWw8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHQgcG9wLXVwX19sYWJlbF90ZXh0X25vdGVcIj5Zb3Ugd2lsbCByZWNlaXZlIGVtYWlscyBmcm9tIHRoZSBPbmxpbmUgWm9vLCBpbmNsdWRpbmcgdXBkYXRlcyBhbmQgbmV3cyBvbiB0aGUgbGF0ZXN0IGRpc2NvdmVyaWVzIGFuZCB0cmFuc2xhdGlvbnMuIFlvdSBjYW4gdW5zdWJzY3JpYmUgYXQgYW55IHRpbWUuPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+YCxcbiAgfSxcbiAge1xuICAgIGluZm86ICdQYXltZW50JyxcbiAgICBhZGRpdGlvbmFsQ2xhc3M6ICdwb3AtdXBfX2luZm9ybWF0aW9uX3RoaXJkJyxcbiAgICBodG1sOiBgPGRpdiBjbGFzcz1cInBvcC11cF9fdGhpcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fdGhpcmRfX3NlY3Rpb24gcG9wLXVwX190aGlyZF9fc2VjdGlvbl90b3BcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3AtdXBfX2xhYmVsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBDcmVkaXQgQ2FyZCBOdW1iZXI8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhcmQtbnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiXlxcXFxkKyRcIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2lucHV0X2NhcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19lcnJvclwiPkludmFsaWQgY2FyZCBudW1iZXI8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3AtdXBfX2xhYmVsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fbGFiZWxfdGV4dFwiPjxzcGFuIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0X2FzdGVyaXhcIj4qPC9zcGFuPiBDVlYgTnVtYmVyPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjdnZcIlxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJeXFxcXGR7Myw0fSRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicG9wLXVwX19pbnB1dCBwb3AtdXBfX2lucHV0X2N2dlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2Vycm9yXCI+SW52YWxpZCBDVlY8L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3RoaXJkX19zZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wLXVwX19sYWJlbF90ZXh0XCI+PHNwYW4gY2xhc3M9XCJwb3AtdXBfX2xhYmVsX3RleHRfYXN0ZXJpeFwiPio8L3NwYW4+IEV4cGlyYXRpb24gRGF0ZTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlclwiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dCBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dF9tb250aFwiPk1vbnRoPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93IHBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2Fycm93X21vbnRoXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ljb24uc3ZnI2Fycm93LWJvdHRvbVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3AgcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LXRvcF9tb250aCBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3ctdG9wXCI+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b20gcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV9tb250aCBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3ctYm90dG9tXCI+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdCBwb3AtdXBfX3NlbGVjdF9fbGlzdF9tb250aCBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8bGk+SmFudWFyeTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkZlYnJ1YXJ5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TWFyY2g8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5BcHJpbDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk1heTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkp1bmU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5KdWx5PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+QXVndXN0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+U2VwdGVtYmVyPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+T2N0b2JlcjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk5vdmVtYmVyPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+RGVjZW1iZXI8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fbGFiZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlciBwb3AtdXBfX3NlbGVjdF9faGVhZGVyX3llYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXQgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfeWVhclwiPlllYXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3cgcG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfeWVhclwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy1ib3R0b21cIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDE3IDEwXCIgY2xhc3M9XCJwb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wIHBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy10b3BfeWVhciBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3ctdG9wXCI+PC91c2U+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTcgMTBcIiBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b20gcG9wLXVwX19zZWxlY3RfX2xpc3RfX2Fycm93LWJvdHRvbV95ZWFyIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvdy1ib3R0b21cIj48L3VzZT5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBvcC11cF9fc2VsZWN0X19saXN0IHBvcC11cF9fc2VsZWN0X19saXN0X3llYXIgaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGxpPjIwMjY8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDI3PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAyODwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMjk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDMwPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzMTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDMzPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+MjAzNDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjIwMzU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4yMDM2PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmAsXG4gIH0sXG5dXG5cbmxldCBzdGVwID0gMVxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kJylcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9uYXRlLXBvcC11cCcpXG5cbmZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpXG4gICAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuICAgICAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAgIGBhZnRlcmJlZ2luYCxcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwicG9wLXVwXCI+XG4gIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2hlYWRlclwiPlxuICAgIDxoMiBjbGFzcz1cInBvcC11cF9fdGl0bGVcIj5tYWtlIHlvdXIgZG9uYXRpb248L2gyPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBvcC11cF9faW5mb3JtYXRpb25cIj5cbiAgICA8cCBjbGFzcz1cInBvcC11cF9faW5mb3JtYXRpb25fX3RleHRcIj5QYXltZW50IEluZm9ybWF0aW9uOjwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2JvdHRvbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwb3AtdXBfX2R5bmFtaWNcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19idXR0b25zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9wLXVwX19idXR0b25zX190b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcC11cF9fcG9pbnRzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX3BvaW50c19faXRlbVwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcC11cF9fcG9pbnRzX19pdGVtXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19wb2ludHNfX2l0ZW1cIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19iYWNrIGhpZGRlblwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9wLXVwX19iYWNrX190ZXh0XCI+QmFjazwvc3Bhbj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjUgMjJcIj5cbiAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvd1wiIGNsYXNzPVwicG9wLXVwX19iYWNrX19zdmdcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwb3AtdXBfX25leHRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX25leHRfX3RleHRcIj5uZXh0PC9zcGFuPlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjUgMjJcIj5cbiAgICAgICAgICA8dXNlIGhyZWY9XCIvaWNvbi5zdmcjYXJyb3dcIiBjbGFzcz1cInBvcC11cF9fbmV4dF9fc3ZnXCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicG9wLXVwX19jb21wbGV0ZSBoaWRkZW5cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3AtdXBfX2NvbXBsZXRlX190ZXh0XCI+Y29tcGxldGUgZG9uYXRpb248L3NwYW4+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIyXCIgdmlld0JveD1cIjAgMCAyNSAyMlwiPlxuICAgICAgICAgIDx1c2UgaHJlZj1cIi9pY29uLnN2ZyNhcnJvd1wiIGNsYXNzPVwicG9wLXVwX19jb21wbGV0ZV9fc3ZnXCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YFxuICAgICAgICApXG5cbiAgICAgICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwJylcbiAgICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX25leHQnKVxuICAgICAgICBjb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fYmFjaycpXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fY29tcGxldGUnKVxuICAgICAgICBjb25zdCBkeW5hbWljQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fZHluYW1pYycpXG4gICAgICAgIGNvbnN0IGluZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9faW5mb3JtYXRpb25fX3RleHQnKVxuICAgICAgICBjb25zdCBwb2ludHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19wb2ludHMnKVxuICAgICAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX2luZm9ybWF0aW9uX190ZXh0JylcbiAgICAgICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX2luZm9ybWF0aW9uJylcblxuICAgICAgICBmdW5jdGlvbiBjaGFuZ1RleHQoKSB7XG4gICAgICAgICAgICBpbmZvcm1hdGlvbi50ZXh0Q29udGVudCA9IGAke3BvcFVwRGF0YVtzdGVwIC0gMV0uaW5mb30gSW5mb3JtYXRpb246YFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGR5bmFtaWNDb250YWluZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHluYW1pY0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoYGFmdGVyYmVnaW5gLCBwb3BVcERhdGFbc3RlcCAtIDFdLmh0bWwpXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmaWxsUG9pbnRzKCkge1xuICAgICAgICAgICAgO1suLi5wb2ludHNDb250YWluZXIuY2hpbGRyZW5dLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGluZGV4IDw9IHN0ZXAgLSAxID8gcG9pbnQuY2xhc3NMaXN0LmFkZCgnZmlsbCcpIDogcG9pbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmlsbCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xvc2VQb3BVcCgpIHtcbiAgICAgICAgICAgIHBvcFVwLnJlbW92ZSgpXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEluZm9UZXh0KCkge1xuICAgICAgICAgICAgaW5mb1RleHQuY2xhc3NMaXN0LnJlbW92ZSgncG9wLXVwX19pbmZvcm1hdGlvbl9fdGV4dF9zZWNvbmQnKVxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdwb3AtdXBfX2luZm9ybWF0aW9uX3RoaXJkJylcbiAgICAgICAgICAgIGlmIChzdGVwID09PSAyKSB7XG4gICAgICAgICAgICAgICAgaW5mb1RleHQuY2xhc3NMaXN0LmFkZCgncG9wLXVwX19pbmZvcm1hdGlvbl9fdGV4dF9zZWNvbmQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BvcC11cF9faW5mb3JtYXRpb25fdGhpcmQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW9kYWxzTG9naWMoKSB7XG4gICAgICAgICAgICBpZiAoc3RlcCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdExpc3RGYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9mYXZvcml0ZScpXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyb3dCdXR0b25GYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd19mYXZvcml0ZScpXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRGYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19pbnB1dF9mYXZvcml0ZScpXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wQXJyb3dGYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX2Zhdm9yaXRlJylcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b21BcnJvd0Zhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b21fZmF2b3JpdGUnKVxuXG4gICAgICAgICAgICAgICAgYXJyb3dCdXR0b25GYXZvcml0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0TGlzdEZhdm9yaXRlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIHRvcEFycm93RmF2b3JpdGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBzZWxlY3RMaXN0RmF2b3JpdGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZhdm9yaXRlLnRleHRDb250ZW50ID0gY2hpbGQudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdExpc3RGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyb3dCdXR0b25GYXZvcml0ZS5jb250YWlucyhldmVudC50YXJnZXQpKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0TGlzdEZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIHRvcEFycm93RmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tQXJyb3dGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RMaXN0TW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2xpc3RfbW9udGgnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdExpc3RZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X3llYXInKVxuICAgICAgICAgICAgICAgIGNvbnN0IGFycm93QnV0dG9uTW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9fYXJyb3dfbW9udGgnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGFycm93QnV0dG9uWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9faGVhZGVyX19hcnJvd195ZWFyJylcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dE1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19oZWFkZXJfX2lucHV0X21vbnRoJylcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwX19zZWxlY3RfX2hlYWRlcl9faW5wdXRfeWVhcicpXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wQXJyb3dNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX21vbnRoJylcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b21BcnJvd01vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cF9fc2VsZWN0X19saXN0X19hcnJvdy1ib3R0b21fbW9udGgnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcEFycm93WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctdG9wX3llYXInKVxuICAgICAgICAgICAgICAgIGNvbnN0IGJvdHRvbUFycm93WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtdXBfX3NlbGVjdF9fbGlzdF9fYXJyb3ctYm90dG9tX3llYXInKVxuXG4gICAgICAgICAgICAgICAgYXJyb3dCdXR0b25Nb250aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0TGlzdE1vbnRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIHRvcEFycm93TW9udGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tQXJyb3dNb250aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhcnJvd0J1dHRvblllYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdExpc3RZZWFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIHRvcEFycm93WWVhci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICBib3R0b21BcnJvd1llYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygc2VsZWN0TGlzdE1vbnRoLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRNb250aC50ZXh0Q29udGVudCA9IGNoaWxkLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RMaXN0TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcEFycm93TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbUFycm93TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBzZWxlY3RMaXN0WWVhci5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0WWVhci50ZXh0Q29udGVudCA9IGNoaWxkLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RMaXN0WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wQXJyb3dZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b21BcnJvd1llYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9wVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycm93QnV0dG9uTW9udGguY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fCBhcnJvd0J1dHRvblllYXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdExpc3RNb250aC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICB0b3BBcnJvd01vbnRoLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbUFycm93TW9udGguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0TGlzdFllYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgdG9wQXJyb3dZZWFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbUFycm93WWVhci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjaGFuZ1RleHQoKVxuICAgICAgICByZW5kZXJDb250ZW50KClcbiAgICAgICAgZmlsbFBvaW50cygpXG4gICAgICAgIGZpeEluZm9UZXh0KClcbiAgICAgICAgbW9kYWxzTG9naWMoKVxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpXG4gICAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuICAgICAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3RlcCArPSAxXG4gICAgICAgICAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICBjaGFuZ1RleHQoKVxuICAgICAgICAgICAgcmVuZGVyQ29udGVudCgpXG4gICAgICAgICAgICBmaWxsUG9pbnRzKClcbiAgICAgICAgICAgIGZpeEluZm9UZXh0KClcbiAgICAgICAgICAgIG1vZGFsc0xvZ2ljKClcbiAgICAgICAgICAgIGlmIChzdGVwID09PSAzKSB7XG4gICAgICAgICAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIGNvbXBsZXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN0ZXAgLT0gMVxuICAgICAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgY29tcGxldGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIGNoYW5nVGV4dCgpXG4gICAgICAgICAgICByZW5kZXJDb250ZW50KClcbiAgICAgICAgICAgIGZpbGxQb2ludHMoKVxuICAgICAgICAgICAgZml4SW5mb1RleHQoKVxuICAgICAgICAgICAgbW9kYWxzTG9naWMoKVxuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBiYWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjbG9zZVBvcFVwKClcbiAgICAgICAgICAgIHN0ZXAgPSAxXG4gICAgICAgIH0pXG5cbiAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsb3NlUG9wVXBMaXN0ZW5lcihldmVudCkge1xuICAgICAgICAgICAgaWYgKChwb3BVcC5jb250YWlucyhldmVudC50YXJnZXQpICYmICFjb21wbGV0ZS5jb250YWlucyhldmVudC50YXJnZXQpKSB8fCBidXR0b24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbG9zZVBvcFVwKClcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcFVwTGlzdGVuZXIpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cbiJdLCJuYW1lcyI6WyJi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
