const slideImage = document.querySelector(".image");

function checkClass() {
    if (slideImage.classList.contains("image-slide")) {
        return slideImage.classList.remove("image-slide");
    } else {
        return slideImage.classList.add("image-slide");
    }
}

slideImage.addEventListener("click", checkClass);