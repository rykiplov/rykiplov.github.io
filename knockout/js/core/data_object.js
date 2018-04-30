define(
  ['jquery', 'knockout', 'core/get_product_list'],

  function($, ko, getProductList) {
    var jsonUrl = '/js/model/products.json';

    var DataObject = {
      items: getProductList(jsonUrl),
	    currentProductsPerPage: ko.observable(9),
      pageNumber: ko.observable(0)
    };

    return DataObject;
  }
);
