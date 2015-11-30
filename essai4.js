<div id="divTP4">
    <form enctype="multipart/form-data" method="post" action="upload.php">
        <fieldset>
            <legend>Uploader une image</legend>
			
            <div style="text-align: center">
                <label for="inputUpload">Image à uploader :</label>
                <input type="file" name="inputUpload" id="inputUpload" />
                <br /><br />
                <input type="submit" value="Envoyer" />		
            </div>
        </fieldset>	
    </form>
</div>


// On crée l'élément conteneur
var mainDiv = document.createElement('div');
    mainDiv.id = 'divTP4';
    
var form = document.createElement('form');
    form.enctype='multipart/form-date';
    form.method='post';
    form.action='upload.php';
    
var fieldset = document.createElement

var paragraph = document.createElement('p');
    paragraph.appendChild(textparagraph);
    
    // On crée tous les nœuds textuels de dl
var textNodes = [ {
    t:'Javascript',
    d:'Blabla1'},
    {t:'JScript',
    d:'Blabla2'},    
    {t:'ActionScript',
    d:'Blabla3'},
    {t:'EX4',
    d:'Blabla4'}
];

// On crée <dl>, <dd> et <dt>
var listeDL = document.createElement('dl');
var listedt, listedd, listeddtext, listedttext;

for (var i=0; i< textNodes.length; i++) {
   listedt = document.createElement('dt');
   listedttext = document.createTextNode(textNodes[i].t);
   listedt.appendChild(listedttext);
   listedd = document.createElement('dd');
   listeddtext = document.createTextNode(textNodes[i].d);
   listedd.appendChild(listeddtext);

    listeDL.appendChild(listedt);
    listeDL.appendChild(listedd);
}

// On insère le tout dans mainDiv
mainDiv.appendChild(paragraph);
mainDiv.appendChild(listeDL);


// On insère mainDiv dans le <body>
document.body.appendChild(mainDiv);

