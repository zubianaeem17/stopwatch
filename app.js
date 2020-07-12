var min=0;
var sec=0;
var msec=0;
var interval;
var minh = document.getElementById('min');
var sech = document.getElementById('sec');
var msech=document.getElementById('msec');
function timer() {
    msec++;
    msech.innerHTML=msec;
    if (msec >= 100){
        sec++;
        sech.innerHTML=sec;
        msec=0;
    } else if (sec>=60){
        min++;
        sec=0;
        minh.innerHTML=min;
    }
}
function start() {
    interval = setInterval(timer,10);
}
function stop() {
    clearInterval(interval)
}
function restart() {
    min=00;
    sec=00;
    msec=00;
    minh.innerHTML=min;
    sech.innerHTML=sec;
    msech.innerHTML=msec;
    stop()
}