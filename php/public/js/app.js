
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




/*

$.ajax({
        url: "http://127.0.0.1:8000/home",s
    }).done(
        sign.onclick(
            function showSignup(){
            $("#signuppage").show();
            $("#connexionpage").hide();
}));


function showMenu(){
    $.ajax({
        url: "http://127.0.0.1:8000/home",
    }).done(function(){
            $("#connexionpage").fadeOut(1000, function(){
            $("#signuppage").fadeIn(1000);
            $("#signup-btn").show();
       });
    })
}
/*

$.ajax({
    function notify() {
    alert( "clicked" );
    }
    $( "signup-btn" ).on( "click", notify );
});



function showSignup(){

    $("#signuppage").show();
    $("#connexionpage").hide();
}


$("#signup-btn").click(function(){
  showSignup();
});



 
function click() {
  console.log( "cliqué" );
}
 
$( "#signup-btn" ).on( "click", click );

}

function showSignup(){

    $("#signuppage").show();
    $("#connexionpage").hide();*/

