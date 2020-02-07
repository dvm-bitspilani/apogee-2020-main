const speakersName = ["Alan Ematge","Stephen Morse","Alan Emtage"];

const speakerDetails = [
    "1The man who laid the foundation of the internet. Creator of world's first search engine - ARCHIE. I wrote a piece of code that gave birth to a multibillion-dollar industry.",
    "2The man who laid the foundation of the internet. Creator of world's first search engine - ARCHIE. I wrote a piece of code that gave birth to a multibillion-dollar industry.",
    "3The man who laid the foundation of the internet. Creator of world's first search engine - ARCHIE. I wrote a piece of code that gave birth to a multibillion-dollar industry.",
    "1The man who laid the foundation of the internet. Creator of world's first search engine - ARCHIE. I wrote a piece of code that gave birth to a multibillion-dollar industry.",
    "2The man who laid the foundation of the internet. Creator of world's first search engine - ARCHIE. I wrote a piece of code that gave birth to a multibillion-dollar industry.",
    "3The man who laid the foundation of the internet. Creator of world's first search engine - ARCHIE. I wrote a piece of code that gave birth to a multibillion-dollar industry."
]

let speakerImgUrl = [ 
    'assets/speakers/1.png', 
    'assets/speakers/2.png', 
    'assets/speakers/3.png',
    'assets/speakers/1.png', 
    'assets/speakers/2.png', 
    'assets/speakers/3.png'
];

function createCard(){
    var screenSize = window.innerWidth;
    var carousel = document.querySelectorAll(".carousel")[0];
    console.log(carousel);
    for(let i=0; i< speakersName.length ; i++){
        carousel.innerHTML +=  `<div class="card">
                                    <div class="name">`+
                                    speakersName[i]+
                                    `</div>
                                    <div class="image">
                                    </div>
                                    <div class="description">`+
                                    speakerDetails[i]+
                                    `</div>
                                </div>`;
    var img = document.querySelectorAll(".speakers .speakers-body .carousel .card .image");
    // console.log(img );
    img[i].style.backgroundImage = `url(` + speakerImgUrl[i] + `)`;
    }
}

createCard();

// <section class="videos">
// <div class="heading">
//   <span>VIDEOS</span>
// </div>
// </section>

// <section class="speakers">
// <div class="heading">
// <span>SPEAKERS</span>
// </div>

// <div class="speakers-body">
// <div class="carousel"></div>
// <div class="nav">
//   <div class="buttons">
//   <div class="l-arrow"></div>
//     <div class="dot"></div>
//     <div class="dot"></div>
//   <div class="r-arrow"></div>
//   </div>
// </div>
// </div>
// </section>