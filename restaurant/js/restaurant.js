$(document).ready(function(){

 var navOffset = $("nav").offset().top;

 $("nav").wrap('<div class="nav-placeholder" style="height:auto;"></div>');
 $(".nav-placeholder").height($("nav").outerHeight());

 $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();

    if(scrollPos>=navOffset){
        $("nav").addClass("fixed");
    }else {
        $("nav").removeClass("fixed");
    }
    
   });



});
//button
document.getElementById("button").onclick = function ()
      {
        document.getElementById("button").innerHTML = " booked ";
        document.getElementById("button").style.borderWidth = " 0 ";
        document.getElementById("button").style.background = " #eee ";
        document.getElementById("button").onmousemove = function ()
             {
                document.getElementById("button").style.color = " #65c4c8 ";
                document.getElementById("button").style.fontWeight = " bolder ";
            };
    };
document.getElementById("button").ondblclick = function ()
{
        document.getElementById("button").innerHTML = " book now ";
        document.getElementById("button").style.borderWidth = " 3px ";
        document.getElementById("button").style.background = " #fff ";
        document.getElementById("button").style.color = " #65c4c8 ";
};



//button1
document.getElementById("button1").onclick = function ()
      {
        document.getElementById("button1").innerHTML = " booked ";
        document.getElementById("button1").style.borderWidth = " 0 ";
        document.getElementById("button1").style.background = " #eee ";
        document.getElementById("button1").onmousemove = function ()
             {
                document.getElementById("button1").style.color = " #65c4c8 ";
                document.getElementById("button1").style.fontWeight = " bolder ";
            };
    };

document.getElementById("button1").ondblclick = function ()
{
        document.getElementById("button1").innerHTML = " book now ";
        document.getElementById("button1").style.borderWidth = " 3px ";
        document.getElementById("button1").style.background = " #fff ";
        document.getElementById("button1").style.color = " #65c4c8 ";
};



//button2
document.getElementById("button2").onclick = function ()
      {
        document.getElementById("button2").innerHTML = " booked ";
        document.getElementById("button2").style.borderWidth = " 0 ";
        document.getElementById("button2").style.background = " #eee ";
        document.getElementById("button2").onmousemove = function ()
             {
                document.getElementById("button2").style.color = " #65c4c8 ";
                document.getElementById("button2").style.fontWeight = " bolder ";
            };
    };
document.getElementById("button2").ondblclick = function ()
{
        document.getElementById("button2").innerHTML = " book now ";
        document.getElementById("button2").style.borderWidth = " 3px ";
        document.getElementById("button2").style.background = " #fff ";
        document.getElementById("button2").style.color = " #65c4c8 ";
};




//button3
document.getElementById("button3").onclick = function ()
      {
        document.getElementById("button3").innerHTML = " booked ";
        document.getElementById("button3").style.borderWidth = " 0 ";
        document.getElementById("button3").style.background = " #eee ";
        document.getElementById("button3").onmousemove = function ()
             {
                document.getElementById("button3").style.color = " #65c4c8 ";
                document.getElementById("button3").style.fontWeight = " bolder ";
            };
    };
document.getElementById("button3").ondblclick = function ()
{
        document.getElementById("button3").innerHTML = " book now ";
        document.getElementById("button3").style.borderWidth = " 3px ";
        document.getElementById("button3").style.background = " #fff ";
        document.getElementById("button3").style.color = " #65c4c8 ";
};




//button4
document.getElementById("button4").onclick = function ()
      {
        document.getElementById("button4").innerHTML = " booked ";
        document.getElementById("button4").style.borderWidth = " 0 ";
        document.getElementById("button4").style.background = " #eee ";
        document.getElementById("button4").onmousemove = function ()
             {
                document.getElementById("button4").style.color = " #65c4c8 ";
                document.getElementById("button4").style.fontWeight = " bolder ";
            };
    };
document.getElementById("button4").ondblclick = function ()
{
        document.getElementById("button4").innerHTML = " book now ";
        document.getElementById("button4").style.borderWidth = " 3px ";
        document.getElementById("button4").style.background = " #fff ";
        document.getElementById("button4").style.color = " #65c4c8 ";
};



//button5
document.getElementById("button5").onclick = function ()
      {
        document.getElementById("button5").innerHTML = " booked ";
        document.getElementById("button5").style.borderWidth = " 0 ";
        document.getElementById("button5").style.background = " #eee ";
        document.getElementById("button5").onmousemove = function ()
             {
                document.getElementById("button5").style.color = " #65c4c8 ";
                document.getElementById("button5").style.fontWeight = " bolder ";
            };
    };
document.getElementById("button5").ondblclick = function ()
{
        document.getElementById("button5").innerHTML = " book now ";
        document.getElementById("button5").style.borderWidth = " 3px ";
        document.getElementById("button5").style.background = " #fff ";
        document.getElementById("button5").style.color = " #65c4c8 ";
};




//button6
document.getElementById("button6").onclick = function ()
      {
        document.getElementById("button6").innerHTML = " booked ";
        document.getElementById("button6").style.borderWidth = " 0 ";
        document.getElementById("button6").style.background = " #eee ";
        document.getElementById("button6").onmousemove = function ()
             {
                document.getElementById("button6").style.color = " #65c4c8 ";
                document.getElementById("button6").style.fontWeight = " bolder ";
            };
    };
document.getElementById("button6").ondblclick = function ()
{
        document.getElementById("button6").innerHTML = " book now ";
        document.getElementById("button6").style.borderWidth = " 3px ";
        document.getElementById("button6").style.background = " #fff ";
        document.getElementById("button6").style.color = " #65c4c8 ";
};




//button7
document.getElementById("button7").onclick = function ()
      {
        document.getElementById("button7").innerHTML = " booked ";
        document.getElementById("button7").style.borderWidth = " 0 ";
        document.getElementById("button7").style.background = " #eee ";
        document.getElementById("button7").onmousemove = function ()
             {
                document.getElementById("button7").style.color = " #65c4c8 ";
                document.getElementById("button7").style.fontWeight = " bolder ";
            };
    };
document.getElementById("button7").ondblclick = function ()
{
        document.getElementById("button7").innerHTML = " book now ";
        document.getElementById("button7").style.borderWidth = " 3px ";
        document.getElementById("button7").style.background = " #fff ";
        document.getElementById("button7").style.color = " #65c4c8 ";
};




//button8
document.getElementById("button8").onclick = function ()
      {
        document.getElementById("button8").innerHTML = " booked ";
        document.getElementById("button8").style.borderWidth = " 0 ";
        document.getElementById("button8").style.background = " #eee ";
        document.getElementById("button8").onmousemove = function ()
             {
                document.getElementById("button8").style.color = " #65c4c8 ";
                document.getElementById("button8").style.fontWeight = " bolder ";
            };
    };
document.getElementById("button8").ondblclick = function ()
{
        document.getElementById("button8").innerHTML = " book now ";
        document.getElementById("button8").style.borderWidth = " 3px ";
        document.getElementById("button8").style.background = " #fff ";
        document.getElementById("button8").style.color = " #65c4c8 ";
};




//button9
document.getElementById("button9").onclick = function ()
      {
        document.getElementById("button9").innerHTML = " booked ";
        document.getElementById("button9").style.borderWidth = " 0 ";
        document.getElementById("button9").style.background = " #eee ";
        document.getElementById("button9").onmousemove = function ()
             {
                document.getElementById("button9").style.color = " #65c4c8 ";
                document.getElementById("button9").style.fontWeight = " bolder ";
            };
    };
document.getElementById("button9").ondblclick = function ()
{
        document.getElementById("button9").innerHTML = " book now ";
        document.getElementById("button9").style.borderWidth = " 3px ";
        document.getElementById("button9").style.background = " #fff ";
        document.getElementById("button9").style.color = " #65c4c8 ";
};




//button10
document.getElementById("button10").onclick = function ()
      {
        document.getElementById("button10").innerHTML = " booked ";
        document.getElementById("button10").style.borderWidth = " 0 ";
        document.getElementById("button10").style.background = " #eee ";
        document.getElementById("button10").onmousemove = function ()
             {
                document.getElementById("button10").style.color = " #65c4c8 ";
                document.getElementById("button10").style.fontWeight = " bolder ";
            };
    };
document.getElementById("button10").ondblclick = function ()
{
        document.getElementById("button10").innerHTML = " book now ";
        document.getElementById("button10").style.borderWidth = " 3px ";
        document.getElementById("button10").style.background = " #fff ";
        document.getElementById("button10").style.color = " #65c4c8 ";
};
