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
  image.setAttribute('src', `/images/${animal.animal}_Page.png`)
  const knowLargeText = document.querySelector('.know__text')
  knowLargeText.textContent = animal.text
  const donationTitle = document.querySelector('.camera__donation__text-info__title')
  donationTitle.textContent = animal.donationTitle
  const donationText = document.querySelector('.camera__donation__text-info__text')
  donationText.textContent = animal.donationText
}
