// On crée l'élément conteneur
var mainDiv = document.createElement('div');
    mainDiv.id = 'divTP2';
    
var textparagraph=document.createTextNode('langages basés sur ECMAScript');
var paragraph = document.createElement('p');
    paragraph.appendChild(textparagraph);

// On crée tous les nœuds textuels de ul
var textNodes = [ 
    document.createTextNode('Javascript'),
    document.createTextNode('JScript'),
    document.createTextNode('ActionScript'),
    document.createTextNode('EX4')
];

// On crée <ul> et <li>
var listeUL = document.createElement('ul');
var listeLI;

for (var i=0 ; i< textNodes.length; i++) {
   listeLI = document.createElement('li');
   listeLI.appendChild(textNodes[i]);
   listeUL.appendChild(listeLI);
}

// On insère le tout dans mainDiv
mainDiv.appendChild(paragraph);
mainDiv.appendChild(listeUL);


// On insère mainDiv dans le <body>
document.body.appendChild(mainDiv);

