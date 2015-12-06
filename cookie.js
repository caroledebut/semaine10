var score = 0;
var compteur = 1;

var bouton = document.getElementById('bouton');
var multiplicateur = document.getElementById('multiplicateur');
var affichage = document.getElementById('affichage');

        function affichageScore() {
            affichage.innerHTML = score ;
            if (score >= 200) {
                setInterval(function(){ajoutclick()},1000);
            } else {
                clearInterval(1000);
            }
        } 
        
        function affichageMultiplicateur() {
            multiplicateur.innerHTML= "Multiplicateur *"+compteur + " prix : "+compteur*50;
        }
        
        
        function ajoutclick() {
            score = score + compteur;
            affichageScore ();
        } 

       function incrementer() {
            compteur= compteur + 1;
            score = score - 50 * (compteur - 1);
            if (score <0){
                score = 0;
            }
            affichageMultiplicateur();
            affichageScore();
       }
     
    
    
