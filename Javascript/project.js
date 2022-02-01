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
