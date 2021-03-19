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
