const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣', '🪦',
]
let gameLength = 60
let clockId = 0
let timeRemaining = 0

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
},
{
    name: 'Rachel',
    picture: '🦹‍♀️',
    location: '🏣',
},
{
    name: 'Franklin',
    picture: '🕴️',
    location: '🏣',
},
{
    name: 'General',
    picture: '🪖',
    location: '🏣',
},
{
    name: 'Wild Bill',
    picture: '🧑‍🍼',
    location: '🪦',
},
{
    name: 'Tony',
    picture: '👨‍🎨',
    location: '🪦',
},
{
    name: 'Mini',
    picture: '🐈‍⬛',
    location: '🪦',
}
]

drawPeople()

function drawPeople(){
    locations.forEach(location => {
        console.log(location)
        let filteredPeople = people.filter(people => people.location == location)
        console.log(filteredPeople, '👌')
        let locationElm = document.getElementById(location)
        console.log('@', locationElm)
        let peoplePictures = filteredPeople.map(people => people.picture)
        console.log('😶‍🌫️', peoplePictures)
        locationElm.innerText = peoplePictures.join(' ')
    });
}
function movePeople(){
    people.forEach(person => {
    let newLocation = locations[Math.floor(Math.random()*locations.length)]
    console.log(newLocation, 'the new spot')
    person.location = newLocation
    })
    
}

function bite(location){
    console.log('[LOCATION]', location)
    let attackScene = people.location
    console.log(attackScene, '🫥') 
    let peopleHere = people.filter(person => person.location == location)
    console.log('🤢', peopleHere)
    let victim = peopleHere.find(person => person.picture != '🦇')
    console.log('🧛', victim)
        if(victim){
            victim.picture = '🦇'
        }

    drawPeople()
    confirmKills()
    movePeople()
}

function confirmKills(){
    let deadPeople = people.filter(person => person.picture == '🦇')
    console.log('☠️', deadPeople)
    if(people.length == deadPeople.length){
        window.alert('Wow, uhhhhhhhh, you for sure killed everyone..... I guess you should feel good about this?')
    }
}
function drawTimer(){
    let timerElem = document.getElementById('timer')
    timerElem.innerText = gameLength
    // timerElem.innerText = (timeRemaining/1000).toString(
}
function startTimer(){
    gameLength -= 1
    if( gameLength == 0) {
        clearInterval(myInterval)
        window.alert('You lose! Obviously wonton murder is NOT your jam....')

    }
    drawTimer()
    console.log(gameLength)


}
drawTimer()
const myInterval = setInterval(startTimer, 1000)
