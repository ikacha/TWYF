
$(document).ready(function(){
    $("#sign-btn").click(function(e){
        e.preventDefault();
        $("#signuppage").show();
        $("#menupage").hide();
        $("#connexionpage").hide();
        $("#telecharger").hide();       

    });
});

$(document).ready(function(){
    $("#cnx-btn").click(function(e){
        e.preventDefault();
        $("#telecharger").hide(); 
        $("#menupage").show();
        $("#connexionpage").hide();
        $("#signuppage").hide();
    });
});



$(document).ready(function(){
    $("#scan-btn").click(function(e){
        e.preventDefault();
        $("#menupage").hide();
        $("#connexionpage").hide();
        $("#signuppage").hide();
        $("#telecharger").hide();
    });
});
$(document).ready(function(){
    $("#dict-btn").click(function(e){
        e.preventDefault();
        $("#menupage").hide();
        $("#connexionpage").hide();
        $("#signuppage").hide();
        $("#telecharger").hide();
    });
});
$(document).ready(function(){
    $("#dl-btn").click(function(e){
        e.preventDefault();
        $("#menupage").hide();
        $("#connexionpage").hide();
        $("#signuppage").hide();
        $("#telecharger").show();
    });
});

$(document).ready(function(){
    $("#deco-btn").click(function(e){
        e.preventDefault();
        $("#menupage").hide();
        $("#connexionpage").show();
        $("#signuppage").hide();
        $("#telecharger").hide();
    });
});