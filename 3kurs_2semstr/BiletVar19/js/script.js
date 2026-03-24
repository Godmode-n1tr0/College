
  setInterval (() => {
    const now = new Date();

    const formatTime = (value) =>{
        return `${(now.getUTCHours() + value).toString().padStart(2, '0')}:${now.getUTCMinutes().toString().padStart(2, '0')}:${now.getUTCSeconds().toString().padStart(2, '0')}`;
    } 
    document.querySelector('.item_kaliningrad').textContent = formatTime(-2) // UTC-2
    document.querySelector('.item_vladivostok').textContent = formatTime(10) // UTC+10
    document.querySelector('.item_moscow').textContent = formatTime(3) // UTC+3
    document.querySelector('.item_london').textContent = formatTime(0) // UTC+0
    document.querySelector('.item_New_Yourk').textContent = formatTime(-4) // UTC-4
 }, 100)