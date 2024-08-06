let button=document.querySelector(".button");
let inco=document.querySelector(".inco");
button.addEventListener("click",()=>{
    if (button.innerText.trim() === "" || inco.innerText.trim() === "") {
        inco.innerText = "Please enter the information.";
    }
    
    inco.style.backgroundColor="white";
    inco.innerText="Booked Succuessfully... Thank you";
    
});