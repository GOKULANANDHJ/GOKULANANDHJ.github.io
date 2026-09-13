window.addEventListener("load",()=>{setTimeout(()=>document.getElementById("loader").style.display="none",650)});
const menu=document.querySelector(".menu"), nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const video=document.querySelector(".hero-video");
video?.addEventListener("error",()=>video.style.display="none");
