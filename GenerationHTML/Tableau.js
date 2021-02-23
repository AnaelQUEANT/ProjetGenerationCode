var bouttonTableau = document.createElement('button');
bouttonTableau.textContent = "Tableau";
bouttonTableau.setAttribute("value","Click");
bouttonTableau.setAttribute("onClick","affichageParametreTableau()");
document.getElementById('listeOption').appendChild(bouttonTableau);

var ligne = -1;
var colonne = -1;
var tableauHeader = false;

function affichageParametreTableau(){
    affichageCode();
}

function affichageCode(){
    var zoneDeTexte =  document.getElementById('laZoneDeTexte');
    var texte = "<table>";
    texte += "\n\t<tr>"
    texte += "\n\t</tr>"
    texte += "\n</table>";
    zoneDeTexte.textContent = texte;
}

