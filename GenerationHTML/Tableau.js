var bouttonTableau = document.createElement('button');
bouttonTableau.textContent = "Tableau";
bouttonTableau.setAttribute("onClick","affichageParametreTableau()");
document.getElementById('listeOption').appendChild(bouttonTableau);

function affichageParametreTableau(){
    document.getElementById('laZoneDeTexte').textContent = "";
    document.getElementById("Option").innerHTML = "";
    affichageChamps();
}

function affichageChamps(){
    let divLigne = document.createElement('div');
    let divColonne = document.createElement('div');
    let divTH = document.createElement('div');

    let labelLigne = document.createElement('label');
    labelLigne.setAttribute("for", "nbLigne");
    labelLigne.innerText = "Nombre de ligne : ";

    let champsLigne = document.createElement('input');
    champsLigne.setAttribute("type", "number");
    champsLigne.setAttribute("id", "nbLigne");

    let labelColonne = document.createElement('label');
    labelColonne.setAttribute("for", "nbColonne");
    labelColonne.innerText = "Nombre de colonne : ";

    let champsColonne = document.createElement('input');
    champsColonne.setAttribute("type", "number");
    champsColonne.setAttribute("id", "nbColonne");

    let labelTH = document.createElement('label');
    labelTH.setAttribute("for", "tableauHeader");
    labelTH.innerText = "Voulez vous des tableaux headers ?";

    let checkboxTheader = document.createElement('input');
    checkboxTheader.setAttribute("type", "checkbox");
    checkboxTheader.setAttribute("id", "tableauHeader");

    let bouttonAfficherCode = document.createElement('button');
    bouttonAfficherCode.textContent = "Confirmer";
    bouttonAfficherCode.setAttribute("onClick","affichageCode()");

    divLigne.appendChild(labelLigne);
    divLigne.appendChild(champsLigne);
    
    divColonne.appendChild(labelColonne);
    divColonne.appendChild(champsColonne);

    divTH.appendChild(labelTH);
    divTH.appendChild(checkboxTheader);

    document.getElementById('Option').appendChild(divLigne);
    document.getElementById('Option').appendChild(divColonne);
    document.getElementById('Option').appendChild(divTH);
    document.getElementById('Option').appendChild(bouttonAfficherCode);
}

function affichageCode(){
    let zoneDeTexte =  document.getElementById('laZoneDeTexte');
    let nbLigne = document.getElementById('nbLigne').value;
    let nbColonne = document.getElementById('nbColonne').value;
    let checkboxTheader = document.getElementById('tableauHeader').checked;

    if(nbLigne == ""){
        zoneDeTexte.textContent = "Valeur de ligne incorrect\n";
        return
    }
    if(nbColonne == ""){
        zoneDeTexte.textContent = "Valeur de colonne incorrect\n";
        return;
    }
    let texte = "<table>\n";
    if(checkboxTheader){
        texte += "\t<tr>\n";
        for(let i = 0; i < nbColonne; i++){
            texte += "\t\t<th></th>\n";
        }
        texte += "\t</tr>\n";
        nbLigne--;
    }

    for(let i = 0; i < nbLigne; i++){
        texte += "\t<tr>\n";
        for(let i = 0; i < nbColonne; i++){
            texte += "\t\t<td></td>\n";
        }
        texte += "\t</tr>\n";
    }
    texte += "</table>";
    zoneDeTexte.textContent = texte;
}

