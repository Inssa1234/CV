const header = document.querySelector(".head");

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 50){
        header.classList.add("header");
    }else{
        header.classList.remove("header");
    }
});
