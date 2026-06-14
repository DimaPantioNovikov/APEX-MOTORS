const img = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
];

let currentIndex = 0;

const slide = document.getElementById("slide");

function showSlide(){
    slide.src = img[currentIndex];

}

function nextSlide(){
    currentIndex++

    if(currentIndex >= img.length){
        currentIndex = 0;
    }
    showSlide();
}

function prevSlide(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex = img.length - 1;


    }
  showSlide();
}