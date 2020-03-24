const EVENT_DATE = new Date("March 27, 2020 23:59:59").getTime();

const setTime = () => {
  const timeNow = new Date().getTime();

  let days = Math.floor((EVENT_DATE - timeNow) / (1000 * 60 * 60 * 24));

  if (days < 0) days = "00";

  document.getElementById("countdown").innerHTML = days + " DAYS";
};

// Control state of hamburger menu
const hamButton = document.getElementsByClassName("hamburger-icon")[0];
const menu = document.getElementsByClassName("hamburger-menu")[0];
const hamItem = document.getElementsByClassName("ham-item");
menu.style.display = "none";

const toggleHamMenu = () => {
  if (menu.style.display == "none") {
    menu.style.display = "flex";
    setTimeout(() => {
      hamButton.className += " close";
      menu.style.opacity = 1;
      for (let i = 0; i < hamItem.length; i++) {
        hamItem[i].style.animation =
          "slideIn 0.25s linear " + (0.4 + 0.1 * i) + "s forwards";
      }
    }, 50);
  } else {
    hamButton.classList.remove("close");
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.display = "none";
    }, 500);
  }
};

hamButton.addEventListener("click", toggleHamMenu);

// TextScramble
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

let phrases = [];

let el;
let fx;

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {});
  counter = (counter + 1) % phrases.length;
};

const aboutUs = document.querySelector("#aboutUs > .heading > span");
const events = document.querySelector("#events > .heading > span");
const contact = document.querySelector("#contact > .heading > span");
const videos = document.querySelector("#videos > .heading > span");

let isAboutUsAnimated = false;
let isEventsAnimated = false;
let isContactAnimated = false;
let isVideoAnimated = false;

const isInViewport = function(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener(
  "wheel",
  function(e) {
    if (isInViewport(aboutUs) && !isAboutUsAnimated) {
      phrases = ["About Us"];
      el = aboutUs;
      fx = new TextScramble(el);
      isAboutUsAnimated = true;
      next();
    }
    if (isInViewport(events) && !isEventsAnimated) {
      phrases = ["Events"];
      el = events;
      fx = new TextScramble(el);
      isEventsAnimated = true;
      next();
    }
    if (isInViewport(contact) && !isContactAnimated) {
      phrases = ["Contact Us"];
      el = contact;
      fx = new TextScramble(el);
      isContactAnimated = true;
      next();
    }
    if (isInViewport(videos) && !isVideoAnimated) {
      phrases = ["Videos"];
      el = videos;
      fx = new TextScramble(el);
      isVideoAnimated = true;
      next();
    }
  },
  false
);

const navigateTo = id => {
  if (document.getElementById('allEvents').display !== 'none') {
    togglePage('allEvents', 'main', true);
    setTimeout(() => document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" }), 1000);
    return;
  }
  document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
  if (menu.style.display == "flex") {
    toggleHamMenu();
  }
  if (id == "aboutUs" && !isAboutUsAnimated) {
    phrases = ["About Us"];
    el = aboutUs;
    fx = new TextScramble(el);
    isAboutUsAnimated = true;
    next();
  }
  if (id == "events" && !isEventsAnimated) {
    phrases = ["Events"];
    el = events;
    fx = new TextScramble(el);
    isEventsAnimated = true;
    next();
  }
  if (id == "contact" && !isContactAnimated) {
    phrases = ["Contact Us"];
    el = contact;
    fx = new TextScramble(el);
    isContactAnimated = true;
    next();
  }
};


const togglePage = (from, to, bgToggle) => {
  toggleHamMenu();
  const fromPage = document.getElementById(from);
  const toPage = document.getElementById(to);
  const background = document.getElementsByClassName('backgrounds')[0];
  fromPage.style.animation = 'glitch-transition 0.5s';
  if (bgToggle) {
    if (background.style.display !== 'none') {
      background.style.animation = 'glitch-transition 0.5s';
    }
  }

  setTimeout(() => {
    fromPage.style.display = 'none';
    if (bgToggle) {
      if (background.style.display !== 'none') {
        background.style.display = 'none';
      } else {
        background.style.display = 'initial';
        background.style.animation = 'glitch-transition 0.5s';
      }
    }
    toPage.style.display = 'inherit';
    toPage.style.animation = 'glitch-transition 0.5s';
    setTimeout(() => {
      toPage.style.animation = 'none';
      fromPage.style.animation = 'none';
      background.style.animation = 'none';
    }, 500)
  }, 500);
}


window.onload = () => {
  // setTime();
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 5400);
  fetch("https://bits-apogee.org/registrations/events/Registration")
  .then(data => {
    return data.json();
  })
  .then(response => {
    console.log(response);
    ALL_EVENTS = [...response.events];
    ALL_EVENTS.map(event => {
      mapEvents(event.name, (event.about.substring(event.about.indexOf('DESCRIPTION') + 11, 150) || event.about) + '...', event.id)
    })
  }, console.error);
};
