const reviews = [
    {
        id:1,
        name: "Digambar",
        job: "web developer",
        img: "./devv1.jpg",
        text:
            "fully developed",
    },
    {
        id:2,
        name: "sharad",
        job: "Singer",
        img: "./dev2.jpg",
        text:
            "Romantic songs",
    },
    {
        id:3,
        name: "sagar",
        job: "crickter",
        img: "./dev3.jpg",
        text:
            "Love to play cricket",
    },
    {
        id:4,
        name: "piyush",
        job: "competitor",
        img: "./dev4.jpg",
        text:
            "Upsc aspirant",
    },
    {
        id:5,
        name: "satyam",
        job: "enterprenur",
        img: "./dev2.jpg",
        text:
            "Indias biggest bull",
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
   

}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
        
    }
    showPerson();
});

prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
        
    }
    showPerson();
});

randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });