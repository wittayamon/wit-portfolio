const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const spot=document.getElementById("spotlight");
addEventListener("pointermove",e=>{spot.style.left=e.clientX+"px";spot.style.top=e.clientY+"px"});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target)}
}),{threshold:.12});
document.querySelectorAll(".reveal").forEach((el,i)=>{el.style.transitionDelay=Math.min(i%4,3)*70+"ms";observer.observe(el)});

const phrases=["python manage.py runserver","docker compose up -d","building useful things..."];
const target=document.getElementById("typing");
let p=0,c=0,del=false;
function type(){
  const text=phrases[p];
  target.textContent=text.slice(0,c);
  if(!del){
    c++;
    if(c>text.length){del=true;setTimeout(type,1100);return}
  }else{
    c--;
    if(c<0){c=0;del=false;p=(p+1)%phrases.length}
  }
  setTimeout(type,del?32:68)
}
type();