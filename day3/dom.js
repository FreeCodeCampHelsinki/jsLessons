// window.location = "https://google.com";

function newWindow()
{
    // window.open("http://www.google.com","_blank");

    document.getElementById("it").innerText = "This is it!";
}

document.getElementById('msg').onclick = function()
{
    document.getElementById('msg').innerHTML += "<br/><i id='it'>italics</i>";
}

// window.onresize = function()
// {
//     console.log("window resized");
// }

// document.onclick = function()
// {
//     console.log("You Clicked me!");
// }

// var msg = document.getElementById("msg");

// msg.onmouseover = function()
// {
//     msg.innerHTML = "Don't touch me!";
//     msg.style.color = "#ff0000";
// }

// msg.onmouseout = function()
// {
//     msg.innerHTML = "Don't leave. Come back here!<br/>";
//     msg.innerHTML += "<i id='it'></i>";
//     // msg.style.fontSize = "4rem";
// }

// msg.ondblclick = function()
// {
//     msg.title = "This is a tooltip";
// }