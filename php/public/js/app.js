

    $("#sign-btn").click(function(e){
        e.preventDefault();
        $("#signuppage").show();
        $("#menupage").hide();
        $("#connexionpage").hide();
        $("#telecharger").hide();       
        $("#scanpage").hide();
        $("#dictpage").hide();
    });


$(document).ready(function(){
    $("#cnx-btn").click(function(e){
        e.preventDefault();
        $("#telecharger").hide(); 
        $("#menupage").show();
        $("#connexionpage").hide();
        $("#signuppage").hide();
        $("#scanpage").hide();
        $("#dictpage").hide();
    });
});



$(document).ready(function(){
    $("#scan-btn").click(function(e){
        e.preventDefault();
        $("#menupage").hide();
        $("#connexionpage").hide();
        $("#signuppage").hide();
        $("#telecharger").hide();
        $("#scanpage").show();
        $("#dictpage").hide();
    });
});
$(document).ready(function(){
    $("#dict-btn").click(function(e){
        e.preventDefault();
        $("#menupage").hide();
        $("#connexionpage").hide();
        $("#signuppage").hide();
        $("#telecharger").hide();
        $("#scanpage").hide();
        $("#dictpage").show();
    });
});
$(document).ready(function(){
    $("#dl-btn").click(function(e){
        e.preventDefault();
        $("#menupage").hide();
        $("#connexionpage").hide();
        $("#signuppage").hide();
        $("#telecharger").show();
        $("#scanpage").hide();
        $("#dictpage").hide();
    });
});

$(document).ready(function(){
    $("#deco-btn").click(function(e){
        e.preventDefault();
        $("#menupage").hide();
        $("#connexionpage").show();
        $("#signuppage").hide();
        $("#telecharger").hide();
        $("#scanpage").hide();
        $("#dictpage").hide();

    });
});


$("#create-btn").click(function(){
     
    $.ajax({
       url : 'http://127.0.0.1:8000/detail.php',
       data: $("#signup").serialize(),
       method: "POST",
    });
   
});

$("#file").change(function()
{
    var nom_fichier = new Array();

    if (this.value)
    {
        if ('files' in this)
        {
            for (var i = 0; i < this.files.length; i++)
            {                
                var file = this.files[i];
                if ('name' in file)
                {
                    var p = document.createElement("p");
                    var text = document.createTextNode(file.name);
                    p.appendChild(text);
                    document.getElementById("conteneur_fichier").appendChild(p);
                }
            }
        }
    }
    else
    {
        var p = document.createElement("p");
        var text = document.createTextNode("Veuillez choisir un fichier");
        p.appendChild(text);
        document.getElementById("conteneur_fichier").appendChild(p);
    }
});