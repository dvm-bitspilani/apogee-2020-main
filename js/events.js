function events_dialog(input) {
  console.log(input.desc.length)
  console.log(document.getElementsByClassName("events-dialogue-container"));
  // document.getElementsByClassName("events-dialogue-container")[0].style.top =
  //   window.pageYOffset + "px";
  document.getElementsByClassName("events-dialogue-container")[0].style.display = "flex";

  setTimeout(() => {
    document.getElementsByClassName("events-dialogue-container")[0].style.opacity = "1";
    document.getElementsByClassName("events-dialogue-box")[0].style.transform = 'translateY(0vh)'
  }, 200)
  document.getElementsByClassName("events-dialogue-text")[0].innerHTML =
    input.desc;
  //   setTimeout(() => {
  //     document.getElementsByClassName("events-dialogue-text")[0].style.transform =
  //       "translateY(0vh)";
  //   }, 100);
  // document.getElementsByClassName('events-dialogue-text')[0].style.transform = 'translateY(0vh)'
  //disableScroll();
}
function close_events() {
  document.getElementsByClassName("events-dialogue-container")[0].style.opacity = "0";

  setTimeout(() => {
    document.getElementsByClassName("events-dialogue-box")[0].style.transform = 'translateY(-100vh)'
    document.getElementsByClassName("events-dialogue-container")[0].style.display = "none";
  }, 200)
  //   document.getElementsByClassName("events-dialogue-text")[0].style.transform =
  //     "translateY(-100vh)";

  //enableScroll();
}

// function disableScroll() {
//   // Get the current page scroll position
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
//     // if any scroll is attempted, set this to the previous value
//     (window.onscroll = function () {
//       window.scrollTo(scrollLeft, scrollTop);
//     });
// }

// function enableScroll() {
//   window.onscroll = function () {};
// }
