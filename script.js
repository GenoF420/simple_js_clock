
const myLabel = document.getElementById('myLabel');

update();
setInterval(update, 1000);

function update() {
    let date = new Date();
    myLabel.innerText = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours(date);
        let minutes = date.getMinutes(date);
        let seconds = date.getSeconds(date);
        let amOrPm = hours >= 12 ? "pm" : "am";
        hours = (hours % 12) || 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }

    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? '0' + time : time;
    }
}