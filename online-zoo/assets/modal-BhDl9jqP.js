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
const body$1 = document.body;
const links = document.querySelectorAll(".header__navigation_item");
const mql = window.matchMedia("(max-width: 768px)");
mql.addEventListener("change", (e) => {
  if (!e.matches) {
    closeMenu();
  }
});
function closeMenu() {
  menu.removeAttribute("data-open");
  body$1.classList.remove("no-scroll");
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
    body$1.classList.add("no-scroll");
    body$1.addEventListener("click", function closeMenuOnBodyClick(event) {
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
const body = document.body;
const background = document.querySelector(".background");
const button = document.querySelector(".footer__button");
button.addEventListener("click", () => {
  body.classList.add("no-scroll");
  background.style.display = "block";
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
  );
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".modal__cross");
  function closeModal() {
    modal.remove();
    body.classList.remove("no-scroll");
    background.style.display = "none";
  }
  closeButton.addEventListener("click", () => closeModal());
  body.addEventListener("click", function closeModalListener(event) {
    if (modal.contains(event.target) && !closeButton.contains(event.target) || button.contains(event.target)) {
      return;
    }
    closeModal();
    body.removeEventListener("click", closeModalListener);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtQmhEbDlqcVAuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mZWF0dXJlcy9idXJnZXItbWVudS5qcyIsIi4uLy4uL3NyYy9mZWF0dXJlcy9tb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fcmlnaHQtYmxvY2snKVxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyLW1lbnUnKVxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbmF2aWdhdGlvbl9pdGVtJylcbmNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKVxuXG5tcWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgaWYgKCFlLm1hdGNoZXMpIHtcbiAgICBjbG9zZU1lbnUoKVxuICB9XG59KVxuXG5mdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gIG1lbnUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW9wZW4nKVxuICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpXG4gIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtb3BlbicpXG59XG5cbmZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNsb3NlTWVudSgpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2xpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyl9YFxuICAgIH0sIDUwMClcbiAgfSlcbn1cblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1vcGVuJykpIHtcbiAgICBjbG9zZU1lbnUoKVxuICB9IGVsc2Uge1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nLCAnJylcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpXG5cbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gY2xvc2VNZW51T25Cb2R5Q2xpY2soZXZlbnQpIHtcbiAgICAgIGlmIChidXR0b24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fCBtZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjbG9zZU1lbnUoKVxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnVPbkJvZHlDbGljaylcbiAgICB9KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nLCAnJylcbiAgICB9LCAzMDApXG4gIH1cbn0pXG4iLCJjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kJylcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX2J1dHRvbicpXG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKVxuICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgYGFmdGVyYmVnaW5gLFxuICAgIGA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsX19jcm9zc1wiPlxuICAgIDxzcGFuIGNsYXNzPVwibW9kYWxfX2Nyb3NzX19pdGVtXCI+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwibW9kYWxfX2Nyb3NzX19pdGVtXCI+PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsX19pbWFnZVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX3RleHRcIj5cbiAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190ZXh0X190aXRsZVwiPnRvZ2V0aGVyIHdlIGNhcmUsIHNhdmUgYW5kIHByb3RlY3QhPC9oMj5cbiAgICAgIDxwIGNsYXNzPVwibW9kYWxfX3RleHRfX3RleHRcIj5Zb3VyIG1vc3QgZ2VuZXJvdXMgZ2lmdCBub3Qgb25seSBjYXJlcyBmb3IgY291bnRsZXNzIGFuaW1hbHMsIGJ1dCBpdCBhbHNvIG9mZmVycyBob3BlXG4gICAgICAgIGFuZCBhIHZpdGFsIGxpZmVsaW5lIHRvIHRoZSB3b3JsZOKAmXMgbW9zdCBlbmRhbmdlcmVkIHdpbGRsaWZlIHJlbHlpbmcgb24gdXMgdG8gc3Vydml2ZS48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsX19idXR0b25zXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J1dHRvblwiPiQyMDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idXR0b25cIj4kMzA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnV0dG9uXCI+JDUwPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J1dHRvblwiPiQ4MDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idXR0b25cIj4kMTAwPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J1dHRvbiBtb2RhbF9fYnV0dG9uX290aGVyXCI+XG4gICAgICAgIDxzcGFuPk90aGVyIDxzcGFuIGNsYXNzPVwibW9kYWxfX2J1dHRvbl9vdGhlcl9oaWRkZW5cIj4gYW1vdW50PC9zcGFuPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmBcbiAgKVxuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nyb3NzJylcblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIG1vZGFsLnJlbW92ZSgpXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKVxuICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG5cbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKCkpXG5cbiAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsb3NlTW9kYWxMaXN0ZW5lcihldmVudCkge1xuICAgIGlmICgobW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhY2xvc2VCdXR0b24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgfHwgYnV0dG9uLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKVxuICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsTGlzdGVuZXIpXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbImJ1dHRvbiIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxPQUFPLFNBQVMsY0FBYyxzQkFBc0I7QUFDMUQsTUFBTUEsV0FBUyxTQUFTLGNBQWMsc0JBQXNCO0FBQzVELE1BQU1DLFNBQU8sU0FBUztBQUN0QixN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
