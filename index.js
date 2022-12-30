var isBox1=document.getElementById('one');
var isBox2=document.getElementById('two');
var isBox3=document.getElementById('three');
var isTry=0;
function change(){
    if (isTry==0)
    {
        isBox1.style.background="linear-gradient(45deg,lime,aquamarine,aqua)";
        isBox2.style.background="linear-gradient(45deg,blue,red)";
        isBox3.style.background="linear-gradient(to right,black,30%,darkgrey,80%,darkblue)";
        isTry++;
    }

    else if (isTry==1)
    {
        isBox1.style.background="linear-gradient(to right,black,30%,darkgrey,80%,darkblue)";
        isBox2.style.background="linear-gradient(45deg,lime,aquamarine,aqua)";
        isBox3.style.background="linear-gradient(45deg,blue,red)";
        isTry++;
    }

    else
    {
        isBox1.style.background="linear-gradient(45deg,blue,red)";
        isBox2.style.background="linear-gradient(to right,black,30%,darkgrey,80%,darkblue)";
        isBox3.style.background="linear-gradient(45deg,lime,aquamarine,aqua)";
        isTry=0;
    }
}

setInterval(function(){change()},1000);