/* handle mouseover on side menu */
let index = document.querySelector(".index");
console/log(index);
let navtext = document.querySelector(".left-nav-text");

index.addEventListener("mouseenter", () => {
  index.style.cursor = "pointer";
  index.style.color = "#fff";
  index.style.opacity = "1";

  navtext.style.cursor = "pointer";
  navtext.style.color = "#fff";
  navtext.style.opacity = "1";
})

navtext.addEventListener("mouseenter", () => {
  index.style.cursor = "pointer";
  index.style.color = "#fff";
  index.style.opacity = "1";

  navtext.style.cursor = "pointer";
  navtext.style.color = "#fff";
  navtext.style.opacity = "1";
})
