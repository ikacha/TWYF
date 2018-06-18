<?php

/* home/index.html.twig */
class __TwigTemplate_1d94681b8a7a9971e20bed84d6ae1556f5dae122f9d6ca431ae55d94399b22bd extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "home/index.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
    <title>TWYF</title>
    <link href=\"https://fonts.googleapis.com/css?family=Ubuntu\" rel=\"stylesheet\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\">
    <link rel=\"shortcut icon\" type=\"image/png\" href=\"img/favicon.png\"/>


</head>
<body>
<div><center><img src=\"img/logo2.png\" id=\"logo\"></center></div>

<div id=\"errorlog\"><center><br>Le pseudo ou le mot de passe est incorrect.<br><br></center></div>


<section id=\"connexionpage\">
    <form id=\"login\">
        <label class=\"formulaire\">Pseudo :</label><br>
        <input class=\"formcss\" type=\"text\" name=\"pseudo\"  placeholder=\"Votre Pseudo\"><br>
        <label class=\"formulaire\">Mot de Passe :</label><br>
        <input class=\"formcss\" type=\"password\" name=\"Mot_de_passe\" placeholder=\"Votre Mot de Passe\"><br>
        <input type=\"image\" src=\"img/connexion.png\" alt=\"Submit\" id=\"cnx-btn\"><br>
        <input type=\"image\" src=\"img/signup.png\" name=\"sign\" alt=\"Submit\" id=\"sign-btn\"><br>
        <script type=\"text/javascript\" src=\"app.js\"></script>
    </form>

</section>

<section id=\"signuppage\">
    <form method=\"post\" enctype=\"multipart/form-data\" id=\"signup\">
        <label class=\"formulaire\">Pseudo :</label><br>
        <input class=\"formcss\" type=\"text\" name=\"pseudo\" placeholder=\"Votre Pseudo\"><br>
        <label class=\"formulaire\">Nom :</label><br>
        <input class=\"formcss\" type=\"text\" name=\"nom\" placeholder=\"Votre Nom\"><br>
        <label class=\"formulaire\">Prénom :</label><br>
        <input class=\"formcss\" type=\"text\" name=\"prenom\" placeholder=\"Votre Prénom\"><br>
        <label class=\"formulaire\">e-mail :</label><br>
        <input class=\"formcss\" type=\"text\" name=\"mail\" placeholder=\"Votre e-m@il\"><br>
        <label class=\"formulaire\">Mot de Passe :</label><br>
        <input class=\"formcss\" type=\"password\" name=\"Mot_de_passe\" placeholder=\"Votre Mot de Passe\"><br>
        <input type=\"image\" src=\"img/creer.png\" alt=\"Submit\" id=\"create-btn\"><br>
    </form>
</section>


<section id=\"menupage\">
    <div id=\"imgmenu\">
    <form>
        <input type=\"image\" src=\"img/scanner.png\" alt=\"Submit\" id=\"scan-btn\"><br>
        <input type=\"image\" src=\"img/dicter.png\" name=\"sign\" alt=\"Submit\" id=\"dict-btn\"><br>
        <input type=\"image\" src=\"img/telecharger.png\" name=\"sign\" alt=\"Submit\" id=\"dl-btn\"><br>
        <input type=\"image\" src=\"img/deconexion.png\" name=\"sign\" alt=\"Submit\" id=\"deco-btn\"><br>
    </form>



</section>


<section id=\"scanpage\">


test

</section>



<section id=\"dictpage\">


    test

</section>





<section id=\"telecharger\">
    <form method=\"post\" enctype=\"multipart/form-data\">
        <div>
            <label for=\"file\"> Sélectionner un fichier image et cliquer ensuite sur Télécharger.</label><br>
            <input type=\"file\" id=\"file\" name=\"file\" accept=\"image/*\" >
           <center><input type=\"image\" src=\"img/add.png\" name=\"upload\" alt=\"upload\" id=\"add-btn\"></center>
            <br>

        </div>
        <div>
            <input type=\"image\" src=\"img/telecharger.png\" name=\"upload\" alt=\"upload\" id=\"submit-btn\"><br>
        </div>
    </form>

</section>































<script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script>
<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>
<script src=\"js/app.js\"></script>
</body>
</html>";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "home/index.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  26 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html>
<head>
    <title>TWYF</title>
    <link href=\"https://fonts.googleapis.com/css?family=Ubuntu\" rel=\"stylesheet\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\">
    <link rel=\"shortcut icon\" type=\"image/png\" href=\"img/favicon.png\"/>


</head>
<body>
<div><center><img src=\"img/logo2.png\" id=\"logo\"></center></div>

<div id=\"errorlog\"><center><br>Le pseudo ou le mot de passe est incorrect.<br><br></center></div>


<section id=\"connexionpage\">
    <form id=\"login\">
        <label class=\"formulaire\">Pseudo :</label><br>
        <input class=\"formcss\" type=\"text\" name=\"pseudo\"  placeholder=\"Votre Pseudo\"><br>
        <label class=\"formulaire\">Mot de Passe :</label><br>
        <input class=\"formcss\" type=\"password\" name=\"Mot_de_passe\" placeholder=\"Votre Mot de Passe\"><br>
        <input type=\"image\" src=\"img/connexion.png\" alt=\"Submit\" id=\"cnx-btn\"><br>
        <input type=\"image\" src=\"img/signup.png\" name=\"sign\" alt=\"Submit\" id=\"sign-btn\"><br>
        <script type=\"text/javascript\" src=\"app.js\"></script>
    </form>

</section>

<section id=\"signuppage\">
    <form method=\"post\" enctype=\"multipart/form-data\" id=\"signup\">
        <label class=\"formulaire\">Pseudo :</label><br>
        <input class=\"formcss\" type=\"text\" name=\"pseudo\" placeholder=\"Votre Pseudo\"><br>
        <label class=\"formulaire\">Nom :</label><br>
        <input class=\"formcss\" type=\"text\" name=\"nom\" placeholder=\"Votre Nom\"><br>
        <label class=\"formulaire\">Prénom :</label><br>
        <input class=\"formcss\" type=\"text\" name=\"prenom\" placeholder=\"Votre Prénom\"><br>
        <label class=\"formulaire\">e-mail :</label><br>
        <input class=\"formcss\" type=\"text\" name=\"mail\" placeholder=\"Votre e-m@il\"><br>
        <label class=\"formulaire\">Mot de Passe :</label><br>
        <input class=\"formcss\" type=\"password\" name=\"Mot_de_passe\" placeholder=\"Votre Mot de Passe\"><br>
        <input type=\"image\" src=\"img/creer.png\" alt=\"Submit\" id=\"create-btn\"><br>
    </form>
</section>


<section id=\"menupage\">
    <div id=\"imgmenu\">
    <form>
        <input type=\"image\" src=\"img/scanner.png\" alt=\"Submit\" id=\"scan-btn\"><br>
        <input type=\"image\" src=\"img/dicter.png\" name=\"sign\" alt=\"Submit\" id=\"dict-btn\"><br>
        <input type=\"image\" src=\"img/telecharger.png\" name=\"sign\" alt=\"Submit\" id=\"dl-btn\"><br>
        <input type=\"image\" src=\"img/deconexion.png\" name=\"sign\" alt=\"Submit\" id=\"deco-btn\"><br>
    </form>



</section>


<section id=\"scanpage\">


test

</section>



<section id=\"dictpage\">


    test

</section>





<section id=\"telecharger\">
    <form method=\"post\" enctype=\"multipart/form-data\">
        <div>
            <label for=\"file\"> Sélectionner un fichier image et cliquer ensuite sur Télécharger.</label><br>
            <input type=\"file\" id=\"file\" name=\"file\" accept=\"image/*\" >
           <center><input type=\"image\" src=\"img/add.png\" name=\"upload\" alt=\"upload\" id=\"add-btn\"></center>
            <br>

        </div>
        <div>
            <input type=\"image\" src=\"img/telecharger.png\" name=\"upload\" alt=\"upload\" id=\"submit-btn\"><br>
        </div>
    </form>

</section>































<script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script>
<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>
<script src=\"js/app.js\"></script>
</body>
</html>", "home/index.html.twig", "C:\\Users\\Antho\\Desktop\\TWYF\\php\\templates\\home\\index.html.twig");
    }
}
