//sounds
let bassDrumHit = new Audio('./sounds/bassDrumHit.mp3');
let hardKickDrum = new Audio('./sounds/hardKickDrum.mp3');
let bassWithCymbal = new Audio('./sounds/bassWithCymbal.mp3');
let shortHits = new Audio('./sounds/shortHits.mp3');
let crash = new Audio('./sounds/crash.mp3');
let fastWoosh = new Audio('./sounds/fastWoosh.mp3');
let sounds=[bassDrumHit,hardKickDrum,bassWithCymbal,shortHits,crash,fastWoosh];

window.addEventListener('load',()=>{
    //connecting to server via sockets
    let socket=io();
    socket.on("connect",()=>{
        console.log("Connected to server via sockets!")
    })
    //images of instruments
    let bassDrum=document.getElementById("bassDrumHit");
    let hardKick=document.getElementById("hardKickDrum");
    let bassCymbal=document.getElementById("bassWithCymbal");
    let hits=document.getElementById("shortHits");
    let crashElement=document.getElementById("crash");
    let woosh=document.getElementById("fastWoosh");
    let instrumentsList=[bassDrum,hardKick,bassCymbal,hits,crashElement,woosh];
    //adding EventListeners to images of instruments
    for (let i=0; i<instrumentsList.length; i++){
        instrumentsList[i].addEventListener("click",()=>{
            let clickedSound=i;
            //emitting the information of which instrument is clicked to server
            socket.emit('clickedInstrument',i);
        })
    }
    //receiving the information from server and playing the required instrument
    socket.on('clickedSound',(data)=>{
        sounds[data].play();
    })
})



