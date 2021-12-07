
/* VOIRE LES PROJETS */
function viewP1(){
	document.getElementById("projet1").style.height = "430px",
	document.getElementById("projet1").style.visibility = "visible";
}
function closeP1(){
	document.getElementById("projet1").style.height = "0px",
	document.getElementById("projet1").style.visibility = "hidden";
}

function viewP2(){
	document.getElementById("projet2").style.height = "600px",
	document.getElementById("projet2").style.visibility = "visible";
}
function closeP2(){
	document.getElementById("projet2").style.height = "0px",
	document.getElementById("projet2").style.visibility = "hidden";
}

function viewP3(){
	document.getElementById("projet3").style.height = "330px",
	document.getElementById("projet3").style.visibility = "visible";
}
function closeP3(){
	document.getElementById("projet3").style.height = "0px",
	document.getElementById("projet3").style.visibility = "hidden";
}

function viewP4(){
	document.getElementById("projet4").style.height = "580px",
	document.getElementById("projet4").style.visibility = "visible";
}
function closeP4(){
	document.getElementById("projet4").style.height = "0px",
	document.getElementById("projet4").style.visibility = "hidden";
}

function viewP5(){
	document.getElementById("projet5").style.height = "200px",
	document.getElementById("projet5").style.visibility = "visible";
}
function closeP5(){
	document.getElementById("projet5").style.height = "0px",
	document.getElementById("projet5").style.visibility = "hidden";
}

/* GESTIONNAIRE ENTREE/SORTIE */
function printTime(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    month = month +1;
    var day = d.getDate();
    var hours = d.getHours();
    var min = d.getMinutes();
    var secs = d.getSeconds();
    
    if(month <= 9){
        month = "0" + month;
    }
      
    if(day <= 9){
        day  = "0" + day;
    }
    
    if(secs <= 9){
        secs = "0" + secs;
    }
    
    if(min <= 9){
        min = "0" + min;
    }
    
    if(hours <= 9){
        hours = "0" + hours;
    }   
    

   /* document.body.innerHTML = month +" - "+day+" - "+year+"//"+"<br>"+hours+":"+min+":"+secs;
   */
   document.getElementById("date").innerHTML =  day +" - "+month+" - "+year;
   
   document.getElementById("time").innerHTML  = hours +" : "+min+" : "+secs;
}

//document.getElementById("time").appendChild(document.createElement("br"));
setInterval(printTime);


function entrer(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    month = month +1;
    var day = d.getDate();
    var hours = d.getHours();
    var min = d.getMinutes();
    var secs = d.getSeconds();
    if(month <= 9){
        month = "0" + month;
    }
      
    if(day <= 9){
        day  = "0" + day;
    }
    
    if(secs <= 9){
        secs = "0" + secs;
    }
    
    if(min <= 9){
        min = "0" + min;
    }

    var newE = document.createElement("span");
    newE.style.color="darkBlue";
    newE.innerHTML = document.getElementById("selectNom").value+" - E"+" - "+hours+":"+min+":"+secs+" - "+day+"/"+month+"/"+year+"<br>";
     document.getElementById("newPerson").appendChild(newE);
    
  // document.getElementById("nomE").innerHTML =document.getElementById("selectNom").value+" - E"+" - "+hours+":"+min+":"+secs+" - "+day+"/"+month+"/"+year;
}

function sortie(){  
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    month = month +1;
    var day = d.getDate();
    var hours = d.getHours();
    var min = d.getMinutes();
    var secs = d.getSeconds();
    
    if(month <= 9){
        month = "0" + month;
    }
      
    if(day <= 9){
        day  = "0" + day;
    }
    
    if(secs <= 9){
        secs = "0" + secs;
    }
    
    if(min <= 9){
        min = "0" + min;
    }
    
   // var br = document.createElement("br");
   // br.innerHTML = "";
    var newS = document.createElement("span");
    newS.style.color="red";
    newS.innerHTML = document.getElementById("selectNom").value+" - S"+" - "+hours+":"+min+":"+secs+" - "+day+"/"+month+"/"+year+"<br>";
    
//document.getElementById("newPerson").appendChild(br);
 document.getElementById("newPerson").appendChild(newS);
    
    
//document.getElementById("nomS").innerHTML =document.getElementById("selectNom").value+" - S"+" - "+hours+":"+min+":"+secs+" - "+day+"/"+month+"/"+year;
}

function remiseZero(){
 document.getElementById("newPerson").innerHTML ="";
}

function ajoutName(){ 
document.getElementById("ajoutPerso").style.visibility="visible";
}

function ajouter(){
    var nP = document.createElement("option");
    nP.innerHTML = document.getElementById("nouveauPerso").value;
    document.getElementById("selectNom").appendChild(nP);
    
    document.getElementById("ajoutPerso").style.visibility="hidden";
}

/* MORPION */
function player(){// à charger dans le body avec onload
	//on cache le bouton rejouer
	document.getElementById('rejouer').style.visibility = "hidden";
	//on définit les 2 joueurs
	joueurs = ['X', 'O'];
	//on définit celui qui commence
	joueur = joueurs[0];
}

function play(id){//recupere le nom de la case via l'id
	//si le joueur est egale au joueur 1 (croix)
	if(joueur === joueurs[0]){
		//si la case est déja pleine(class filed) on affiche une alert
		if (document.getElementById(id).className.indexOf('filled') >= 0){ 
			alert("La case est déjà prise...");
		}else{
			//on definit la valeur de la case
			document.getElementById(id).textContent = "X";
			document.getElementById(id).style.color = "darkblue";
			 //Et on lui ajoute la class "filled" pour ne plus pouvoir la changer
			document.getElementById(id).className += " filled";
			//on compte le nombre de croix sur la grille
              	document.getElementById('countX').textContent++;
              	 //On passe la main au joueur 2 (RONDS)
			joueur = joueurs[1];

		} 
	}
	else if(joueur === joueurs[1]){

		if (document.getElementById(id).className.indexOf('filled') >= 0){ 
			alert("La case est déjà prise...");
		}else{
			//on definit la valeur de la case
			document.getElementById(id).textContent = "O";
			document.getElementById(id).style.color = "darkRed";
			 //Et on lui ajoute la class "filled" pour ne plus pouvoir la changer
			document.getElementById(id).className += " filled";
			//on compte le nombre de rond sur la grille
			document.getElementById('countO').textContent++;

			joueur = joueurs[0];
		}
	}

		nbTour();
		check();
		matchNul();
}

//on compte le nombre de tour
function nbTour(){
	document.getElementById('nbTour').textContent++;
}

//on chekck si matche nul
function matchNul(){
	if(document.getElementById('nbTour').textContent > 9){
		alert('MATCHE NUL');
			
		matchNul = document.createElement('h1');
		matchNul.classList.add('victoire');
		matchNul.textContent = "MATCH NUL";
		document.getElementById('rejouer').appendChild(matchNul);

		//Rend visible le bouton rejouer
		document.getElementById("rejouer").style.visibility = "visible";
		//sur un click de rejouer on recharge la page
		document.getElementById("rejouer").onclick = function() {
		    location.reload();
		}
	}
}

//on check les différentes possibilité de victoire
function check(){
//on place les elements dans des variables pour racourcir le if()
	un = document.getElementById('c0').textContent;
	deux = document.getElementById('c1').textContent;
	trois = document.getElementById('c2').textContent;
	quatre = document.getElementById('c3').textContent;
	cinq = document.getElementById('c4').textContent;
	six = document.getElementById('c5').textContent;
	sept = document.getElementById('c6').textContent;
	huit = document.getElementById('c7').textContent;
	neuf = document.getElementById('c8').textContent;


	if(un === deux && un === trois && deux === trois ||
		quatre === cinq && quatre === six && cinq === six||
		sept === huit && sept === neuf && huit === neuf||
		un === cinq && un === neuf && cinq === neuf||
		trois === cinq && trois === sept && cinq === sept||
		un === quatre && un === sept && quatre === sept|| 
		deux === cinq && deux === huit && cinq === huit|| 
		trois === six && trois === neuf && six === neuf){

		if(joueur === joueurs[0]){
			alert('Joueur O GAGNE');

			victoireJ1 = document.createElement('h1');
			victoireJ1.classList.add('victoire');
			victoireJ1.textContent = "Victoire Du joueur 2";
			document.getElementById('rejouer').appendChild(victoireJ1); 

		}else if(joueur === joueurs[1]){
			alert('Joueur X GAGNE');

			victoireJ2 = document.createElement('h1');
			victoireJ2.classList.add('victoire');
			victoireJ2.textContent = "Victoire Du joueur 1";
			document.getElementById('rejouer').appendChild(victoireJ2);
		}

		//Rend visible le bouton rejouer
	    document.getElementById("rejouer").style.visibility = "visible";
	    //sur un click de rejouer on recharge la page
	    document.getElementById("rejouer").onclick = function() {
	        location.reload();
	    }
	}
}

/* CHOIX DE COULEUR */

function fColorPicker(){
    var redValueHex = (parseInt($("#rRange").val())).toString(16);
    var greenValueHex = (parseInt($("#gRange").val())).toString(16);
    var blueValueHex = (parseInt($("#bRange").val())).toString(16);

    if (redValueHex.length == 1) {
        redValueHex = "0" + redValueHex;
    }
    if (greenValueHex.length == 1) {
        greenValueHex = "0" + greenValueHex;
    }
    if (blueValueHex.length == 1) {
        blueValueHex = "0" + blueValueHex;
    }

    var colorHex = "#" + redValueHex + greenValueHex+ blueValueHex;
    $("#hexValue").text(colorHex);

    var rColor = "#" + redValueHex + "0000";
    $("#rWeight").css("background-color", rColor);

    var gColor = "#00" + greenValueHex + "00";
    $("#gWeight").css("background-color", gColor);

    var bColor = "#0000" + blueValueHex;
    $("#bWeight").css("background-color", bColor);

    $("#textColor").css("background-color", colorHex);
}


/* CALCULATRICE */

let value ="";
        
//fonction pour l'affichage :
function view(input){
	input = String(input); value+= input
	document.getElementById('output2').innerHTML = value;
}

// fonction pour sup :
function clr(){
	document.getElementById("output2").innerHTML = "";
	document.getElementById("output1").innerHTML = "";

	value = "";
}

// effacé le dernier chiffre :
function back(){
	value = String(value);

	if(value.lenght-1 == 0 || value == "INVALID" || value == "undefined" || value == "Infinity"){
		clr();
	}
	else{
		value = value.substring(0,value.lenght-1);
	}
	document.getElementById("output2").innerHTML = value;
}

// fonction pour évéluer :
function eq(){
	var len = value.lenght-1;

	document.getElementById("output1").innerHTML = value;

	//try  catch erreur :
	try{
		value = String(eval(value));
	}
	catch{
		value = "INVALID";
	}

	// voir le résultat :
	document.getElementById("output2").innerHTML = value;
}


/* SUPER LOTO */

function nbRandom(){
    return Math.floor(Math.random() * (100 - 1)) + 1;
}

function empty(){
    document.getElementById("n1").innerHTML="";
	document.getElementById("n2").innerHTML="";
	document.getElementById("n3").innerHTML="";
	document.getElementById("n4").innerHTML="";
	document.getElementById("n5").innerHTML="";
	document.getElementById("n6").innerHTML="";
	document.getElementById("n7").innerHTML="";
}

function start(){    

    empty();
	document.getElementById("n1").innerHTML = nbRandom();
	document.getElementById("n2").innerHTML = nbRandom();
	document.getElementById("n3").innerHTML = nbRandom();
	document.getElementById("n4").innerHTML = nbRandom();
	document.getElementById("n5").innerHTML = nbRandom();
	document.getElementById("n6").innerHTML = jocker();	
	document.getElementById("n7").innerHTML = jocker();
	ifEqual();
}

function jocker(){
    return Math.floor(Math.random() * (10 - 1)) + 1;
}
 function ifEqual(){
 	let n1 = document.getElementById("n1").values;
 	let n2 = document.getElementById("n2").values;
 	let n3 = document.getElementById("n3").values;
 	let n4 = document.getElementById("n4").values;
 	let n5 = document.getElementById("n5").values;
 	let n6 = document.getElementById("n6").values;
 	let n7 = document.getElementById("n7").values;

 	if(n1 === n2 || n1 === n3 || n1 === n4 || n1 === n5 ||
 	    n2 === n3 || n2 === n4 || n2 === n5 || n3 === n4 || 
 	    n3 === n5 ||n4 === n5){
 		start();
 	} 
 	else if(n6 === N7){
 		jocker();
 	}
 }







