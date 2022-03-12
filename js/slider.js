const images = [
    'images/istockphoto-1-612x612 (1).jpg',
    'images/istockphoto-1-612x612 (2).jpg',
    'images/istockphoto-1-612x612 (3).jpg',
    'images/istockphoto-1-612x612 (4).jpg',
    'images/istockphoto-1-612x612 (5).jpg',
    'images/istockphoto-1-612x612 (6).jpg',
    'images/istockphoto-1-612x612 (7).jpg',
    'images/istockphoto-1-612x612 (8).jpg',
    'images/istockphoto-1-612x612 (9).jpg'
];
let imgSlider = 0;
const imageSliderId = document.getElementById('images-slider-id');
setInterval(() => {
    if (imgSlider >= images.length) {
        imgSlider = 0;
    }
    const imgUrl = images[imgSlider];
    imageSliderId.setAttribute('src', imgUrl)
    imgSlider++
}, 1500)