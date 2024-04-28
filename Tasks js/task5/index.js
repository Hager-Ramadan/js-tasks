const colorItems = document.querySelectorAll('.color')
const inputColor = document.querySelector("input[name='color']");
const hexCode = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
]

colorItems.forEach(function (item) {
    let color = generateColor();
    item.style.backgroundColor = color;
    item.addEventListener('click', function () {
        document.body.style.backgroundColor = color;
        removeSelectorColor();
        item.classList.add('selected-color');
        addColorLocalStorage(color)

    })

})
function removeSelectorColor() {
    colorItems.forEach(function (item) {

        item.classList.remove('selected-color')

    })

}


function generateColor() {
    let color = ''
    for (let i = 0; i <= 5; i++) {
        let randIndex = parseInt(Math.random() * hexCode.length)
        color += hexCode[randIndex]

    }
    return '#' + color

}

window.onload = function () {
    document.body.style.backgroundColor = localStorage.getItem('bg-color') ?? 'red'

}

inputColor.addEventListener("change", function () {

    document.body.style.backgroundColor = inputColor.value
    addColorLocalStorage(inputColor.value)


});
function addColorLocalStorage(color) {
    localStorage.setItem('bg-color', color)


}
