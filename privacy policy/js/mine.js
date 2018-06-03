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

   
    $(".privacy .container h2").click(function(){
     
     var myClass = $(this).attr("class");
     $( "." + myClass + "-con" ).slideToggle(900);
   });
     
   

});
