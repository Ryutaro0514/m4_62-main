const header=document.querySelector("header")
const menu=document.querySelector(".menu")

menu.addEventListener("click",()=>{
    header.classList.toggle("isActive")
})