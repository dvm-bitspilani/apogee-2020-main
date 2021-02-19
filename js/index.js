const EVENT_DATE = new Date("March 20, 2021 23:59:59").getTime();

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
    const promise = new Promise((resolve) => (this.resolve = resolve));
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
  fx.setText(phrases[counter]).then(() => { });
  counter = (counter + 1) % phrases.length;
};

const aboutUs = document.querySelector("#aboutUs > .heading > span");
const events = document.querySelector("#events > .heading > span");
const contact = document.querySelector("#contact > .heading > span");
const videos = document.querySelector("#videos > .heading > span");
const speakers = document.querySelector("#speakers > .heading > span");
const home = document.querySelector("#home .register-button");

let isAboutUsAnimated = false;
let isEventsAnimated = false;
let isContactAnimated = false;
let isVideoAnimated = false;
let isSpeakersAnimated = false;

let activePage = "home";

const isInViewport = function (elem) {
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

const setActivePage = (idAsString) => {
  activePage = idAsString;
  str = activePage + "Pagination";
  document.querySelectorAll(".individual").forEach((ele) => {
    if (ele.id == str) {
      ele.classList.add("opacity1Class");
    } else {
      ele.classList.remove("opacity1Class");
    }
  });
  // console.log(activePage);
};

window.addEventListener(
  "wheel",
  function (e) {
    if (isInViewport(aboutUs)) {
      setActivePage("aboutUs");
      if (!isAboutUsAnimated) {
        phrases = ["About Us"];
        el = aboutUs;
        fx = new TextScramble(el);
        isAboutUsAnimated = true;
        next();
      }
    } else if (isInViewport(contact)) {
      setActivePage("contact");
      if (!isContactAnimated) {
        phrases = ["Contact Us"];
        el = contact;
        fx = new TextScramble(el);
        isContactAnimated = true;
        next();
      }
    } else if (isInViewport(videos)) {
      setActivePage("videos");
      if (!isVideoAnimated) {
        phrases = ["Videos"];
        el = videos;
        fx = new TextScramble(el);
        isVideoAnimated = true;
        next();
      }
    } else if (isInViewport(speakers)) {
      setActivePage("speakers");
      if (!isSpeakersAnimated) {
        phrases = ["Speakers"];
        el = speakers;
        fx = new TextScramble(el);
        isSpeakersAnimated = true;
        next();
      }
    } else if (isInViewport(home)) {
      setActivePage("home");
    } else if (isInViewport(events)) {
      setActivePage("events");
      if (!isEventsAnimated) {
        phrases = ["Events"];
        el = events;
        fx = new TextScramble(el);
        isEventsAnimated = true;
        next();
      }
    }
  },
  false
);

window.addEventListener(
  "scroll",
  function (e) {
    if (isInViewport(aboutUs)) {
      setActivePage("aboutUs");
      if (!isAboutUsAnimated) {
        phrases = ["About Us"];
        el = aboutUs;
        fx = new TextScramble(el);
        isAboutUsAnimated = true;
        next();
      }
    } else if (isInViewport(contact)) {
      setActivePage("contact");
      if (!isContactAnimated) {
        phrases = ["Contact Us"];
        el = contact;
        fx = new TextScramble(el);
        isContactAnimated = true;
        next();
      }
    } else if (isInViewport(videos)) {
      setActivePage("videos");
      if (!isVideoAnimated) {
        phrases = ["Videos"];
        el = videos;
        fx = new TextScramble(el);
        isVideoAnimated = true;
        next();
      }
    } else if (isInViewport(speakers)) {
      setActivePage("speakers");
      if (!isSpeakersAnimated) {
        phrases = ["Speakers"];
        el = speakers;
        fx = new TextScramble(el);
        isSpeakersAnimated = true;
        next();
      }
    } else if (isInViewport(home)) {
      setActivePage("home");
    } else if (isInViewport(events)) {
      setActivePage("events");
      if (!isEventsAnimated) {
        phrases = ["Events"];
        el = events;
        fx = new TextScramble(el);
        isEventsAnimated = true;
        next();
      }
    }
  },
  false
);

const setPaginationDisplay = (value) => {
  document.getElementById("pagination").style.display = value;
};

const navigateTo = (id) => {
  console.log(document.getElementById("allEvents").style.display);
  if (
    document.getElementById("allEvents").style.display &&
    document.getElementById("allEvents").style.display !== "none"
  ) {
    console.log("hey");
    togglePage("allEvents", "main", true);
    setPaginationDisplay("flex");
    setTimeout(
      () =>
        document
          .getElementById(id)
          .scrollIntoView({ block: "start", behavior: "smooth" }),
      1000
    );
    return;
  }
  document
    .getElementById(id)
    .scrollIntoView({ block: "start", behavior: "smooth" });
  if (menu.style.display == "flex") {
    toggleHamMenu();
  }

  if (id == "aboutUs") {
    setActivePage("aboutUs");
    if (!isAboutUsAnimated) {
      phrases = ["About Us"];
      el = aboutUs;
      fx = new TextScramble(el);
      isAboutUsAnimated = true;
      next();
    }
  } else if (id == "contact") {
    setActivePage("contact");
    if (!isContactAnimated) {
      phrases = ["Contact Us"];
      el = contact;
      fx = new TextScramble(el);
      isContactAnimated = true;
      next();
    }
  } else if (id == "videos") {
    setActivePage("videos");
    if (!isVideoAnimated) {
      phrases = ["Videos"];
      el = videos;
      fx = new TextScramble(el);
      isVideoAnimated = true;
      next();
    }
  } else if (id == "speakers") {
    setActivePage("speakers");
    if (!isSpeakersAnimated) {
      phrases = ["Speakers"];
      el = speakers;
      fx = new TextScramble(el);
      isSpeakersAnimated = true;
      next();
    }
  } else if (id == "home") {
    setActivePage("home");
  } else if ((id = "events")) {
    setActivePage("events");
    if (!isEventsAnimated) {
      phrases = ["Events"];
      el = events;
      fx = new TextScramble(el);
      isEventsAnimated = true;
      next();
    }
  }
};

const togglePage = (from, to, bgToggle) => {
  toggleHamMenu();
  const fromPage = document.getElementById(from);
  const toPage = document.getElementById(to);
  const background = document.getElementsByClassName("backgrounds")[0];
  fromPage.style.animation = "glitch-transition 0.5s";
  if (bgToggle) {
    if (background.style.display !== "none") {
      background.style.animation = "glitch-transition 0.5s";
    }
  }

  setTimeout(() => {
    fromPage.style.display = "none";
    if (bgToggle) {
      if (background.style.display !== "none") {
        background.style.display = "none";
      } else {
        background.style.display = "initial";
        background.style.animation = "glitch-transition 0.5s";
      }
    }
    toPage.style.display = "inherit";
    toPage.style.animation = "glitch-transition 0.5s";
    setTimeout(() => {
      toPage.style.animation = "none";
      fromPage.style.animation = "none";
      background.style.animation = "none";
    }, 500);
  }, 500);
};

function Ticker(elem) {
  elem.lettering();
  this.done = false;
  this.cycleCount = 5;
  this.cycleCurrent = 0;
  this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;':\"<>?,./`~".split(
    ""
  );
  this.charsCount = this.chars.length;
  this.letters = elem.find("span");
  this.letterCount = this.letters.length;
  this.letterCurrent = 0;

  this.letters.each(function () {
    var $this = $(this);
    $this.attr("data-orig", $this.text());
    $this.text("-");
  });
}

Ticker.prototype.getChar = function () {
  return this.chars[Math.floor(Math.random() * this.charsCount)];
};

Ticker.prototype.reset = function () {
  this.done = false;
  this.cycleCurrent = 0;
  this.letterCurrent = 0;
  this.letters.each(function () {
    var $this = $(this);
    $this.text($this.attr("data-orig"));
    $this.removeClass("done");
  });
  this.loop();
};

Ticker.prototype.loop = function () {
  var self = this;

  this.letters.each(function (index, elem) {
    var $elem = $(elem);
    if (index >= self.letterCurrent) {
      if ($elem.text() !== " ") {
        $elem.text(self.getChar());
        $elem.css("opacity", Math.random());
      }
    }
  });

  if (this.cycleCurrent < this.cycleCount) {
    this.cycleCurrent++;
  } else if (this.letterCurrent < this.letterCount) {
    var currLetter = this.letters.eq(this.letterCurrent);
    this.cycleCurrent = 0;
    currLetter
      .text(currLetter.attr("data-orig"))
      .css("opacity", 1)
      .addClass("done");
    this.letterCurrent++;
  } else {
    this.done = true;
  }

  if (!this.done) {
    requestAnimationFrame(function () {
      self.loop();
    });
  } else {
    setTimeout(function () {
      self.reset();
    }, 750);
  }
};

$words = $(".word");

$words.each(function () {
  var $this = $(this),
    ticker = new Ticker($this).reset();
  $this.data("ticker", ticker);
});

const EVENTS_URL = "https://www.bits-apogee.org/registrations/events_details/";

const ALL_EVENTS_NAMES = [];

const getDetailsForEvents = (namesArr) => {
  const body = {
    name: namesArr
  }
  fetch(EVENTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response);
    });
};

const getAllEvents = async () => {
  fetch(EVENTS_URL)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log("------------------");
      ALL_EVENTS = response[0].events;
      ALL_EVENTS.map((ev) => {
        ALL_EVENTS_NAMES.push(ev.name);
      });
      console.log(ALL_EVENTS_NAMES);
    }, console.error);
};

document.getElementsByClassName("wrapper")[0].style.display = "none";
window.onload = () => {
  console.log("hey1");
  setTimeout(() => {
    document.getElementsByClassName("robot_container")[0].style.top =
      "-1000vh";

    document.getElementsByClassName("robot_base")[0].style.opacity = "0";
    // document.getElementsByClassName("robot_body")[0].style.position =
    //   "absolute";
    setTimeout(() => {
      document.getElementsByClassName("wrapper")[0].style.display = "";
      document.getElementById("loader").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
      }, 1000);
    }, 1000);
    console.log("hey2");
    setTime();
  }, 5400);
  console.log("hey3");
  getAllEvents();
  // fetch("https://bits-apogee.org/registrations/events/Registration")
  //   .then((data) => {
  //     console.log("hey4");
  //     return data.json();
  //   })
  //   .then((response) => {
  //     console.log("hey5");
  //     console.log(response);
  //     ALL_EVENTS = [...response.events];
  //     ALL_EVENTS.map((event) => {
  //       mapEvents(
  //         event.name,
  //         (event.about.substring(
  //           event.about.indexOf("DESCRIPTION") + 11,
  //           150
  //         ) || event.about) + "...",
  //         event.id
  //       );
  //     });
  //   }, console.error);
};

// const sections = [...document.getElementsByTagName("section")];
// const newSections = sections.filter((item) => {
//   switch (item.id) {
//     case "loader":
//       //console.log(item.id);
//       break;
//     case "":
//       //console.log(item.id);
//       break;
//     case "events":
//       //console.log(item.id);
//       break;
//     case "allEvents":
//       //console.log(item.id);
//       break;
//     default:
//       return item;
//   }
// });

// const dots = document.getElementsByClassName("rectangle");

// const activateDots = () => {

//   for (let [index, section] of newSections.entries()) {
//     if (
//       section.getBoundingClientRect().top <= document.documentElement.clientHeight/4 &&
//       section.getBoundingClientRect().bottom >= document.documentElement.clientHeight/4
//     ) {
//       for (let dot of dots) dot.style.opacity = "0.6";
//       dots[index].style.opacity = "1";
//     }

//   }
// };

// window.addEventListener("scroll", (event) => {
//   activateDots();
//   //console.log(newSections[2].getBoundingClientRect().top, newSections[1].getBoundingClientRect().bottom)
// });
