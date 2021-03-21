function events_dialog(input, comingFromKindstore) {
  console.log(comingFromKindstore);
  //console.log(input.desc.length)
  //console.log(document.getElementsByClassName("events-dialogue-container"));
  // document.getElementsByClassName("events-dialogue-container")[0].style.top =
  //   window.pageYOffset + "px";
  document.getElementsByClassName(
    "events-dialogue-container"
  )[0].style.display = "flex";
  setTimeout(() => {
    document.getElementsByClassName(
      "events-dialogue-container"
    )[0].style.opacity = "1";
  }, 100);

  setTimeout(() => {
    document.getElementsByClassName("events-dialogue-box")[0].style.transform =
      "translateY(0vh)";
  }, 500);
  document.getElementsByClassName("events-dialogue-text")[0].innerHTML =
    input.desc;
  if (comingFromKindstore) {
    // document
    //   .getElementsByClassName("box-redeem-button")[1]
    //   .setAttribute("onClick", `cancelDetails(${input.desc});`);
    document.getElementsByClassName("box-redeem-button")[1].onclick = () =>
      cancelDetails(input.desc);
  }
  //   setTimeout(() => {
  //     document.getElementsByClassName("events-dialogue-text")[0].style.transform =
  //       "translateY(0vh)";
  //   }, 100);
  // document.getElementsByClassName('events-dialogue-text')[0].style.transform = 'translateY(0vh)'
  //disableScroll();
}
function close_events(comingFromKindstore) {
  document.getElementsByClassName(
    "events-dialogue-container"
  )[0].style.opacity = "0";

  setTimeout(() => {
    document.getElementsByClassName("events-dialogue-box")[0].style.transform =
      "translateY(-100vh)";
    document.getElementsByClassName(
      "events-dialogue-container"
    )[0].style.display = "none";
  }, 200);
  if (comingFromKindstore) {
    const firstStep = document.querySelector(".first-step");
    const secondStep = document.querySelector(".second-step");
    firstStep.style.display = "block";
    secondStep.style.display = "none";
  }
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

const cancelDetails = (desc) => {
  const eventsDialogText = document.querySelector(".events-dialogue-text");
  const firstStep = document.querySelector(".first-step");
  const secondStep = document.querySelector(".second-step");
  eventsDialogText.innerHTML = desc;
  firstStep.style.display = "block";
  secondStep.style.display = "none";
};
