var isStop = true;
var s = 0;
var m = 0;
var hr = 0;
var ms = 0;
var lapTimes = [];

function start() {
    if (isStop == true) {
        isStop = false;
        timer();
    }
}

function timer() {
    s = parseInt(s);
    m = parseInt(m);
    hr = parseInt(hr);
    ms = parseInt(ms);

    if (isStop == false) {
        ms++;
        if (s == 60) {
            s = 0;
            m++;
        }
        if (m == 60) {
            m = 0;
            hr++;
        }
        if (ms == 60) {
            ms = 0;
            s++;
        }

        if (s < 10) {
            s = "0" + s;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (hr < 10) {
            hr = "0" + hr;
        }
        if (ms < 10) {
            ms = "0" + ms;
        }

        stopwatch.innerHTML = hr + ":" + m + ":" + s + ":" + ms;
        setTimeout(timer, 16);
    }
}

function stop() {
    isStop = true;
}

function Reset() {
    isStop = true;
    s = 0;
    m = 0;
    hr = 0;
    ms = 0;
    stopwatch.innerHTML = "00:00:00:00";
    lapTimes = [];
    updateLapList();
}

function lap() {
    if (isStop == false) {
        const lapTime = `${hr}:${m}:${s}:${ms}`;
        lapTimes.push(lapTime);
        updateLapList();
    }
}

function updateLapList() {
    const lapListElement = document.getElementById('lapList');
    lapListElement.innerHTML = '';

    lapTimes.forEach((lapTime, index) => {
        const lapItem = document.createElement('li');
        lapItem.innerText = `Lap ${index + 1}: ${lapTime}`;
        lapListElement.appendChild(lapItem);
    });
}