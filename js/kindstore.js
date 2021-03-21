function redeem(x) {}

const togglePage = (from, to, bgToggle) => {
  //toggleHamMenu();
  const fromPage = document.getElementById(from);
  const toPage = document.getElementById(to);
  const background = document.getElementsByClassName("backgrounds")[0];
  fromPage.style.animation = "glitch-transition 0.3s";
  if (bgToggle) {
    if (background.style.display !== "none") {
      background.style.animation = "glitch-transition 0.3s";
    }
  }

  setTimeout(() => {
    fromPage.style.display = "none";
    if (bgToggle) {
      if (background.style.display !== "none") {
        background.style.display = "none";
      } else {
        background.style.display = "initial";
        background.style.animation = "glitch-transition 0.3s";
      }
    }
    toPage.style.display = "inherit";
    toPage.style.animation = "glitch-transition 0.3s";
    setTimeout(() => {
      toPage.style.animation = "none";
      fromPage.style.animation = "none";
      background.style.animation = "none";
    }, 300);
  }, 300);
};
const closeMessage = () => {
  const messageBox = document.getElementsByClassName("message-box")[0];
  messageBox.style.animation = "slideOut 0.5s";
  setTimeout(() => {
    document.getElementById("message").innerHTML = "";
    messageBox.style.animation = "none";
    messageBox.style.display = "none";
  }, 500);
};

const confirmDetails = () => {
  const eventsDialogText = document.querySelector(".events-dialogue-text");
  const firstStep = document.querySelector(".first-step");
  const secondStep = document.querySelector(".second-step");
  eventsDialogText.innerHTML =
    "<p>Are you sure you want to redeem this coupon?</p>";
  firstStep.style.display = "none";
  secondStep.style.display = "flex";
};

const registerForKindstore = () => {
  const name = document.getElementsByName("name")[0].value;
  const email = document.getElementsByName("email_id")[0].value;
  const phone = document.getElementsByName("phone")[0].value;
  const body = new FormData();
  body.append("name", name);
  body.append("email", email);
  body.append("phone", phone);
  const body2 = {
    name: name,
    email: email,
    phone: phone,
  };
  events_dialog(
    {
      desc: "<p>Registering you... Please Wait</p>",
    },
    false,
    true,
    true
  );
  fetch("https://bits-apogee.org/kindstore/register/", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body2),
    redirect: "follow",
  })
    .then((res) => {
      console.log(res);
      if (!res.ok) return Promise.reject(res.json());
      return res.json();
    })
    .then((data) => {
      console.log(data);
      close_events();
      setTimeout(() => {
        events_dialog(
          {
            desc: `<p>${data.message}</p>`,
          },
          false,
          true,
          true
        );
        setTimeout(() => {
          close_events();
          togglePage("form-section", "store-section", true);
        }, 600);
      }, 300);
    })
    .catch((err) => {
      console.log(err);
      Promise.resolve(err).then((data) => {
        console.log(data);
        close_events();
        setTimeout(() => {
          events_dialog(
            {
              desc: `<p>${data.message}</p>`,
            },
            false,
            true,
            false
          );
        }, 300);
      });
    });
};

function events_dialog(input, comingFromKindstore, register, hideCloseButton) {
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
    document.getElementsByClassName("close_button_container")[0].style.display =
      "flex";
    document.getElementsByClassName("first-step")[0].style.display = "block";
    document.getElementsByClassName("second-step")[0].style.display = "none";
  }
  if (register) {
    document.getElementsByClassName("first-step")[0].style.display = "none";
    document.getElementsByClassName("second-step")[0].style.display = "none";
    if (hideCloseButton)
      document.getElementsByClassName(
        "close_button_container"
      )[0].style.display = "none";
    else
      document.getElementsByClassName(
        "close_button_container"
      )[0].style.display = "flex";
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

const redeemCoupon = () => {
  
}
