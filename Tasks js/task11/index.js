var btn1 = document.querySelector('.home')
var btn2 = document.querySelector('.profile')
var btn3 = document.querySelector('.contact')
var text1 = document.querySelector('.text_home')
var text2 = document.querySelector('.text_profile')
var text3 = document.querySelector('.text_contact')

btn1.addEventListener('click', function () {
    btn1.setAttribute('class', 'active')
    btn3.classList.remove('active')
    btn2.classList.remove('active')
    text1.setAttribute('class', 'active-p')
    text2.setAttribute('class', 'deactive')
    text3.setAttribute('class', 'deactive')

})
btn2.addEventListener('click', function () {
    btn2.setAttribute('class', 'active')
    btn1.classList.remove('active')
    btn3.classList.remove('active')
    text2.setAttribute('class', 'active-p')
    text1.setAttribute('class', 'deactive')
    text3.setAttribute('class', 'deactive')


})
btn3.addEventListener('click', function () {
    btn3.setAttribute('class', 'active')
    btn2.classList.remove('active')
    btn1.classList.remove('active')
    text3.setAttribute('class', 'active-p')
    text1.setAttribute('class', 'deactive')
    text2.setAttribute('class', 'deactive')


})
