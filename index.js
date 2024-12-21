var main = document.getElementById("main");
var cursor = document.querySelector(".cursor");
var h1 = document.querySelector("h1");
var para = document.querySelector("p");

main.addEventListener("mousemove", function(event) {
    cursor.style.left = event.x+"px";
    cursor.style.top = event.y+"px";
    para.textContent = "X : "+event.x+" Y : "+event.y;

});

h1.addEventListener("click",function(){
    const array = ["Code is like poetry, short and concise.", "Code never lies, comments sometimes do.", "When in doubt, use brute force."];
    let random = Math.floor(Math.random() * array.length);
    h1.innerHTML = array[random];
});