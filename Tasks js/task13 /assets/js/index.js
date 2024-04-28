const nav = document.querySelector("nav")
const hero = document.querySelector("#img_hero")

let offsetNav = hero.offsetTop;

window.addEventListener('scroll', () => {

    if (window.scrollY >= offsetNav - 30) {
        nav.style.backgroundColor = ('white')
        nav.style.boxShadow = ('0 0 30px 0 rgba(0, 0, 0, 10%)')
        nav.style.transition = ('.5s')

    } else {
        nav.style.backgroundColor = ('transparent')
        nav.style.boxShadow = ('none')


    }
})


let tabs = document.querySelectorAll('.about__list li')
let tabsArray = Array.from('tabs')
let divs = document.querySelectorAll('.tab-content > div')
let divsArray = Array.from('divs')


tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});
