const selectMenu = document.querySelectorAll('select'),
    button = document.querySelector('#set-btn'),
    setBox = document.querySelector('.set-alerm');


let alarmTime;


for (let i = 12; i > 0; i--) {
    // Confused 🫣
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}


for (let i = 59; i > 0; i--) {
    // Confused 🫣
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}


for (let i = 2; i > 0; i--) {
    // Confused 🫣
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {

    /// time acces 
    let today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds(),
        anpm = "AM";


    // 12 hour   
    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }

    // hour value 0 if
    h = h == 0 ? 12 : h;

    //adding 0 before 09 ! 08 ! clear 10!! 
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // publish running time
    let runningTime = document.querySelector('.running-time');

    runningTime.innerHTML = `${h} : ${m} : ${s} ${ampm}`;
    
    if (alarmTime == `${h} : ${m} ${ampm}`) {
       console.log("Alarm ringing");
    }
    
}, 1000);

function setAlarm() {
    let time = `${selectMenu[0].value} : ${selectMenu[1].value} : ${selectMenu[2].value}`;
    
    if (time.includes("Hour") || (time.includes("Minutes")) || (time.includes("AM/PM"))) {
        return alert(" Please, Select a valid time to set alarm!");
    }
    
    alarmTime = time;
    setBox.classList.add("disable");
    button.innerHTML = "Clear";

}

button.addEventListener('click', setAlarm);