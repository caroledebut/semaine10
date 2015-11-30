	var mainDiv = document.createElement('div');
    mainDiv.id = 'divTP5';

	var check={};
	
	check['nom'] = function testnom (){
	var nom = document.getElementById('nom');
	if(nom.value.length < 2) {
		alert("Ce champ doit avoir plus de 2 caractères");
		return false;
	}
	return true;
	};
	
	check['prenom'] = function testnom (){
	var prenom = document.getElementById('prenom');
	if(prenom.value.length < 2) {
		alert("Ce champ doit avoir plus de 2 caractères");
		return false;
	}
	return true;
	};

	check['age'] = function testage (){
	var age = document.getElementById('age');
	if(age.value < 5 || age.value > 140 ) {
		alert("l'age est compris entre 5 et 140");
		return false;
	}
	return true;
	};


	check['pseudo'] = function testpseudo (){
	var pseudo = document.getElementById('pseudo');
	if(pseudo.value.length <4 ) {
		alert("Ce champ doit avoir plus de 4 caractères");
		return false;
	}
	return true;
	};
  
  	check['password1'] = function testpassword (){
	var password = document.getElementById('password1');
	if(password.value.length <6 ) {
		alert("Ce champ doit avoir plus de 6 caractères");
		return false;
	}
	return true;
	};
  
    check['password2'] = function testpassword (){
	var password = document.getElementById('password2');
	if(password.value.length <6 ) {
		alert("Ce champ doit avoir plus de 6 caractères");
		return false;
	}
	return true;
	};

  	check['pays'] = function testpays (){
	var pays = document.getElementById('pays');
	if(pays.selectedIndex == 0) {
		alert("Un pays doit être selectionné");
		return false;
	}
	return true;
	};
	
	
	
	
	// Mise en place des événements
	
	(function() { // Utilisation d'une IIFE pour éviter les variables globales.
	
	var form=document.getElementById('form'),
	inputs = document.querySelectorAll('input[type=text], input[type=password]'),
	inputsLength = inputs.length;
	
	for (var i = 0 ; i < inputsLength ; i++) {
	inputs[i].addEventListener('keyup', function(e) {
	check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
	}, false);
	}
	
	form.addEventListener('submit', function(e) {
	
	var result = true;
	
	for (var i in check) {
	result = check[i](i) && result;
	}
	
	if (result) {
	alert('Le formulaire est bien rempli.');
	}
	
	e.preventDefault();
	
	}, false);
	
	form.addEventListener('reset', function() {
	
	for (var i = 0 ; i < inputsLength ; i++) {
	inputs[i].className = '';
	}
	
	}, false);
	
	})();
	
