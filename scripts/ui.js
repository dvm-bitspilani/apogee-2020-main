/* handle mouseover on side menu */
let index = document.querySelectorAll(".index");
let navtext = document.querySelectorAll(".left-nav-text");

index.forEach((item) => {
  item.onmouseover = () => {
    item.style.opacity = "1";
    item.style.color = "#fff";
  }
  item.onmouseout = () => {
    item.style.opacity = "0.6";
    item.style.color = "rgb(223, 223, 223)";
  }
})

navtext.forEach((item) => {
  item.onmouseover = () => {
    item.style.opacity = "1";
    item.style.color = "#fff";
  }
  item.onmouseout = () => {
    item.style.opacity = "0.6";
    item.style.color = "rgb(223, 223, 223)";
  }
})
/* ---------------------------- */
