const clock = document.querySelector('#clock');
const date = document.querySelector('#date');

function getClock (){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
    const getdate = new Date().toLocaleDateString();
    const slicedDate = getdate.slice(0, getdate.length -1);
    date.innerText = slicedDate;
}

getClock();
getDate();
setInterval(getClock, 1000);