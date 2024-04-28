const btns = document.querySelectorAll('.btn')
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


btns.forEach(function (item) {
    item.addEventListener('click', addStyleAction)

})

function addStyleAction(item) {
    const rand = parseInt(Math.random() * 8)
    const card = this.closest('.card')
    card.style.backgroundColor = colors[rand]
    const para = card.querySelector('p')
    let content = + para.textContent
    para.textContent = content + 1
    para.style.color = 'white'


}
