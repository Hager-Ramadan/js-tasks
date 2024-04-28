let mainImage = document.getElementById('main-image')
let InnerImages = document.querySelectorAll('.inner-image')
let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')
state = 0


nextBtn.onclick = function () {
    state = state + 1
    if (state < InnerImages.length) {

        mainImage.src = InnerImages[state].src;


    } else {
        state = 0
        mainImage.src = InnerImages[state].src;


    }


}
prevBtn.onclick = function () {
    state = state - 1
    if (state >= 0) {

        mainImage.src = InnerImages[state].src;


    } else {
        state = InnerImages.length - 1

        mainImage.src = InnerImages[state].src;


    }


}

for (let i = 0; i < InnerImages.length; i++) {
    InnerImages[i].onclick = function () {
        let imgSrc = InnerImages[i].src;
        mainImage.src = imgSrc

    }


}
