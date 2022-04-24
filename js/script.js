let days = document.querySelector(".first-timer-span");
let hours = document.querySelector(".second-timer-span");
let minutes = document.querySelector(".third-timer-span");
let seconds = document.querySelector(".fourth-timer-span");
let burger = document.querySelector(".burger-button");
let body = document.querySelector("body");
let headerUl = document.querySelector(".header-ul");
let headerLi = document.querySelectorAll(".header-li");
let headerUlActive = document.querySelector(".header-ul-active");
let rangeNum = document.querySelector(".counter-count");
let importantDay = new Date("jun 1, 2022 00:00:00").getTime();
let timerId = setInterval(function timeChange() {
    let myTime = new Date().getTime();
    let distance = importantDay - myTime;
    
    let day = Math.floor(distance/(1000*60*60*24));
    let hour = Math.floor((distance %(1000*60*60*24)) / (1000*60*60));
    let minute = Math.floor((distance %(1000*60*60)) / (1000*60));
    let second = Math.floor((distance%(1000*60)) / 1000);

    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.textContent = minute;
    seconds.textContent = second;
    if (distance = 0) {
        clearInterval(timerId);
    }
}, 1000);

burger.addEventListener("click", function burgerToggle() {
    headerUl.classList.toggle("header-ul-active");
    burger.classList.toggle("burger-button-active");
})
if (matchMedia) {
    let screen = window.matchMedia("(min-width: 760px)");
    screen.addListener(changes);
    changes(screen);
}
function changes(screen) {
    if(screen.matches) {
        headerUl.classList.remove("header-ul-active")
    }
}
document.querySelector(".header-range").addEventListener("mousemove", function() {
    rangeNum.innerHTML = this.value;
  });