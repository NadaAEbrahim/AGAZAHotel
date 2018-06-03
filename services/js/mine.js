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
      /*my code*/
 $(".pic_left").mouseleave(function(){
      $(".pic_left").css("opacity","0.9"); 
   });
    
 $(".pic_left").mouseenter(function(){
      $(".pic_left").css("opacity","1"); 
   });    
    
 $(".pic_right").mouseleave(function(){
      $(".pic_right").css("opacity","0.9"); 
   });

 $(".pic_right").mouseenter(function(){
      $(".pic_right").css("opacity","1"); 
   });
});

