var x=1;
function changeMode(){
    var mybody = document.body;
    mybody.classList.toggle('mydark');
   
    document.getElementsByClassName('social')[0].style.backgroundColor="black";
    document.getElementsByClassName('footer')[0].style.backgroundColor="black";
    document.getElementsByClassName('footer')[0].style.color="white";
    var element=document.getElementsByClassName('icon');
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor="white";
        }


}






