setInterval(refreshTime, 1000);

function refreshTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    let s =`${day}/${month}/${year} ${hour}:${minutes}:${second}`;
    document.getElementById("time").innerHTML = s;
}