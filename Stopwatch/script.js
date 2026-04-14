let startTime = 0;
let elasped = 0;
let timer = null;

function update(){
    let total = Date.now() - startTime + elasped;
    
    let second = Math.floor(total / 1000) % 60;
    let minute = Math.floor(total / (1000 * 60)) % 60;
    let hour = Math.floor(total / (1000 * 60 * 60));
    
    let s = String(second).padStart(2, "0");
    let m = String(minute).padStart(2, "0");
    let h = String(hour).padStart(2, "0");

    document.getElementById("clock").textContent = `${h}:${m}:${s}`;
}

document.getElementById("start").onclick = function(){
    if(timer !== null) return;
    
    startTime = Date.now();
    timer = setInterval(update, 1000);
} 
document.getElementById("stop").onclick = function(){
    clearInterval(timer);
    timer = null;
    elasped += Date.now() - startTime;
}
document.getElementById("reset").onclick = function () {
    clearInterval(timer);
    timer = null;
    startTime = 0;
    elasped = 0;
    document.getElementById("clock").textContent = "00:00:00";
};