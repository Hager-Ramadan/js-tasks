const numberContainers = document.querySelectorAll('.number-container h2')

numberContainers.forEach(function (item) {
    let number = + item.textContent
    let increaseNumber = parseInt((5 / 100) * number)
    item.textContent = 0

    let counter = setInterval(function () {
        item.textContent = + item.textContent + increaseNumber
        if (+ item.textContent >= number) {
            item.textContent = number
            item.parentElement.style.backgroundColor = 'red'
            clearInterval(counter)


        }


    }, 70)

})
