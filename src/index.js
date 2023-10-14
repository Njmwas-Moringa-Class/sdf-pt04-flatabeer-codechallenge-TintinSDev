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


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('beer')) {
        const beer = e.target.id
        fetch(`${BASE_URL}/beers/${beer}`)
            .then(response => response.json())
            .then(beer => {
                console.log(beer)
                
            })
    }
    
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

    fetchBeers()

    const form = document.getElementById('description-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(form)
        const description = formData.get('description')
        fetch(`${BASE_URL}/beers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description })

        })
    })