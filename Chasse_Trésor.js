// -------------------------------------------------------------
//|Ce fichier contient les fonctions de traitement maximum      |
//|Maximum (x, y) et Maximum (x, y, z, w)                       |
//|Auteurs : Mickaël KINOO (Vu avec Valentin CHAIGNON)          |
//|Date : 2020-09-28                                            |
//|Historique :                                                 |
//|v1.0 rédaction de monMax (x, y) [2020-09-21]                 |
//|v1.1 changement de nom monMax () ► Maximum ()                |
//|v2.0 ajout de la fonction Maximum (x, y, z, w) [2020-09-28]  |
// -------------------------------------------------------------

/* CREATION DU TABLEAU EN HTML */

document.write("<div>");
let nombreLigne = 10
document.write("<table>");
for (let i = 0; i<nombreLigne; i++){
	document.write("<tr>");
	for (let j = 0; j<nombreLigne;j++){
		document.write("<td onclick=choix(this.id); id="+i+`-`+j+"></td>")
	}
	document.write("</tr>");
}
document.write("<tr>");
document.write("</div>")
/*-------------------------------------------------------*/

function choix(id){
	document.getElementById(`zoneTeste`).innerHTML = id;
}





	