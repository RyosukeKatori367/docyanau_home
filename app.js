const button = document.querySelector("button")
const header = document.querySelector(".header")
const hamb = document.querySelector(".hamb")
button.addEventListener("click", () => {
        header.classList.toggle("active");
        hamb.classList.toggle('active');
    });
hamb.addEventListener("click", () => {
        header.classList.toggle("active");
        hamb.classList.toggle('active');
    });

