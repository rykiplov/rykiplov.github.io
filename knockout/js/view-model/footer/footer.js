define(
		['jquery', 'knockout', 'text!view-model/footer/footer.tmpl'],

		function($, ko, footerTemplate) {
			var FooterViewModel = function(options) {
				//  ---------------------------------------------
				//  Variables
				//  ---------------------------------------------
				var self = this;
				self.element = options.element;

				//  ---------------------------------------------
				//  Applying template
				//  ---------------------------------------------
				self.element.html(footerTemplate);
			};

			return FooterViewModel;
		}
);
