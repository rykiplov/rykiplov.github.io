define(
		['jquery', 'knockout', 'core/data_object', 'text!view-model/products/products.tmpl'],

		function($, ko, ReadSetData, productsTemplate) {
			var ProductsViewModel = function(options) {
				//  ---------------------------------------------
				//  Variables
				//  ---------------------------------------------
				var self = this; //save main context
				self.element = options.element; //keep a reference to the root element

				//  ---------------------------------------------
				//  Applying template
				//  ---------------------------------------------
				self.element.html(productsTemplate);

				//  ---------------------------------------------
				//  Tracking changes in ReadSetData and returning the current product page
				//  ---------------------------------------------
				self.pagedList = ko.dependentObservable(function() {
					var size = this.currentProductsPerPage(),
							start = this.pageNumber() * size;
					return this.items.slice(start, start + size);
				}, ReadSetData);
			};
			return ProductsViewModel;
		}
);
