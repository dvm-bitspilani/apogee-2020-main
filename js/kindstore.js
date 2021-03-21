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
    })
    .catch((err) => {
      console.log("catch");
      console.log(err);
    });
};
