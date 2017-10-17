$(document).ready(function () {
    $("nav a").on("click", function () {
        $("nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        console.log("that worked!");
    });
    document.getElementById("testButton").addEventListener("click", function (){
        $("#tester").html("button was pressed!");    
    });
    
   /* $('nav a').on('click', function(){
        $('.navbar-toggler').click();
        
    })*/
    
        
});
