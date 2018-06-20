$("#sign-btn").click(function(e){
    e.preventDefault();
    $("#signuppage").show();
    $("#menupage").hide();
    $("#connexionpage").hide();
    $("#telecharger").hide();
    $("#scanpage").hide();
    $("#dictpage").hide();
    $("#ecrirepage").hide();

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
        $("#ecrirepage").hide();
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
        $("#ecrirepage").hide();
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
        $("#ecrirepage").hide();
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
        $("#ecrirepage").hide();
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
        $("#ecrirepage").hide();

    });
});

$(document).ready(function(){
    $("#ecrire-btn").click(function(e){
        e.preventDefault();
        $("#menupage").hide();
        $("#connexionpage").hide();
        $("#signuppage").hide();
        $("#telecharger").hide();
        $("#scanpage").hide();
        $("#dictpage").hide();
        $("#ecrirepage").show();

    });
});


$(document).ready(function(){
    $("#back-btn").click(function(e){
        e.preventDefault();
        $("#menupage").show();
        $("#connexionpage").hide();
        $("#signuppage").hide();
        $("#telecharger").hide();
        $("#scanpage").hide();
        $("#dictpage").hide();
        $("#ecrirepage").hide();

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
(function() {

    var streaming = false,
        video        = document.querySelector('#video'),
        cover        = document.querySelector('#cover'),
        canvas       = document.querySelector('#canvas'),
        photo        = document.querySelector('#photo'),
        startbutton  = document.querySelector('#startbutton'),
        width = 320,
        height = 0;

    navigator.getMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

    navigator.getMedia(
        {
            video: true,
            audio: false
        },
        function(stream) {
            if (navigator.mozGetUserMedia) {
                video.mozSrcObject = stream;
            } else {
                var vendorURL = window.URL || window.webkitURL;
                video.src = vendorURL.createObjectURL(stream);
            }
            video.play();
        },
        function(err) {
            console.log("An error occured! " + err);
        }
    );

    video.addEventListener('canplay', function(ev){
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth/width);
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    function takepicture() {
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(video, 0, 0, width, height);
        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    startbutton.addEventListener('click', function(ev){
        takepicture();
        ev.preventDefault();
    }, false);

})();