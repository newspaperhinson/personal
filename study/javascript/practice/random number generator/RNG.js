document.getElementById("submit").onclick = function() {
    let r = Math.random();
    let n = r*(document.getElementById("high").value - document.getElementById("low").value) + document.getElementById("low").value;
    document.getElementById("n").innerHTML = n;
}