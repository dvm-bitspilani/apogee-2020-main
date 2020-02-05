/* handle mouseover on side menu */
let index = []
let navtext = []

document.querySelectorAll(".index").forEach(item => {
  index.push(item);
})

document.querySelectorAll(".left-nav-text").forEach(item => {
  navtext.push(item);
})

for (let i = 0; i < index.length; i++) {
  index[i].onmouseover = () => {
    index[i].style.opacity = "1";
    index[i].style.color = "#fff";

    navtext[i].style.opacity = "1";
    navtext[i].style.color = "#fff";
  }

  navtext[i].onmouseover = () => {
    index[i].style.opacity = "1";
    index[i].style.color = "#fff";

    navtext[i].style.opacity = "1";
    navtext[i].style.color = "#fff";
  }

  index[i].onmouseout = () => {
    index[i].style.opacity = "0.6";
    index[i].style.color = "rgb(223, 223, 223)";

    navtext[i].style.opacity = "0.6";
    navtext[i].style.color = "rgb(223, 223, 223)";
  }

  navtext[i].onmouseout = () => {
    index[i].style.opacity = "0.6";
    index[i].style.color = "rgb(223, 223, 223)";

    navtext[i].style.opacity = "0.6";
    navtext[i].style.color = "rgb(223, 223, 223)";
  }
}

// navtext.forEach((item) => {
//   item.onmouseover = () => {
//     item.style.opacity = "1";
//     item.style.color = "#fff";
//   }
//   item.onmouseout = () => {
//     item.style.opacity = "0.6";
//     item.style.color = "rgb(223, 223, 223)";
//   }
// })


/* Generate contacts and inject into HTML */
const contactData = {
  dvm: {
    name: "Manish Thakur",
    post: "Website and Registrations",
    phone: "+91-9876543210",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  pcr: {
    name: "Manish Thakur",
    post: "Website and Registrations",
    phone: "+91-9876543210",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  pep: {
    name: "Manish Thakur",
    post: "Website and Registrations",
    phone: "+91-9876543210",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  spons: {
    name: "Manish Thakur",
    post: "Website and Registrations",
    phone: "+91-9876543210",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  recnacc: {
    name: "Manish Thakur",
    post: "Website and Registrations",
    phone: "+91-9876543210",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  adp: {
    name: "Manish Thakur",
    post: "Website and Registrations",
    phone: "+91-9876543210",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  controls: {
    name: "Manish Thakur",
    post: "Website and Registrations",
    phone: "+91-9876543210",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  pres: {
    name: "Manish Thakur",
    post: "Website and Registrations",
    phone: "+91-9876543210",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  gensec: {
    name: "Manish Thakur",
    post: "Website and Registrations",
    phone: "+91-9876543210",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  }
}

let contactBody = document.querySelector(".contact-body");
for (let costaan in contactData) {
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.src = contactData[costaan].image;

  let name = document.createElement("div");
  name.classList.add("name");
  name.innerHTML = contactData[costaan].name;

  let department = document.createElement("div");
  department.classList.add("department");
  department.innerHTML = contactData[costaan].post;

  let phone = document.createElement("div");
  phone.classList.add("phone");
  phone.innerHTML = contactData[costaan].phone;

  let email = document.createElement("div");
  email.classList.add("email");
  email.innerHTML = contactData[costaan].email;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(department);
  card.appendChild(phone);
  card.appendChild(email);
  contactBody.appendChild(card);
}

