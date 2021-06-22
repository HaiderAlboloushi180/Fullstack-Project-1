const findAPet = document.querySelector('a.is-primary')
const findAPet2 = document.querySelector('a.is-secondary')
const input = document.querySelector('.form-group input')
const links = document.getElementsByClassName('link')

document.querySelector('.meetYourMatch').id = 'meetYourMatch'
findAPet.href = '#meetYourMatch'
findAPet2.href = '#meetYourMatch'

fetch('./js/data.json', {
    mode: "no-cors",
    Headers: {
        "Application-Type": "application/json"
    }
}).then(res => res.json())
.then(res => {
    res.pets.map(petInfo => {
        let pets = `<div class="widget">
            <div class="widget__image">
                <img src="${petInfo.img}" alt="pet image">
            </div>
            <div class="widget__desc">
                <h4>${petInfo.name}</h4>
                <p>${petInfo.gender}  | ${petInfo.age} yrs old</p>
                <p>${petInfo.city} </p>
            </div>
        </div>`
        if (input.value == petInfo.city) {
            // document.querySelector('.is-searchResults').innerHTML = pets
            console.log(petInfo.city);
        } else {
            // document.querySelector('.is-searchResults').innerHTML = pets
            console.log('no');
        }
    }).join('')
    let stories = res.stories.map(story => `
    <div class="widget">
        <div class="widget__image">
            <img src="${story.img} " alt="graphic-image">
        </div>
        <div class="widget__desc">
            <h3>${story.title} </h3>
            <a href="#" class="link">Read More</a>
        </div>
    </div>`).join('')
    document.querySelector('.stories .container .widgets').innerHTML = stories
})
.catch(err => console.log(err))

document.querySelector('#button').addEventListener('click', (event) => {
    event.preventDefault()
    console.log('bruh');
})