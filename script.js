const video=document.getElementById('heroVideo');
if(video){
  video.addEventListener('ended',()=>{video.currentTime=0;video.play().catch(()=>{});});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden) video.play().catch(()=>{});});
}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
if(menu)menu.addEventListener('click',()=>{nav.classList.toggle('open');nav.style.display=nav.classList.contains('open')?'flex':'';nav.style.position='absolute';nav.style.top='68px';nav.style.right='22px';nav.style.padding='20px';nav.style.flexDirection='column';nav.style.background='rgba(5,5,5,.96)';});
