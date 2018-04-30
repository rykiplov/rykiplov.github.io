require.config({
	paths: {
		text: '../libs/text/text',
		jquery: '../libs/jquery/jquery-min',
		popper: '../libs/popper/popper-min',
		underscore: '../libs/underscore/underscore',
		knockout: '../libs/knockout/knockout',
		bootstrap: '../libs/bootstrap-grid/bootstrap',
		material_design: '../libs/material-design/mdb'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		material_design: {
			deps: ['jquery']
		}
	}
});


require(['jquery', 'popper', 'bootstrap', 'knockout', 'material_design', 'main'], function(
		$,
		popper,
		bootstrap,
		ko,
		Material_design,
		MainViewModel
) {
	var mainContent = $('#main'); //keep a reference to the root element

	//  ---------------------------------------------
	//  Applying bind of the MainViewModel
	//  ---------------------------------------------
	ko.applyBindings(
			new MainViewModel({
				element: mainContent
			}),
			mainContent[0]
	);
});