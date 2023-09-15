var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos){
        document.getElementById("topbar").style.top = "0";
    }
    else{
        document.getElementById("topbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollpos;
}
function Clublist()
{
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x= document.getElementsByTagName('td');
    for (i = 0; i < x.length; i++)
    {
        if(!x[i].innerHTML.toLowerCase().includes(input))
        {
            x[i].style.display="none";
        }
        else
        {
            x[i].style.display="list-item";
        }
    }
}
function contactusbut()
{
    
}