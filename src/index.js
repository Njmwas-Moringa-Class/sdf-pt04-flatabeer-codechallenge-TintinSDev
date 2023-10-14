// Code here
const BASE_URL = 'http://localhost:3000'

 async function fetchBeers() {
    
     const beersResponse = await fetch(`${BASE_URL}/beers`)
     const beers = await beersResponse.json()
     return beers
  }
// function beerInfo(beer) {
//       document.querySelector('#beer-name').innerText = beer.name;
//     document.querySelector('#beer-image').src = beer.image_url;
//      document.querySelector('#beer-description').innerHTML = beer.description;
//     document.querySelector('#beer-reviews').innerText = beer.reviews;
    
    
// }
// function beerDetails(beer) {
//     return `
//     <h2>${beer.name}</h2>
//     <img src = "${beer.image_url}" />
//     <p>${beer.description}</p>
    
//     `
    
    
// }


// document.addEventListener('DOMContentLoaded', () => {
    
//     const beerList = document.querySelector('#beer-list')
    
//     fetchBeers()
//     fetch(`${BASE_URL}/beers`)
//         .then((response) => response.json())
//         .then(beers => {
//             beerList.innerHTML = ''
//             for (let beer of beers) {
//                 beerList.innerHTML += `<li>${beer.name}</li>`
            
//             }
        
//         })
//     console.log(beerList)
// })






document.addEventListener('DOMContentLoaded', () => {
   
    const beerList = document.querySelector('#beer-list')
    
        
        fetch(`${BASE_URL}/beers`)
        .then(response => response.json())
        .then(beers => {
            beerList.innerHTML = ''
            for (let beer of beers) {
                beerList.innerHTML += `<li>${beer.name}</li>`
            }
        })
        const beerName = document.querySelector('#beer-name')
        fetch(`${BASE_URL}/beers`)
            .then(response => response.json())
            .then(beers => {
                beerName.innerText = beers[0].name
            })
            const beerImage = document.querySelector('#beer-image')
            
                fetch(`${BASE_URL}/beers/1`)
                .then(response => response.json())
                .then(beers => {
                    beerImage.src = beers.image_url
                })
            
            const beerDescription = document.querySelector('#beer-description')
            
                fetch(`${BASE_URL}/beers`)
                    .then(response => response.json())
                    .then(beers => {
                        beerDescription.innerHTML = beers[0].description
                 })
                
            
            const beerReview = document.querySelector('#beer-review')
            
                fetch(`${BASE_URL}/beers`)
                    .then(response => response.json())
                    .then(beers => {
                        beerReview.innerHTML = beers[0].reviews[0]
                    })
        
    })
const form = document.getElementById('description-form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})
fetchBeers()