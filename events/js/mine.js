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

 $(".events .container ul li").click(function(){

   var myClass= $(this).attr("class"); 
   
   $(this).addClass("active").siblings().removeClass("active");
   $(".events .container .tap-one, .tap-two").hide();
   $("." + "tap-" + myClass ).fadeIn();
 });  



});
