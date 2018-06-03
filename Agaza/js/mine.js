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

/*loading page*/

$(window).load(function(){

   
    $(".loading .spinner").fadeOut(3000,
    function()
    {

        $(this).parent().fadeOut(3000,
        function()
        {
             $("body").css({"overflow":"auto"});
            $(this).remove();
        });
    });
    

});
