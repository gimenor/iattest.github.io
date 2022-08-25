define(['pipAPI', 'https://gimenor.github.io/iattest.github.io/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

return iatExtension({
	category1 : {
		name : 'Hacer Networking', //Will appear in the data.
		title : {
			media : {word : 'Hacer Networking'}, //Name of the category presented in the task.
			css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
			height : 4 //Used to position the "Or" in the combined block.
			}, 
		stimulusMedia : [ //Stimuli content as PIP's media objects
			{image: 'deportes.jpg'},
			{image: 'comidas.jpg'},
			{image: 'conferencias.jpg'},
			{image: 'copas.jpg'},
			{image: 'eventos.jpg'},
			{image: 'despachos.jpg'},
			{image: 'regalos.jpg'},
			{image: 'redes.jpg'}
			], 
		//Stimulus css (style)
		stimulusCss : {color:'#31940F','font-size':'1.8em'}
	},	
	category2 :	{
		name : 'Sacar trabajo adelante', //Will appear in the data.
		title : {
			media : {word : 'Sacar trabajo'}, //Name of the category in the task.
			css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
			height : 4 //Used to position the "Or" in the combined block.
			}, 
		stimulusMedia : [ //Stimuli content as PIP's media objects
			{image: 'estrategias.jpg'},
			{image: 'decisiones.jpg'},
			{image: 'design.jpg'},
			{image: 'personal.jpg'},
			{image: 'informes.jpg'},
			{image: 'problemas.jpg'},
			{image: 'organizar.jpg'},
			{image: 'recursos.jpg'}
			], 
		//Stimulus css
		stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

	attribute2 : 	{
		name : 'Bueno',
		title : {
			media : {word : 'Bueno'},
			css : {color:'#0000FF','font-size':'1.8em'},
			height : 4 //Used to position the "Or" in the combined block.
			},
		stimulusMedia : [ //Stimuli content as PIP's media objects
			{word: 'Fiable'},
			{word: 'Justo'},
			{word: 'Aceptable'},
			{word: 'Ético'},
			{word: 'Responsable'},
			{word: 'Noble'},
			{word: 'Auténtico'},
			{word: 'Honesto'},
			{word: 'Íntegro'},
			{word: 'Placentero'}
			],
		//Stimulus css
		stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

	attribute1 :	{
		name : 'Malo',
		title : {
			media : {word : 'Malo'},
			css : {color:'#0000FF','font-size':'1.8em'},
			height : 4 //Used to position the "Or" in the combined block.
			},
		stimulusMedia : [ //Stimuli content as PIP's media objects
			{word: 'Inaceptable'},
			{word: 'Desleal'},
			{word: 'Deshonesto'},
			{word: 'Falso'},
			{word: 'Incómodo'},
			{word: 'Injusto'},
			{word: 'Inmoral'},
			{word: 'Intrusivo'},
			{word: 'Miserable'},
			{word: 'Bochornoso'}
			],
		//Stimulus css
		stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

	base_url : {//Where are your images at?
		image : 'https://gimenor.github.io/iattest.github.io/'
		} 
	});
});
