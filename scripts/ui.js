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
    phone: "+91-7989477976",
    email: "webmaster@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  pcr: {
    name: "Piyush Bhatt",
    post: "Registrations and Correspondence",
    phone: "+91-8445006699",
    email: "pcr@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  pep: {
    name: "Yogyata Somani",
    post: "Guest Lectures and Paper Presentation",
    phone: "+91-9413965731",
    email: "pep@bits-apogee.org guestlectures@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  spons: {
    name: "Eshan Bhaskar",
    post: "Sponsorship and Marketing",
    phone: "+91-8861828086",
    email: "sponsorship@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  adp: {
    name: "Lakshay Nagpal",
    post: "Publicity and Online Partnerships",
    phone: "+91-9803223248",
    email: "adp@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  recnacc: {
    name: "Achintya Tewari",
    post: "Reception and Accomodation",
    phone: "+91-9740650739",
    email: "recnacc@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  controls: {
    name: "Swaroop",
    post: "Registration, Events and Projects",
    phone: "+91-9652388604",
    email: "controls@bits-apogee.org",
    image: "assets/contact/Business_Man-512.png"
  },
  pres: {
    name: "Rahul Bubna",
    post: "President, Student Union",
    phone: "+91-8952824766",
    email: "president@pilani.bits-pilani.ac.in",
    image: "assets/contact/Business_Man-512.png"
  },
  gensec: {
    name: "V Abhishek Balaji",
    post: "General Secretary, Student Union",
    phone: "+91-9566142660",
    email: "gensec@pilani.bits-pilani.ac.in",
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

