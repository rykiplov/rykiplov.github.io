define(
		['jquery', 'underscore', 'knockout',  'core/get_product_list', 'core/data_object', 'text!view-model/sidebar/sidebar.tmpl'],

		function ($, _, ko, getProductList, DataObject, sidebarTemplate) {
			var SidebarViewModel = function (options) {
				//Variables
				var self = this;
				self.sidebarElement = options.sidebarElement;
				self.currentProductsPerPage = DataObject.currentProductsPerPage;
				self.pageNumber = DataObject.pageNumber;
				self.items = DataObject.items();
				self.itemsTotal = ko.computed(function () {
					return self.items.length;
				});
				self.filterPrice = ko.observableArray();

				//Applying template
				self.sidebarElement.html(sidebarTemplate);

				//Filtering by price using Underscore
				self.applyPriceFilter = ko.computed(function(){
					if (self.filterPrice().length !== 0) {
						var minValue, maxValue;

						$.each(self.filterPrice(), function() {
							var min = Number(this.split('-')[0]),
									max = Number(this.split('-')[1]);

							if (!minValue && !maxValue) {
								minValue = min;
								maxValue = max;
							}
							if (minValue > min) minValue = min;
							if (maxValue < max) maxValue = max;
						});
						console.log(_);
							var filterItems = _.filter(self.items, function(item) {
								return (item.price() > minValue && item.price() < maxValue);
							});
						DataObject.pageNumber(0);
						DataObject.items(filterItems);
							}
							else
							{
								DataObject.pageNumber(0);
								DataObject.items(self.items);
							}
				});
			};
			return SidebarViewModel;
		});