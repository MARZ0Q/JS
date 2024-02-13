
const clock = document.getElementById('clock');

function getTheDate(){
    const date = new Date();
    clock.innerHTML = `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')}`
    setTimeout(getTheDate,1000)
}

getTheDate()
