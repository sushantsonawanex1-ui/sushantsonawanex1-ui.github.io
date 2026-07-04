// Typing Effect

const words = [
    "AI Enthusiast",
    "Python Developer",
    "Web Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    if(!typing) return;

    const current = words[wordIndex];

    if(isDeleting){
        typing.textContent = current.substring(0,charIndex--);
    }else{
        typing.textContent = current.substring(0,charIndex++);
    }

    let speed = isDeleting ? 70 : 120;

    if(!isDeleting && charIndex === current.length+1){
        isDeleting = true;
        speed = 1500;
    }

    if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex+1)%words.length;
    }

    setTimeout(typeEffect,speed);
}

typeEffect();


// Smooth Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(60px)";
sec.style.transition="all .8s ease";

observer.observe(sec);

});


// Navbar Background on Scroll

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#0d1117";

}else{

header.style.background="#161b22";

}

});
