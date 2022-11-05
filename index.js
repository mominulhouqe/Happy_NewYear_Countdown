const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('min');
const secondEl = document.getElementById('second');
const newYears = '1 jan 2023';
function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const TotalSeconds = (newYearsDate - currentDate)/1000;
 
    const days = Math.floor(TotalSeconds /3600/24);
    const hours = Math.floor(TotalSeconds /3600) % 24;  
    const min = Math.floor(TotalSeconds /60) % 60; 
    const second = Math.floor( TotalSeconds )% 60;
    //   console.log(days,hours,min,second);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
     minEl.innerHTML = min;
    secondEl.innerHTML = second ;
}

countdown();
setInterval(countdown, 1000);