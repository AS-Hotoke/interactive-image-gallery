
// =========================
// TYPEWRITER EFFECT
// =========================

let text = "Welcome to My Image Gallery";
let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typewriter").innerHTML +=
            text.charAt(index);

        index++;

        setTimeout(typeWriter, 80);
    }
}

typeWriter();


// =========================
// GALLERY
// =========================

let galleryItems = document.querySelectorAll(".gallery-item");

let lightbox = document.getElementById("lightbox");

let lightboxImg = document.getElementById("lightbox-img");

let close = document.getElementById("close");

let next = document.getElementById("next");

let prev = document.getElementById("prev");

let imageNumber = document.getElementById("image-number");

let imageTitle = document.getElementById("image-title");

let likeBtn = document.getElementById("likeBtn");


// Current image

let currentIndex = 0;


// Image titles

let titles = [
    "Dreamscape",
    "Nature",
    "Adventure",
    "Moments",
    "Colours",
    "Memories",
    "Creative",
    "Inspiration"
];


// =========================
// OPEN LIGHTBOX
// =========================

function openLightbox(index) {

    currentIndex = index;

    updateLightbox();

    lightbox.style.display = "flex";

    document.body.style.overflow = "hidden";
}


// =========================
// UPDATE LIGHTBOX
// =========================

function updateLightbox() {

    let image = galleryItems[currentIndex].querySelector("img");

    lightboxImg.src = image.src;

    imageNumber.innerText =
        (currentIndex + 1) + " / " + galleryItems.length;

    imageTitle.innerText =
        titles[currentIndex];

    likeBtn.classList.remove("liked");

    likeBtn.innerText = "♡";
}


// =========================
// CLICK GALLERY IMAGE
// =========================

galleryItems.forEach(function(item, index) {

    item.addEventListener("click", function() {

        openLightbox(index);

    });

});


// =========================
// NEXT IMAGE
// =========================

next.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= galleryItems.length) {

        currentIndex = 0;

    }

    updateLightbox();

});


// =========================
// PREVIOUS IMAGE
// =========================

prev.addEventListener("click", function() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryItems.length - 1;

    }

    updateLightbox();

});


// =========================
// CLOSE LIGHTBOX
// =========================

function closeLightbox() {

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";
}

close.addEventListener("click", closeLightbox);


// =========================
// CLICK OUTSIDE IMAGE
// =========================

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


// =========================
// LIKE BUTTON
// =========================

likeBtn.addEventListener("click", function() {

    likeBtn.classList.toggle("liked");

    if (likeBtn.classList.contains("liked")) {

        likeBtn.innerText = "♥";

    } else {

        likeBtn.innerText = "♡";

    }

});


// =========================
// KEYBOARD CONTROLS
// =========================

document.addEventListener("keydown", function(event) {

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {

            next.click();

        }

        if (event.key === "ArrowLeft") {

            prev.click();

        }

        if (event.key === "Escape") {

            closeLightbox();

        }

    }

});


// =========================
// PRELOADER
// =========================

window.addEventListener("load", function() {

    let preloader = document.getElementById("preloader");

    preloader.classList.add("hide");

});
