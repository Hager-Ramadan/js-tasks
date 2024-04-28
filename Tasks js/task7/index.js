const scrollTop = document.querySelector('.scroll-top')
const scrollBar = document.querySelector('.scroll-bar')
const links = document.querySelectorAll('.nav-link')


links.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        let targetElement = document.getElementById(item.dataset.target)
        let position = targetElement.offsetTop - targetElement.clientHeight

        window.scrollTo({top: position})

    })

})
window.addEventListener('scroll', function () {
    let mainHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    let percentage = this.document.documentElement.scrollTop / mainHeight
    scrollBar.style.width = `${
        percentage * 100
    }%`

    scrollToTop()


})
scrollTop.addEventListener('click', function () {
    window.scrollTo({top: 0, behavior: 'smooth'})
})

function scrollToTop() {
    if (this.window.scrollY > 700) {
        scrollTop.style.display = 'block'

    } else {
        scrollTop.style.display = 'none'


    }

}
