const { Button } = require("bootstrap");

const startingMinutes = 10;
let time = startingMinutes * 60;
// removes 1 sec delay 
time--

const countdownE1 = document.getElementById('countdown');
//undating the countdown every second
setInterval(updateCountdown,1000);
function updateCountdown()
{
    if(time == 0)
    {
        
    }
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds: seconds;
    countdownE1.innerHTML = `${minutes}:${seconds}`;
    time--
}



function CheckPassword(inputtxt) 
{ 
    var passw = "12345678";
    setTimeout(() => {
        if(inputtxt.value.match(passw)) 
        { 
            animate(),animate1,animate2,remove,remove1,remove2;
            return true;
        }
        else
        { 
            alert('Wrong Password')
            return false;
        }
    }, 1000);
    
}

function animate()
{
    var box = document.getElementsByClassName('circle')[0];
}
function animate1()
{
    box.classList.add('fadeout');
}
function animate2()
{

}
function remove()
{
    document.getElementById("main").remove("circle");
}
function remove1()
{
    document.getElementById("main").remove("square");
}
function remove2()
{
    document.getElementById("main").remove("square2");
}
