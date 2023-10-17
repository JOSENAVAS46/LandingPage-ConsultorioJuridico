document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    function showSlide(n) {
        slides[currentSlide].style.display = "none";
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = "block";
    }

    prevButton.addEventListener("click", function () {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener("click", function () {
        showSlide(currentSlide + 1);
    });

    showSlide(currentSlide);
});
