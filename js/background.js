const images=[
    "0.png",
    "1.png",
    "2.png"
];

const todayImage=images[Math.floor(Math.random()*images.length)];

console.log(todayImage);

const background=document.createElement("img");


background.src=`img/${todayImage}`;
console.log(background);
document.body.appendChild(background);