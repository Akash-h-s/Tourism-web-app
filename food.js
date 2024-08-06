document.querySelectorAll(".s1").forEach(star => {
    star.addEventListener("click", () => {
        star.classList.toggle("orange");
    });
});
let but=document.querySelector(".logout");
        let body=document.querySelector("#bd");
        but.addEventListener("click",()=>{
            bd.innerText="";
            bd.innerText="Thank you for visiting our Website...Visit again"
            bd.style.fontSize="40px";
            bd.style.textAlign="center";
            bd.style.marginTop="20%";
            
        });
let about=document.querySelector(".about");
about.addEventListener("click",()=>{window.location.href="about.html"});
let order=document.querySelectorAll(".book1");
for(bk of order){
bk.addEventListener("click",()=>{
window.location.href="book.html";

});}
let con=document.querySelector(".contact");
con.addEventListener("click",()=>{window.location.href="about.html"});