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
            
        })
      
        let ve=document.querySelectorAll(".vehi");
        let ho=document.querySelectorAll(".ho");
        let fo=document.querySelectorAll(".fo");
        for(v of ve){
        v.addEventListener("click",()=>{window.location.href="vehicles.html"});}
        for (h of ho){
        h.addEventListener("click",()=>{ window.location.href="hotels.html"});}
        for(f of fo){
        f.addEventListener("click",()=>{window.location.href="food.html"});}
        let me=document.querySelector(".me");
        me.addEventListener("click",()=>{window.location.href="about.html"}); 
        let con=document.querySelector(".contact");
con.addEventListener("click",()=>{window.location.href="about.html"});     
        