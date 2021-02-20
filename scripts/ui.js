/* handle mouseover on side menu */
let index = [];
let navtext = [];

document.querySelectorAll(".index").forEach((item) => {
  index.push(item);
});

document.querySelectorAll(".left-nav-text").forEach((item) => {
  navtext.push(item);
});

for (let i = 0; i < index.length; i++) {
  index[i].onmouseover = () => {
    index[i].style.opacity = "1";
    index[i].style.color = "#fff";

    navtext[i].style.opacity = "1";
    navtext[i].style.color = "#fff";
  };

  navtext[i].onmouseover = () => {
    index[i].style.opacity = "1";
    index[i].style.color = "#fff";

    navtext[i].style.opacity = "1";
    navtext[i].style.color = "#fff";
  };

  index[i].onmouseout = () => {
    index[i].style.opacity = "0.6";
    index[i].style.color = "rgb(223, 223, 223)";

    navtext[i].style.opacity = "0.6";
    navtext[i].style.color = "rgb(223, 223, 223)";
  };

  navtext[i].onmouseout = () => {
    index[i].style.opacity = "0.6";
    index[i].style.color = "rgb(223, 223, 223)";

    navtext[i].style.opacity = "0.6";
    navtext[i].style.color = "rgb(223, 223, 223)";
  };
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
    name: "Devansh Agarwal",
    post: "Website and Payments",
    phone: "+91-9897940889",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Devansh.jpg",
  },
  pcr: {
    name: "Spandan Gupta",
    post: "Registrations and Correspondence",
    phone: "+91-9560955649",
    email: "pcr@bits-apogee.org",
    image: "assets/contact/Spandan.png",
  },
  pep: {
    name: "Kishan Panpalia",
    post: "Guest Lectures and Paper Presentation",
    phone: "+91-8830002504",
    email: "pep@bits-apogee.org guestlectures@bits-apogee.org",
    image: "assets/contact/Kishan.png",
  },
  spons: {
    name: "Aakash Shankar",
    post: "Sponsorship and Marketing",
    phone: "+91-9900376968",
    email: "sponsorship@bits-apogee.org",
    image: "assets/contact/Aakash.jpg",
  },
  adp: {
    name: "Vaibhav Bansal",
    post: "Publicity and Online Partnerships",
    phone: "+91-8805711081",
    email: "collaborations@bits-apogee.org",
    image: "assets/contact/Vaibhav.jpg",
  },
  recnacc: {
    name: "Sunidhi Garg",
    post: "Reception and Accomodation",
    phone: "+91-9319762194",
    email: "recnacc@bits-apogee.org",
    image: "assets/contact/Sunidhi.png",
  },
  controls: {
    name: "Darsh Shah",
    post: "Registration, Events and Projects",
    phone: "+91-9480150305",
    email: "controls@bits-apogee.org",
    image: "assets/contact/Darsh.png",
  },
  pres: {
    name: "Rahul Bubna",
    post: "President, Student Union",
    phone: "+91-8952824766",
    email: "president@pilani.bits-pilani.ac.in",
    image: "assets/contact/rahul.jpg",
  },
  gensec: {
    name: "V Abhishek Balaji",
    post: "General Secretary, Student Union",
    phone: "+91-9566142660",
    email: "gensec@pilani.bits-pilani.ac.in",
    image: "assets/contact/abhishek.jpg",
  },
};

let contactBody = document.querySelector(".contact-body");
for (let costaan in contactData) {
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.src = contactData[costaan].image;

  let name = document.createElement("div");
  name.classList.add("name");
  name.classList.add("contact-name");
  name.innerHTML = contactData[costaan].name;

  let department = document.createElement("div");
  department.classList.add("department");
  department.innerHTML = contactData[costaan].post;

  let phone = document.createElement("div");
  phone.classList.add("phone");
  phone.innerHTML = `<a href="tel:${contactData[costaan].phone}">${contactData[costaan].phone}<a>`;

  let email = document.createElement("div");
  email.classList.add("email");
  email.innerHTML = `<a href="mailto:"${contactData[costaan].email}">${contactData[costaan].email}</a>`;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(department);
  card.appendChild(phone);
  card.appendChild(email);
  contactBody.appendChild(card);
}
