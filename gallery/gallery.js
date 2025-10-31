let slideIndex = 1;
showSlides(slideIndex);

// Next / previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Preview image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// gets the vh property from css into js
function vh(percent) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}

// gets the vw property from css into js
function vw(percent) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (percent * w) / 100;
}

function showSlides(n) {
    // gets relevant html elements
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    // loops around if user tries to go beyond the number of images in the gallery
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // hides all the images not being shown so it looks like there is only one image
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // resets the active preview image
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    // set the preview version of the current image so it can be highlighted
    dots[slideIndex-1].className += " active";
    // sets the visible descriptor to the alt value of the image
    captionText.innerHTML = dots[slideIndex-1].alt;
}

// once the pages is loaded, adds checks for user input to run the functions above
$(document).ready( () => {
    // sets up taller images so they can be altered for thinner aspect ratios
    document.querySelectorAll(".blur > img").forEach(slide => {
        if (slide.height > vh(60)) {
            slide.className = "tall"
        }
    });
    $("#prev").on("click", () => {
        plusSlides(-1);
    });
    $("#next").on("click", () => {
        plusSlides(1);
    });
    $(".demo").each(function(index, selector) {
        $(selector).on("click", function() {
            currentSlide(index+1);
        });
    });
});