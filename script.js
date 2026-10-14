const slideShowElements=document.querySelectorAll(".slideElement");

let countElement=1;

setInterval(()=>{
    countElement ++;
    
    let currentElement=document.querySelector(".current");
    currentElement.classList.remove("current");

    if(countElement > slideShowElements.length){
        slideShowElements[0].classList.add("current");
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }
    
},2000);
