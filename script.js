$(document).ready(function(){
    $(".content-container").hide();
    $(".link").hide();
    $(".bar-bg").hide();
    
    $("#about-header-id").click(function(){
    $("#about-content-id").animate({width: 'toggle' , height: 'toggle'});
});
    $("#activities-header-id").click(function(){
    $("#activities-content-id").slideToggle();
});
    $("#education-header-id").click(function(){
    $("#education-content-id").animate({width: 'toggle' , height: 'toggle'});
});

    $("#techSkills-header-id").click(function(){
    $("#techSkills-content-id").slideToggle();
});
    $("#fb-click").click(function(){
    $("#fb-content").animate({width: 'toggle'});
});
    $("#whatsapp-click").click(function(){
    $("#whatsapp-content").animate({width: 'toggle'});
});
    $("#twitter-click").click(function(){
    $("#twitter-content").animate({width: 'toggle'});
});
    $("#linkedin-click").click(function(){
    $("#linkedin-content").animate({width: 'toggle'});
});
    $("#html").click(function(){
    $("#bg-one").animate({width: 'toggle'});
});
    $("#css").click(function(){
    $("#bg-two").animate({width: 'toggle'});
});
    $("#sass").click(function(){
    $("#bg-three").animate({width: 'toggle'});
});
    $("#js").click(function(){
    $("#bg-four").animate({width: 'toggle'});
});
    $("#jq").click(function(){
    $("#bg-five").animate({width: 'toggle'});
});

});