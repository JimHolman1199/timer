let active = false;

function start() {
    if (active) {
        let timer = document.getElementById('timer').innerHTML,
            arr = timer.split(':'),
            hour = arr[0],
            min = arr[1],
            sec = arr[2];

        if (sec == 59) {
            if (min == 59) {
                hour++;
                min = 0;
                if (hour < 10) hour = '0' + hour;
            } else {
                min++;
            }
            if (min < 10) min = '0' + min;
            sec = 0;
        } else {
            sec++
            if (sec < 10) sec = '0' + sec;
        }
        document.getElementById('timer').innerHTML = hour + ':' + min + ':' + sec;
        setTimeout(start, 1000)
    }
}

function changeState() {
    if (active == false) {
        active = true;
        start();
        document.getElementById("control").innerHTML = 'PAUSE';
    }
    else {
        active = false;
        document.getElementById("control").innerHTML = 'START';
    }
}
function reset() {
    document.getElementById('timer').innerHTML = '00' + ':' + '00' + ':' + '00';
}


