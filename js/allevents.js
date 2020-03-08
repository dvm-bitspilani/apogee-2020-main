fetch("https://bits-apogee.org/registrations/events/Registration")
  .then(data => {
    return data.json();
  })
  .then(response => {
    console.log(response);
  }, console.error);

function openmodal(e) {
  fetch("https://bits-apogee.org/registrations/events/Registration")
    .then(data => {
      return data.json();
    })
    .then(response => {
      console.log(response);
      for (var i = 0; i < 106; i++) {
        if (response.events[i].id == e) {
          document.getElementsByClassName("modal")[0].style.top = "50%";
          document.getElementById("details").innerHTML =
            response.events[i].about;
          document.getElementById("contacts").innerHTML =
            response.events[i].contact;
        }
      }
    }, console.error);
}

function closemodal() {
  document.getElementsByClassName("modal")[0].style.top = "-200vh";
}
