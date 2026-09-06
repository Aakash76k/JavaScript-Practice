

let count = 0;
let increasebtn = document.getElementById("increase");
let decreasebtn = document.getElementById("decrease");
let resetbtn = document.getElementById("reset");

let countdisplay = document.getElementById("count");


increasebtn.addEventListener("click",function(){
    count++;
    countdisplay.textContent = count;

});

decreasebtn.addEventListener("click",function(){
    count--;
    countdisplay.textContent = count;
});
resetbtn.addEventListener("click",function(){
    count = 0;
    countdisplay.textContent = count;
});

