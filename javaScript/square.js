 console.log(document.querySelector("#square").getBoundingClientRect());
 
let x = 0;
let y = 0;
let carR = document.querySelector("#square");
document.addEventListener("keydown",function(event){
   if(event.key === "ArrowRight" && x < 14){
       x++;
       carR.style.left = x + "em";
   }
   if (event.key === "ArrowLeft" && x > 0){
       x--;
       carR.style.left = x + "em";
   }
    if(event.key === "ArrowUp" && y > 0){
       y--;
       carR.style.top  = y + "em";
   }
    if(event.key === "ArrowDown" && y<12){
        y++;
        carR.style.top  = y + "em";
    }
   
    console.log(event.key);
});   
    
    

/* console.log(document.querySelector("#square").getBoundingClientRect());
let x = 0;
let y = 0;
let carR = document.querySelector("#square");
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight" && x<14) {
    x++;
    carR.style.left = x + "em";
  }
  if (event.key === "ArrowLeft" && x > 0) {
    x--;
    carR.style.left = x + "em";
  }
  if (event.key === "ArrowUp" && y > 0) {
    y--;
    carR.style.top = y + "em";
  }
  if (event.key === "ArrowDown" && y<12) {
    y++;
    carR.style.top = y + "em";
  }
  console.log(event.key);
});  */

 



  
  
  
  
  
  
