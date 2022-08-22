define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

return iatExtension({
	category1 : {
		name : 'Networking', //Will appear in the data.
		title : {
			media : {word : 'Networking'}, //Name of the category presented in the task.
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
			{image: 'proyectos.jpg'}
			], 
		//Stimulus css (style)
		stimulusCss : {color:'#31940F','font-size':'1.8em'}
	},	
	category2 :	{
		name : 'No networking', //Will appear in the data.
		title : {
			media : {word : 'No networking'}, //Name of the category in the task.
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
		name : 'Legítimo',
		title : {
			media : {word : 'Legítimo'},
			css : {color:'#0000FF','font-size':'1.8em'},
			height : 4 //Used to position the "Or" in the combined block.
			},
		stimulusMedia : [ //Stimuli content as PIP's media objects
			{word: 'Legítima'},
			{word: 'Orgullesa'},
			{word: 'Sincera'},
			{word: 'Auténtica'},
			{word: 'Cómoda'}
			],
		//Stimulus css
		stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

	attribute1 :	{
		name : 'Ilegítimo',
		title : {
			media : {word : 'Ilegítimo'},
			css : {color:'#0000FF','font-size':'1.8em'},
			height : 4 //Used to position the "Or" in the combined block.
			},
		stimulusMedia : [ //Stimuli content as PIP's media objects
			{word: 'Ilícita'},
			{word: 'Avergonzada'},
			{word: 'Falsa'},
			{word: 'Incómoda'},
			{word: 'Indigna'}
			],
		//Stimulus css
		stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

	base_url : {//Where are your images at?
		image : 'https://gimenor.github.io/iattest.github.io/'
		} 
	});
});
