 document.querySelectorAll(".s1").forEach(star => {
            star.addEventListener("click", () => {
                star.classList.toggle("orange");
            });
        });
        let but=document.querySelector(".button11");
        let body=document.querySelector("#bd");
        but.addEventListener("click",()=>{
            bd.innerText="";
            bd.innerText="Thank you for visiting our Website...Visit again"
            bd.style.fontSize="40px";
            bd.style.textAlign="center";
            bd.style.marginTop="20%";
            
        })
