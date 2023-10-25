// Code here
const BASE_URL = 'http://localhost:3000'

async function fetchBeers() {

    const beersResponse = await fetch(`${BASE_URL}/beers`)
    const beers = await beersResponse.json()
    return fetch(`${BASE_URL}/beers`)
}
const beerReviews = document.querySelector('#review-list')
const beerName = document.querySelector('#beer-name')
const beerImage = document.querySelector('#beer-image')
const beerDescription = document.querySelector('#beer-description')
const beerList = document.querySelector('#beer-list')
const beerDetails = document.querySelector('.beer-details')
const description = document.querySelector('#description-form')


document.addEventListener('DOMContentLoaded', () => {

    beerDetails.addEventListener('click', (e) => {
        e.preventDefault();
        
    })
    fetch(`${BASE_URL}/beers`)
        .then(response => response.json())
        .then(beers => {
            beerList.innerHTML = ''
            for (let beer of beers) {
                beerList.innerHTML += `<li>${beer.name}</li>`
            }
            beerName.innerText = beers[0].name
            beerImage.src = beers[0].image_url
            beerDescription.innerHTML = beers[0].description
            Map.description = Object.keys(beerDescription)
            beerReviews.innerText = beers[0].reviews
            Map.reviews = Object.keys(beerReviews)
        })
    
        
    })
       

