const tabTitle = document.querySelectorAll('.tab-title')
const tabContent = document.querySelectorAll('.tab-content')

tabTitle.forEach(function (el) {
    el.addEventListener('click', function () {
        removeClass(tabTitle)
        el.classList.add('active')
        let dataId = el.dataset.id
        removeClass(tabContent)
        document.getElementById(dataId).classList.add('active')
    })

})
function removeClass(item) {
    item.forEach(function (el) {
        el.classList.remove('active')

    })


}
