let videoBox = document.querySelector("#video_elem");

let brightSlider = document.getElementById("bright");
let brightValue = document.getElementById("bright_value");

let graySlider = document.getElementById("gray");
let grayValue = document.getElementById("gray_value");

let invertSlider = document.getElementById("invert");
let invertValue = document.getElementById("invert_value");

let sepiaSlider = document.getElementById("sepia");
let sepiaValue = document.getElementById("sepia_value");

let brightness = 100;
let grayscale = 0;
let invert = 0;
let sepia = 0;

let newFilter

function updateFilters() {
    
    newFilter = "brightness("+brightness+"%) " 
    + "grayscale("+ grayscale+"%)"
    + "invert("+ invert+"%)"
    + "sepia("+ sepia+"%)";

    videoBox.style.filter = newFilter;
}

brightSlider.addEventListener("input", function () {
    brightness = brightSlider.value;
    updateFilters();
})
graySlider.addEventListener("input", function () {
    grayscale = graySlider.value;
    updateFilters();
})
invertSlider.addEventListener("input", function () {
    invert = invertSlider.value;
    updateFilters();
})
sepiaSlider.addEventListener("input", function () {
    sepia = sepiaSlider.value;
    updateFilters();
})