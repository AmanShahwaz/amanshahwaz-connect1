//                                      Parallax effect start

const parallax = document.getElementById("firstSection");
window.addEventListener("scroll", ()=>{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = 0.9*offset+"px";
})

//                                      Parallax effect end


//                                      Navbar start


var count = 0;
const btn = document.getElementById("menubtn");
var menu = document.getElementById("menu");
btn.addEventListener("click", ()=>{
    if(count==0){
    menu.style.top="10vh";
    count++;
    }
    else{
        menu.style.top="-100vh";
        count--;        
    }
})


 

function greet1(){
    document.getElementById("greetLine1").style.visibility="visible"; 
}
function greet2(){
    document.getElementById("greetLine2").style.visibility="visible"; 
}
function downArrow() {
    document.getElementById("downArrow").style.visibility="visible";
}
window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(greet1,1000);
    setTimeout(greet2,3000);
    setTimeout(downArrow,6200);
})