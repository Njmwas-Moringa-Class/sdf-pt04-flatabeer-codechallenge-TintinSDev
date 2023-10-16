// Code here
const BASE_URL = 'http://localhost:3000'

async function fetchBeers() {

    const beersResponse = await fetch(`${BASE_URL}/beers`)
    const beers = await beersResponse.json()
    return fetch(`${BASE_URL}/beers`)
}

const beerDetails = document.querySelector('.beer-details')
const nav = document.querySelector('nav')
nav.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`${BASE_URL}/beers`)
        .then(response => response.json())
        .then(beers => {
            nav.innerHTML = ''
            for (let beer of beers) {
                nav.innerHTML += `<li>${beer.name}</li>`
            }
        })
})

document.addEventListener('DOMContentLoaded', () => {

    // beer list selection
    const beerList = document.querySelector('#beer-list')
    
    
     
    fetch(`${BASE_URL}/beers`)
        .then(response => response.json())
        .then(beers => {
            beerList.innerHTML = ''
            for (let beer of beers) {
                beerList.innerHTML += `<li>${beer.name}</li>`
            }
            
        })
    
    //beer name display
    const beerName = document.querySelector('#beer-name')
    fetch(`${BASE_URL}/beers`)
        .then(response => response.json())
        .then(beers => {
            beerName.innerText = beers[0].name
        })
    
    //beer-image dispaly
    const beerImage = document.querySelector('#beer-image')

    fetch(`${BASE_URL}/beers`)
        .then(response => response.json())
        .then(beers => {
            beerImage.src = beers[0].image_url

        })

    // beer-description
    const beerDescription = document.querySelector('#beer-description')

    fetch(`${BASE_URL}/beers`)
        .then(response => response.json())
        .then(beers => {
            beerDescription.innerHTML = beers[0].description
            Map.description = Object.keys(beerDescription)
        })
    
    //beer description
    const beerReviews = document.querySelector('#review-list')
    fetch(`${BASE_URL}/beers`)
        .then(response => response.json())
        .then(beers => {
            beerReviews.innerText = beers[0].reviews
            Map.reviews = Object.keys(beerReviews)

        })
   

    })

  

    // const form = document.getElementById('description-form')
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     const formData = ''
    //     const description = formData.get('description')
    //     fetch(`${BASE_URL}/beers`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ description })

    //     })
    // })