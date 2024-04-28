const counter = document.querySelector('h1')
const btnIncrease = document.querySelector('.btn-increase')
const btnDecrease = document.querySelector('.btn-decrease')
const colors = [
    'rosybrown',
    'palegreen',
    'teal',
    'palegoldenrod',
    'brown',
    'aqua',
    'bisque',
    'powderblue'
]

btnIncrease.addEventListener('click', function () {
    counter.textContent = + counter.textContent + 1
    counter.parentElement.style.backgroundColor = getRandomColor()
})

btnDecrease.addEventListener('click', function () {
    if (counter.textContent > 0) {

        counter.textContent = + counter.textContent - 1
        counter.parentElement.style.backgroundColor = getRandomColor()
    }


})
function getRandomColor() {
    let randomColor = parseInt(Math.random() * 8)
    return colors[randomColor]


}
