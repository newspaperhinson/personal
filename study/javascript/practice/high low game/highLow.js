let key = Math.floor(Math.random()*100);
console.log(key);

document.getElementById("submit").onclick = () => {
    let value = document.getElementById("answer").value;
    if(value == key) {
        document.getElementById("key").innerHTML = `Congrats! The hidden answer is ${key}`;
    }
    else if(value > Number(document.getElementById("low").innerHTML) && value < key) {
        document.getElementById("low").innerHTML = value;
    }
    else if(value < Number(document.getElementById("high").innerHTML) && value > key) {
        document.getElementById("high").innerHTML = value;
    }
    else {
        document.getElementById("key").innerHTML = `Error! Your input is invalid.`;
    }

}

document.getElementById("restart").onclick = () => {
    window.location.reload("refresh");
}