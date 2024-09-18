const header = document.querySelector(".head");
const lien1 = document.querySelector("#link1");
const lien2 = document.querySelector("#link2");
const lien3 = document.querySelector("#link3");
const lien4 = document.querySelector("#link4");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 50) {
    header.classList.add("header");
  } else {
    header.classList.remove("header");
  }
  if (window.scrollY > 831) {
    lien1.style.color = "white";
    lien2.style.color = "white";
    lien3.style.color = "white";
    lien4.style.color = "white";
  } else {
    lien1.style.color = "black";
    lien2.style.color = "black";
    lien3.style.color = "black";
    lien4.style.color = "black";
  }
});
