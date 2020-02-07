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