//Buttons
document.querySelector('.meetYourMatch').id = 'meetYourMatch'
const findAPet  = document.querySelector('a.is-primary')
const findAPet2 = document.querySelector('a.is-secondary')
findAPet.href   = '#meetYourMatch'
findAPet2.href  = '#meetYourMatch'
//Search and Results
const input     = document.querySelector('.form-group input')
const results   = document.querySelector('.is-searchResults')
results.innerHTML = null

document.querySelector('#button').addEventListener('click', (event) => {
    event.preventDefault()
    results.innerHTML = null
    fetch('./js/data.json', {
        mode: "no-cors",
        Headers: {
            "Application-Type": "application/json"
        }
    }).then(res => res.json())
    .then(res => {
         res.pets.map(petInfo => {
             if (input.value == petInfo.city) {
                let widget = document.createElement('div')
                let widgetImg = document.createElement('div')
                let img = document.createElement('img')
                let widgetDesc = document.createElement('div')
                let h4 = document.createElement('h4')
                let para = document.createElement('p')
                let locationPara = document.createElement('p')
    
                widget.classList = 'widget'
                widgetImg.classList = 'widget__image'
                widgetDesc.classList = 'widget__desc'
                locationPara.classList = 'location'
                img.src = petInfo.img
                h4.innerHTML = petInfo.name
                para.innerHTML = `${petInfo.gender} | ${petInfo.age}`
                locationPara.innerHTML = petInfo.city
    
                widgetDesc.appendChild(h4)
                widgetDesc.appendChild(para)
                widgetDesc.appendChild(locationPara)
                widgetImg.appendChild(img)
                widget.appendChild(widgetImg)
                widget.appendChild(widgetDesc)
                results.appendChild(widget) 
            }
        })
    })
    .catch(err => console.log(err))    
})

const stories = [
    {
        story: "Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story Story",
        title: "Cat turns into superhero.",
        img: "./images/stories/1.png"
    },
    {
        story: "Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story Other Story",
        title: "Dog learns how to code!",
        img: "./images/stories/2.png"
    },
    {
        story: "Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story Third Story",
        title: "Jesse the dog... wearing a top hat?!",
        img: "./images/stories/3.png"
    }
]
const storyWidgets = document.querySelector('.stories .container .widgets')
storyWidgets.innerHTML = null

for (let i = 0; i < stories.length; i++) {
    let story = stories[i];
    let widget = document.createElement('div')
    let widgetImg = document.createElement('div')
    let widgetDesc = document.createElement('div')
    let img = document.createElement('img')
    let h3 = document.createElement('h3')
    let a = document.createElement('a')
    let p = document.createElement('p') 

    widget.classList = 'widget'
    widgetImg.classList = 'widget__image'
    widgetDesc.classList = 'widget__desc'
    a.classList = 'link'
    p.classList = 'storyP'
    p.style.textAlign = 'left'
    p.style.display = 'none'
    img.src = story.img

    h3.innerHTML = story.title
    p.innerHTML = story.story
    a.innerHTML = 'Read More'

    widgetDesc.appendChild(h3)
    widgetDesc.appendChild(a)
    widgetDesc.appendChild(p)
    widgetImg.appendChild(img)
    widget.appendChild(widgetImg)
    widget.appendChild(widgetDesc)
    storyWidgets.appendChild(widget)
}
let links = document.getElementsByClassName('link')
let para  = document.getElementsByClassName('storyP')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        if (para[i].style.display == 'none') {
            links[i].innerHTML = 'Close'
            para[i].style.display = 'block'
        } else {
            links[i].innerHTML = 'Read More'
            para[i].style.display = 'none'
        }
    })
}