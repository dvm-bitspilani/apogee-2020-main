// import Flickity from 'flickity';

const speakersName = [
  "Susan Bennett",
  "Prof Muhammad Yunus",
  "Nitin Gadkari",
  "Kiran Karnik",
  "Ruth Kedar",
];

const speakerDetails = [
  "Susan Bennett, the original voice of Siri, is known to don numerous hats: being a voice-over artist, musician, actor and well-renowned key-note speaker. Over the span of her versatile and wide-ranging career, she has brought to life advertisements for various brands including the likes of  Coca Cola, McDonald's, Ford, etc. As a musician, she currently performs with two bands, Boomers Gone Wild and Canyon Ladies.",
  "𝗣𝗿𝗼𝗳. 𝗠𝘂𝗵𝗮𝗺𝗺𝗮𝗱 𝗬𝘂𝗻𝘂𝘀 is a Bangladeshi social entrepreneur, banker, economist, and civil society leader whose work in 𝗺𝗶𝗰𝗿𝗼𝗳𝗶𝗻𝗮𝗻𝗰𝗲 and 𝗺𝗶𝗰𝗿𝗼𝗰𝗿𝗲𝗱𝗶𝘁 has revolutionized the entrepreneurship landscape in Bangladesh and the world. Founder of the Grameen Bank, he won the Nobel Peace Prize in 2006 and is also part of the Board of Directors in the UN Foundations.",
  "Shri Nitin Gadkari - Minister, ex-President of BJP, industrialist, and a political prodigy - started his campaign back in 1996 and now has an experience of over 20 years. From building a series of roads and highways to implementing India's first six-lane concrete, high-speed expressway, he worked with a vision of making India one of the world's top developed countries, also ensuring a reformed and flawless Indian political system on the way.",
  "Kiran Karnik, Padma Shri, is currently in the Scientific Advisory to the PMO and is serving as a Director in the Central Board of Directors at RBI. From being one of the early members of ISRO to heading NASSCOM and making it into a preeminent association, he has indeed had an illustrious career. Credited with bringing Discovery Channel and Animal Planet to South Asia, his contributions to the outsourcing and broadcasting industries have been immense.",
  "Ruth Kedar is an artist and designer, best known for her imaginative design behind the GOOGLE Logo (May '99 - Sep '15). With a degree in Architecture from Technion and Masters in design from Stanford University, she was a Visiting Art Professor at Stanford University. Her remarkable and creative knowledge in composition paved her path towards becoming one of the leading designers of the Adobe Deck and later even designing the award-winning Analog Deck and Duolog Deck.",
];

let speakerImgUrl = [
  "assets/speakers/11.png",
  "assets/speakers/22.png",
  "assets/speakers/33.png",
  "assets/speakers/44.png",
  "assets/speakers/55.png",
  // 'assets/speakers/3.png'
];

for (var x = 0; x < 2; x++) {
  function createCard() {
    var screenSize = window.innerWidth;
    var carousel = document.querySelectorAll(".carousel")[x];
    //console.log(carousel);
    for (let i = 0; i < speakersName.length; i++) {
      carousel.innerHTML +=
        `<div class="card">
                                    <div class="name speakers-name"> ${speakersName[i]}
        </div>
                                    <div class="image">
                                    </div>
                                    <div class="description">` +
        speakerDetails[i] +
        `</div>
                                </div>`;
      var img = document.querySelectorAll(
        ".speakers .speakers-body .carousel .card .image"
      );
      //console.log(img);
      // console.log(img );
      img[x * speakersName.length + i].style.backgroundImage =
        `url(` + speakerImgUrl[i] + `)`;
    }
  }
  createCard();

  var elem = document.querySelectorAll(".carousel")[x];
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    //   groupcell: 3,
    //   lazyload: 3
    // pageDots: false,
    // selectedAttraction: 0.01,
    // friction: 0.1
  });

  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity(".carousel", {
    // options
  });
}
