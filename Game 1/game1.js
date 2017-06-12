var counter =  $("#count").text();
var counter = parseInt(counter);  


    function isTouching() {
        var blueLeft = $("#blue").offset().left;
        var redLeft = $("#red").offset().left;
        var blueRight = blueLeft + $("#blue").width();
        var redRight = redLeft + $("#red").width();
    
        var blueTop = $("#blue").offset().top;
        var redTop = $("#red").offset().top;
        var blueBottom = blueTop + $("#blue").height();
        var redBottom = redTop + $("#red").height();
        
        if(blueRight > redLeft && blueLeft < redRight && blueTop < redBottom && blueBottom > redTop) {
        
            return true;
          
        }
       return false;
       
    
}
 $("body").keydown(function(event) {
    
    if (event.which === 37) {
        $("#blue").css("left", $("#blue").offset().left - 10);
    
    } else if (event.which === 39) {
       $("#blue").css("left", $("#blue").offset().left + 10);
    } 
    else if (event.which === 38) {
        $("#blue").css("top", $("#blue").offset().top - 10);
    } 
    else if (event.which === 40) {
       $("#blue").css("top", $("#blue").offset().top + 10);
    } 

if(isTouching()){
    var mathRandom = Math.floor((Math.random() * 1000) + 1);
    $("#red").animate({ left: mathRandom }, 750);
    $("#red").animate({ top: mathRandom }, 750); 
    counter = counter +1;
    $("#count").text(counter);
    
    }

});