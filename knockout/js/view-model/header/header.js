define(
		['jquery', 'knockout', 'text!view-model/header/header.tmpl'],

		function($, ko, headerTemplate) {
			var HeaderViewModel = function(options) {
				//  ---------------------------------------------
				//  Variables
				//  ---------------------------------------------
				var self = this;
				self.element = options.element;

				//  ---------------------------------------------
				//  Applying template
				//  ---------------------------------------------
				self.element.html(headerTemplate);
			};

			return HeaderViewModel;
		}
);
