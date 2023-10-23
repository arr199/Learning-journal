const viewMoreBtn = document.getElementById("view-more-btn")
const elements = document.querySelectorAll(".hidden")

document.addEventListener("click",function(e){
    
    if (e.target.id == "view-more-btn"){
       
        if (e.target.textContent == "view more") {
        
        viewMoreBtn.textContent = "hide"
        for (let i of elements){
           
            i.classList.toggle("hidden")
            i.style.animationName = "disolve"
            i.style.animationDuration = "1.5s";
        }
       
        }
        
        else if (e.target.textContent == "hide" ){
            
            viewMoreBtn.textContent = "view more"
            for (let i of elements){
                i.classList.toggle("hidden")
    
            }}
    
    } 
})


