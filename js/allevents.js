let ALL_EVENTS = [];
const EVENTS_IMG_URL = {
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "assets/kernel-events/aic.png",
  11: "",
  14: "",
  15: "",
  16: "assets/kernel-events/sms.jpg",
  17: "assets/kernel-events/ml.png",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "assets/kernel-events/robosoc.jpg",
  25: "assets/kernel-events/icl.jpg",
  26: "",
  27: "",
  28: "",
  29: "",
  30: "",
  31: "",
  32: "",
  33: "",
  34: "",
  35: "",
  36: "",
  37: "",
  38: "",
  39: "",
  40: "",
  41: "",
  42: "",
  43: "",
  44: "",
  45: "",
  46: "",
  47: "",
  48: "",
  49: "",
  50: "",
  51: "",
  52: "",
  53: "",
  54: "",
  55: "",
  56: "",
  58: "",
  59: "",
  62: "",
  63: "",
  64: "",
  65: "",
  66: "",
  67: "",
  68: "",
  69: "",
  70: "",
  71: "",
  72: "",
  73: "",
  74: "",
  75: "",
  76: "",
  77: "",
  78: "",
  79: "",
  80: "",
  81: "",
  82: "",
  83: "",
  84: "",
  85: "",
  86: "",
  87: "assets/kernel-events/qed.jpg",
  88: "",
  89: "",
  90: "",
  91: "",
  92: "assets/kernel-events/armageddon.jpg",
  93: "",
  95: "",
  96: "",
  97: "",
  98: "",
  99: "",
  101: "",
  102: "",
  103: "",
  104: "",
  105: "",
  106: "",
  107: "",
  108: "",
  109: "",
  110: "",
  111: "",
  112: "",
  113: "",
  114: "",
  115: "",
  116: "",
  117: "",
  118: "",
  119: "",
  120: "",
  121: "",
  122: "",
};

function openmodal(e) {
  for (var i = 0; i < 106; i++) {
    if (response.events[i].id == e) {
      document.getElementsByClassName("modal")[0].style.top = "50%";
      document.getElementById("details").innerHTML = response.events[i].about;
      document.getElementById("contacts").innerHTML =
        response.events[i].contact;
    }
  }
}

function closemodal() {
  document.getElementsByClassName("modal")[0].style.top = "-200vh";
}

const mapEvents = (name, detail, id) => {
  const body = document.getElementById("allEventsBody");
  const card = document.createElement("div");
  card.className = "card";
  const eventName = document.createElement("div");
  eventName.className = "allEvents-name";
  eventName.innerHTML = name;
  card.appendChild(eventName);
  const eventContent = document.createElement("div");
  eventContent.className = "allEvents-content";
  const eventImg = document.createElement("img");
  eventImg.src = EVENTS_IMG_URL[id] || "assets/all-events/apogee.jpg";
  eventContent.appendChild(eventImg);
  const eventContentSpan = document.createElement("span");
  const eventDetail = document.createElement("div");
  eventDetail.className = "allEvents-details";
  //if(name==="Armageddon") detail = "<p>Counter Strike Global Offensive is a multiplayer first-person shooter in which a team of terrorists battle against a team of counter-terrorists, In Competitive mode of the game two teams of 5 are pitted against each other where the terrorists try to plant a bomb at either of the two sites(A or B), While the counter-terrorists try to prevent that. The tournament will be a knockout based tournament , all the matches until the Semi-Finals will be BO1 where the map will be chosen based on a veto process, The Semi-Final and the Final will be BO3.</p>"
  const concatenatedDetail =
    detail.length <= 157 ? detail : detail.substring(0, 150) + "...</p>";
  eventDetail.innerHTML = concatenatedDetail;
  eventContentSpan.appendChild(eventDetail);
  const viewDetailButton = document.createElement("div");
  viewDetailButton.className = "view-detail-button";
  viewDetailButton.innerHTML = "View Details";
  // viewDetailButton.setAttribute(
  //   "onclick",
  //   `events_dialog({
  //     name: ${name},
  //     desc: ${detail.substring(3, detail.length - 4)}
  //   })`
  // );
  viewDetailButton.onclick = function () {
    events_dialog({
      name: name,
      desc: detail.substring(3, detail.length - 4),
    });
  };
  eventContentSpan.appendChild(viewDetailButton);
  eventContent.appendChild(eventContentSpan);
  card.appendChild(eventContent);
  body.appendChild(card);
};
