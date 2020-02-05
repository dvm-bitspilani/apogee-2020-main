const EVENT_DATE = new Date("March 27, 2020 23:59:59").getTime();


const setTime = () => {
    const timeNow = new Date().getTime();

    let days = Math.floor((EVENT_DATE - timeNow) / (1000 * 60 * 60 * 24));
    
    if (days < 0)
        days = '00';

    document.getElementById("countdown").innerHTML = days + ' DAYS';
}


window.onload = () => {
    setTime();
}