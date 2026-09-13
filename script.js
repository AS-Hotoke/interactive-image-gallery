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