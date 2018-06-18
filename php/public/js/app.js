

$(document).ready(function(){
    $("#sign-btn").click(function(e){
        e.preventDefault();
        $("#signuppage").show();
        $("#menupage").hide();
        $("#connexionpage").hide();

    });
});

$(document).ready(function(){
    $("#cnx-btn").click(function(e){
        e.preventDefault();
        $("#menupage").show();
        $("#connexionpage").hide();
        $("#signuppage").hide();
    });
});

$(document).ready(function(){
    $("#deco-btn").click(function(e){
        e.preventDefault();
        $("#menupage").hide();
        $("#connexionpage").show();
        $("#signuppage").hide();
    });
});



