const $name = document.getElementById('fullName')
const $cards = document.querySelectorAll('div.card')
$cards.forEach((card,i)=>{
    card.id = i
    card.onclick = makeGuess
})

function makeGuess(event) {
    const {id} = event.target
    fetch(`/guess?fullName=John&colorID=${id}`)
        .then((res)=>res.text())
        .then((data)=>{
            const $answer = document.createElement("h2")
            $answer.textContent = data
            document.querySelector('h1')
                .after($answer)
        })
}