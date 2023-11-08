$(document).ready(function(){
    $("#hamburger").click(function(){
        if($("#hamburger").attr("data-source")==="true"){
            $("#hamburger").attr("src","images/icon-close.svg");
            $("#hamburger").attr("data-source","false");
            $("#top-nav").animate({left:'0'}, "slow");
        }else {
            $("#hamburger").attr("src","images/icon-hamburger.svg");
            $("#hamburger").attr("data-source","true");
            $("#top-nav").animate({left:'-100%'} ,"slow");
        }
    })
});