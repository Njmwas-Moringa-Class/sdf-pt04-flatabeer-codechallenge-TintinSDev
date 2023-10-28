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
    const description = document.querySelector('#description-form')
    const review = document.querySelector('#review-form')

// function updatedBeer(beers) {
//     description = description.replace()
//  }

document.addEventListener('DOMContentLoaded', () => {
    
    //Display beer details
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
            beerReviews.innerText = beers[0].reviews
        })

        //nav bar beers navigation #successfull
        beerList.addEventListener('click', (e) => {
            e.preventDefault();
            //console.log(e.target.innerText);
            fetch(`${BASE_URL}/beers`,)
                .then(response => response.json())
                .then(beers => {
                    for (let beer of beers) {
                        if (beer.name === e.target.textContent) {
                            beerName.innerText = beer.name
                            beerImage.src = beer.image_url
                            beerDescription.innerHTML = beer.description
                            beerReviews.innerHTML = beer.reviews
                        }
                    }
                })
        })
    
    //Update Beer descriptions
    description.addEventListener('submit', (e) => {
        e.preventDefault();
        const newDescription = document.querySelector('#description').value;
        fetch(`${BASE_URL}/beers`)
            .then(response => response.json())
            .then(beers => {
                for (let beer of beers) {
                    if (beer.name === beerName.innerText) {
                        beerDescription.innerHTML = newDescription
                    }
                }
            })
    })
    
    //Update new reviews
    review.addEventListener('submit', (e) => {
        e.preventDefault();
        const newReview = document.querySelector('#review').value;
        fetch(`${BASE_URL}/beers`)
            .then(response => response.json())
            .then(beers => {
                for (let beer of beers) {
                    if (beer.name === beerName.innerText) {
                        beerReviews.innerText = newReview
                    }
                }
            })
    })
})
       

