const sliders = document.querySelector(".sliders");
const left_btn = document.querySelector(".slide i:first-of-type");
const right_btn = document.querySelector(".slide i:last-of-type");
const text = document.querySelector(".sliders h1");
let imgIndex = 0;
let productContainer = [
    {
        imgUrl: "35096.jpg",
        content: "Lorem ipsum dolor sit amet consectetur. #1"

    }, {
        imgUrl: "24911.jpg",

        content: "Lorem ipsum dolor sit amet consectetur. #2"

    }, {
        imgUrl: "43443.jpg",

        content: "Lorem ipsum dolor sit amet consectetur. #3"

    }, {
        imgUrl: "40340.jpg",

        content: "Lorem ipsum dolor sit amet consectetur. #4"

    }

];

let nextSlider = () => {

    imgIndex++

    if (imgIndex > productContainer.length - 1) {

        imgIndex = 0;

    }

    sliders.style.backgroundImage = `url(./style/images/${
        productContainer[imgIndex].imgUrl

    })`;
    text.textContent = `${
        productContainer[imgIndex].content

    }`
}


let prevSlider = () => {

    imgIndex--

    if (imgIndex < 0) {
        imgIndex = productContainer.length - 1;

    }
    sliders.style.backgroundImage = `url(./style/images/${
        productContainer[imgIndex].imgUrl

    })`;
    text.textContent = `${
        productContainer[imgIndex].content

    }`;
};
right_btn.addEventListener("click", nextSlider);

left_btn.addEventListener("click", prevSlider);
