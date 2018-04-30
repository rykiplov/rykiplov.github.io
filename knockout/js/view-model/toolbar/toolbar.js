define(
		['jquery', 'knockout', 'core/data_object', 'text!view-model/toolbar/toolbar.tmpl'],

		function($, ko, DataObject, toolbarTemplate) {
			var ToolbarViewModel = function(options) {
				//  ---------------------------------------------
				//  Variables
				//  ---------------------------------------------
				var self = this; //save main context
				self.toolbarElement = options.toolbarElement; //keep a reference to the root element
				self.productsPerPage = ko.observableArray([9, 18, 24]);
				//data from read set
				self.currentProductsPerPage = DataObject.currentProductsPerPage;
				self.pageNumber = DataObject.pageNumber;
				self.items = DataObject.items;
				self.itemsTotal = ko.computed(function () {
					return self.items().length;
				});

				//  ---------------------------------------------
				//  Applying template
				//  ---------------------------------------------
				self.toolbarElement.html(toolbarTemplate);
				
				// Getting starting position
				self.getProductStartPosition = function () {
					if (self.pageNumber() == 0) return self.pageNumber() + 1;
					else return (self.pageNumber() * self.currentProductsPerPage()) + 1;
				};

				//Getting end position
				self.getProductEndPosition = function () {
					if(self.pageNumber() == 0) return (self.pageNumber() + 1) * self.currentProductsPerPage();
					else if ((self.pageNumber() +1) * self.currentProductsPerPage() <= self.items().length) return (self.pageNumber + 1) * self.currentProductsPerPage();
					else return self.items().length;
				};

				//Filtering functions
				self.filterByName = function () {
					self.items.sort(function(first, second){
						return first.name().toLowerCase() > second.name().toLowerCase() ? 1 : -1;
					})
				};

				self.filterByPrice = function () {
					self.items.sort(function(first, second) {
						return first.price() > second.price() ? 1 : -1;
					} )
				};

				self.filterByPosition = function () {
					self.items.sort(function (first, second) {
						return first.id() > second.id() ? 1 : -1;
					})
				};

				//search start
				// self.Query = ko.observable('');
				// self.searchResults = ko.computed(function () {
				// 	var q = self.Query;
				// 	return self.items().filter(function (i) {
				// 		return i.name().toLowerCase().indexOf(q) >= 0;
				// 	});
				// });
				//search end

				self.filterOptions = ["Name", "Price", "Position"];

				self.currentFilter = ko.observable("Name");

				self.currentFilter.subscribe(function (filter) {
					switch (filter) {
						case "Name":
							self.filterByName();
							break;
						case "Price":
							self.filterByPrice();
							break;
						case "Position":
							self.filterByPosition();
							break;
					}
				})
			};

			return ToolbarViewModel;
		}
);
