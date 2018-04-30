define(
		['jquery', 'knockout', 'core/data_object', 'text!view-model/pagination/pagination.tmpl'],

		function($, ko, DataObject, paginationTemplate) {
			var PaginationViewModel = function (options) {
				var self = this;
				self.paginationElement = options.paginationElement;
				self.items = DataObject.items;
				self.pageNumber = DataObject.pageNumber;
				self.currentProductsPerPage = DataObject.currentProductsPerPage;

				//Apply template
				self.paginationElement.html(paginationTemplate);

				//Move to page
				self.moveToPage = function (number) {
					self.pageNumber(number);
					DataObject.pageNumber(self.pageNumber());
				};

				//Move to prev page
				self.moveToPrevPage = function () {
					if(self.pageNumber() > 0) {
						self.pageNumber(self.pageNumber() - 1);
						DataObject.pageNumber(self.pageNumber());
					}
				};

				//Move to next page
				self.moveToNextPage = function () {
					if(self.pageNumber() < self.maxPageNumber()) {
						self.pageNumber(self.pageNumber() + 1);
						DataObject.pageNumber(self.pageNumber());
					}
				};

				//Move to first page
				self.moveToFirstPage = function () {
					DataObject.pageNumber(0)
				};

				//Move to last page
				self.moveToLastPage = function () {
					DataObject.pageNumber(self.maxPageNumber());
				};

				//Count pages in pagination
				self.maxPageNumber = ko.computed(function () {
					var maxPageNumber = Math.ceil(self.items().length / self.currentProductsPerPage()) - 1;
					if(maxPageNumber !== -1 && maxPageNumber < self.pageNumber()) {
						DataObject.pageNumber(maxPageNumber);
					}
					return maxPageNumber;
				});
				
				self.pagers = ko.computed(function () {
					var middle = parseInt(self.currentProductsPerPage() / 2),
							start  = 0,
							end    = self.maxPageNumber(),
							sequence = [];

					if (self.maxPageNumber() > self.currentProductsPerPage()) {
						if (self.pageNumber < middle) end = self.currentProductsPerPage();
						else if (self.pageNumber() >= self.maxPageNumber() - middle) start = self.maxPageNumber() - self.currentProductsPerPage() + 1;
						else {
							start = self.pageNumber() - middle;
							end = self.pageNumber() + middle;
						}

					}
					for (var i = start; i <= end; i++) sequence.push(i);

					return sequence;
				})
			};
			return PaginationViewModel;
		});