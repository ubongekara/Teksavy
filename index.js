const menuBtn = document.getElementById("menubtn");
const hiddenMenu = document.getElementById("hiddenmenu");
const toTopBtn = document.getElementById("toTop");


menuBtn.addEventListener("click", ()=> {
   hiddenMenu.classList.toggle("opacity-0");
   hiddenMenu.classList.toggle("-translate-y-5");
   hiddenMenu.classList.toggle("pointer-events-none");
})

window.addEventListener("scroll", ()=> {
   if(document.documentElement.scrollTop > 300 ){
      toTopBtn.classList.remove("hidden");
   } else {
      toTopBtn.classList.add("hidden");
   }

   
})

toTopBtn.addEventListener("click", ()=> {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   })
})

      
document.addEventListener("DOMContentLoaded", ()=> {
   const sections = document.querySelectorAll(".fade-in");
   sections.forEach((section, index) => {
      section.style.transitionDelay = `${index * 600}ms`;
      setTimeout(() => {
         section.classList.remove("opacity-0", "translate-y-10");
          section.classList.add("opacity-100", "translate-y-0");
      },);
   })
})

