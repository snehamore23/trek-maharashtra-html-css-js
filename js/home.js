/* ================= MOBILE MENU ================= */

function toggleMenu(){
    let menu = document.getElementById("navMenu");
let auth = document.querySelector(".auth-links-containar");

menu.classList.toggle("active");
auth.classList.toggle("active");
}


/* ================= IMAGE SLIDER ================= */

const images = [
    "./images/home/img1.jpg",
    "./images/home/img2.jpg",
    "./images/home/img3.jpg",
    "./images/home/img4.jpg"
];

let index = 0;

window.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".hero-img");

    if(slider){
        setInterval(()=>{
            index = (index + 1) % images.length;
            slider.src = images[index];
        },3000);
    }

    /* ================= COUNTER ANIMATION ================= */

    animateCounter('count-forts', 350);
    animateCounter('count-users', 1200);

    /* ================= CARD DATA LOAD ================= */

    loadCards("card-container1", cardData1);
    loadCards("card-container2", cardData2);
    loadCards("card-container3", cardData3);
    loadCards("card-container4", cardData4);

});


/* ================= RANDOM TREK ================= */

const trekList = ["Raigad", "Harishchandragad", "Kalsubai Peak", "Lohagad", "Rajmachi", "Visapur"];

function generateTrek() {
    const randomIndex = Math.floor(Math.random() * trekList.length);

    document.getElementById('trek-result').innerText =
        `Recommended: ${trekList[randomIndex]} Fort! ⛰️`;
}

/* ================= COUNTER FUNCTION ================= */

function animateCounter(id, targetValue) {

    let currentCount = 0;
    const element = document.getElementById(id);

    if(!element) return;

    const timer = setInterval(() => {

        currentCount += Math.ceil(targetValue / 40);

        if (currentCount >= targetValue) {
            element.innerText = `${targetValue}+`;
            clearInterval(timer);
        } else {
            element.innerText = currentCount;
        }

    }, 50);
}


/* ================= CARD DATA ================= */

const cardData1 = [
  { img: "./images/home/part1-img1.jpg", title: "CORPORATE TRIPS & TREKS" },
  { img: "./images/home/part1-img4.jpg", title: "CUSTOMIZED TREKS/TRIPS" },
  { img: "./images/home/part1-img5.jpg", title: "FOR B-SCHOOLS & COLLEGES" },
  { img: "./images/home/part1-img6.jpg", title: "BIKE & BACKPACKING TRIPS" }
];

const cardData2 = [
  { img: "./images/home/img5.jpeg", title: "Sinhagad Fort" },
  { img: "./images/home/img6.jpg", title: "Pratapgad Fort" },
  { img: "./images/home/img7.jpg", title: "RatnagiriRatnadurg Fort " },
  { img: "./images/home/img8.jpg", title: "Shivneri Fort" }
];

const cardData3 = [
  { img: "./images/home/img9.jpg", title: " Loghagad Fort " },
  { img: "./images/home/img10.jpeg", title: "Murud janjira" },
  { img: "./images/home/img11.jpg", title: "Purandar Fort" },
  { img: "./images/home/img12.jpeg", title: "Torna Fort" }
];

const cardData4 = [
  { img: "./images/home/img13.jpeg", title: "Harihar Fort" },
  { img: "./images/home/img14.jpg", title: "Kalsubai Peak" },
  { img: "./images/home/img15.jpg", title: "Ratangad Fort" },
  { img: "./images/home/img16.jpeg", title: "Harishchandragad trek " }
];


/* ================= LOAD CARDS ================= */

function loadCards(containerId, cardData){

    const container = document.getElementById(containerId);

    if(!container) return;

    container.innerHTML = cardData.map(card => `
        <div style="
            background:white;
            width:270px;
            border-radius:10px;
            overflow:hidden;
            text-align:center;
            padding:10px;
            box-shadow:0 4px 8px rgba(0,0,0,0.2);
            transition:0.3s;
        "
        onmouseover="this.style.transform='scale(1.05)'"
        onmouseout="this.style.transform='scale(1)'"
        >

            <img src="${card.img}"
                 alt="${card.title}"
                 style="
                   height:200px;
                   width:100%;
                   object-fit:cover;
                   border-radius:8px;
                 ">

            <p style="margin-top:10px;font-weight:bold;">
                ${card.title}
            </p>
        </div>
    `).join("");
}
function loadVideo(element, videoId){
    element.innerHTML = `
        <iframe 
        width="100%" 
        height="250"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1"
        frameborder="0"
        allowfullscreen>
        </iframe>
    `;
}

function toggleTheme(){
    document.body.classList.toggle("dark-theme");

    const btn = document.querySelector(".theme-btn");

    if(document.body.classList.contains("dark-theme")){
        btn.innerText = "☀️ Light Mode";
    }else{
        btn.innerText = "🌙 Dark Mode";
    }
}