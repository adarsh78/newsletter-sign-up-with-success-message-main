const inputElement = document.querySelector('input[name="email"]');
const subscribeBtn = document.querySelector(".subscribeBtn");
const dismissBtn = document.querySelector(".dismissBtn");
const mainContent = document.querySelector("main");
const thanksContent = document.querySelector(".successMsg");
const errorMsg = document.querySelector(".error");

subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const emailValue = inputElement.value.trim();
    
    if(validateEmail(emailValue)){
        mainContent.style.display = "none";
        thanksContent.style.display = "flex";
        thanksContent.querySelector("span").textContent = emailValue;  
        errorMsg.style.display = "none";  
    }
    else{
        inputElement.style.border = "1px solid hsl(4, 100%, 67%)";  
        errorMsg.style.display = "block";     
    }
})

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

dismissBtn.addEventListener("click", () => {
    mainContent.style.display = "flex";
    thanksContent.style.display = "none"
    inputElement.value = "";
})
