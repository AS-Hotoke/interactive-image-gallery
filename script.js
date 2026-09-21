// Typewriter Effect

let text = "Welcome to My Image Gallery";
let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typewriter").innerHTML +=
            text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);
    }
}

typeWriter();


// Lightbox

let images = document.querySelectorAll(".gallery img");

let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let close = document.getElementById("close");

images.forEach(function(image) {

    image.addEventListener("click", function() {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

close.addEventListener("click", function() {

    lightbox.style.display = "none";

});


// Preloader

window.addEventListener("load", function() {

    document.getElementById("preloader").style.display = "none";

});