let cnt = 0;

document.getElementById("decrement-button").onclick = function() {
    cnt -= 1;
    document.getElementById("cnt").innerHTML = cnt;
}

document.getElementById("reset-button").onclick = function() {
    cnt = 0;
    document.getElementById("cnt").innerHTML = cnt;
}

document.getElementById("increment-button").onclick = function() {
    cnt += 1;
    document.getElementById("cnt").innerHTML = cnt;
}

