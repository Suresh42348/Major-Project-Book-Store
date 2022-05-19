var x=1;
function changeMode(){
    var mybody = document.body;
    mybody.classList.toggle('mydark');
   
    var element=document.getElementsByClassName('icon');
    for (var i = 0; i < element.length; i++) {
        element[i].style.backgroundColor="white";
        }


}
// coupon

function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
}






