fetch('./js/data.json', {
    mode: "no-cors",
    Headers: {
        "Application-Type": "application/json"
    }
}).then(res => res.json())
.then(res => {
    console.log(res.pets);
    let pets = res.pets.map(petInfo => `<div class="widget">
        <div class="widget__image">
            <img src="${petInfo.img}" alt="pet image">
        </div>
        <div class="widget__desc">
            <h4>${petInfo.name}</h4>
            <p>${petInfo.gender}  | ${petInfo.age} yrs old</p>
            <p>${petInfo.city} </p>
        </div>
    </div>`).join('')
    document.querySelector('.is-searchResults').innerHTML = pets
})
.catch(err => console.log(err))

document.querySelector('#button').addEventListener('click', function(event) {
    event.preventDefault()
    console.log('bruh');
})

// document.querySelector('.is-primary, .is-secondary').onclick = document.querySelector('.meetYourMatch').scrollIntoView()