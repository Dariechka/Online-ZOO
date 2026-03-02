async function fetchAnimals() {
  const response = await fetch('./animals.json')
  return await response.json()
}

export default async function zoos(animalName = 'gorilla') {
  const allAnimals = await fetchAnimals()
  let animal = allAnimals.find((x) => x.animal === animalName)
  if (!animal) {
    animal = allAnimals[0]
  }

  const topTitle = document.querySelector('.camera__top__title')
  topTitle.textContent = animal.title
  const knowText = document.querySelector('.know__info__text')
  knowText.textContent = animal.know
  const commonName = document.querySelector('.commonName')
  commonName.textContent = animal.commonName
  const scientificName = document.querySelector('.scientificName')
  scientificName.textContent = animal.scientificName
  const type = document.querySelector('.type')
  type.textContent = animal.type
  const size = document.querySelector('.size')
  size.textContent = animal.size
  const diet = document.querySelector('.diet')
  diet.textContent = animal.diet
  const habitat = document.querySelector('.habitat')
  habitat.textContent = animal.habitat
  let range = document.querySelector('.range')
  range.textContent = animal.range
  const image = document.querySelector('.know__image__img')
  image.setAttribute('src', `./images/${animal.animal}_Page.png`)
  const knowLargeText = document.querySelector('.know__text')
  knowLargeText.textContent = animal.text
  const donationTitle = document.querySelector('.camera__donation__text-info__title')
  donationTitle.textContent = animal.donationTitle
  const donationText = document.querySelector('.camera__donation__text-info__text')
  donationText.textContent = animal.donationText

  const panel = document.querySelector('.panel')
  const topPanelElement = document.querySelector('.panel__top')
  const bottomButton = document.querySelector('.panel__bottom')
  let step = 0
  const animalsForPanel = allAnimals
    .sort((b, c) => {
      if (b.animal === animal.animal) return -1
      if (c.animal === animal.animal) return 1
      return 0
    })
    .map((animalPanel) => transformAnimalForPanel(animalPanel, animalPanel.animal === animal.animal))

  function renderPanel() {
    const children = document.querySelectorAll('.panel__animal')
    for (let child of children) {
      child.remove()
    }
    const circlesHtml = animalsForPanel.slice(step, step + 4)
    topPanelElement.insertAdjacentHTML('afterend', circlesHtml.join(''))

    step += 4
    if (step > 4) {
      step = 0
    }
    const circles = document.querySelectorAll('.panel__animal__circle')
    for (let circle of circles) {
      let classes = Array.from(circle.classList)
      circle.addEventListener('click', () => zoos(classes[1]))
    }
  }

  renderPanel()
  bottomButton.addEventListener('click', renderPanel)


  const openButton = document.querySelector('.open-button')
  const closeButton = document.querySelector('.close-button')
  openButton.addEventListener('click', () => {
    panel.setAttribute('panel-open', 'true');
    openButton.setAttribute('panel-open', 'true');
    closeButton.setAttribute('panel-open', 'true');
    for (const animal of document.querySelectorAll('.panel__animal')){
      animal.setAttribute('panel-open', 'true');
    }
  })
  closeButton.addEventListener('click', () => {
    panel.removeAttribute('panel-open');
    openButton.removeAttribute('panel-open');
    closeButton.removeAttribute('panel-open');
    for (const animal of document.querySelectorAll('.panel__animal')){
      animal.removeAttribute('panel-open');
    }
  })
}

function transformAnimalForPanel(animal, active = false) {
  return active
    ? `<div class="panel__animal active">
<svg width="120" height="120" viewBox="0 0 120 120" class="panel__animal__border">
<use href="./icon.svg#circle"></use>
</svg>
<div class="panel__animal__circle ${animal.animal}">
${animal.svg}
</div>
<p class="panel__animal__text">${animal.svgText}</p>
</div>`
    : `<div class="panel__animal"><svg width="120" height="120" viewBox="0 0 120 120" class="panel__animal__border"><use href="./icon.svg#circle"></use></svg><div class="panel__animal__circle ${animal.animal}">${animal.svg}</div><p class="panel__animal__text">${animal.svgText}</p></div>`
}
