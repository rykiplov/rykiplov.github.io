define(
		[
			'jquery',
			'knockout',
			'view-model/header/header',
			'view-model/toolbar/toolbar',
			'view-model/products/products',
			'view-model/sidebar/sidebar',
			'view-model/pagination/pagination',
			'view-model/footer/footer',
			'core/data_object',
			'text!view/main.tmpl'
		],

		function(
				$,
				ko,
				HeaderViewModel,
				ToolbarViewModel,
				ProductsViewModel,
				SidebarViewModel,
				PaginationViewModel,
				FooterViewModel,
				DataObject,
				mainTemplate
		) {
			var MainViewModel = function(options) {
				//  ---------------------------------------------
				//  Variables
				//  ---------------------------------------------
				var self = this; //save main context
				self.element = options.element; //keep a reference to the root element

				//  ---------------------------------------------
				//  Applying main template
				//  ---------------------------------------------
				self.element.html(mainTemplate);

				//  ---------------------------------------------
				//  Create HeaderViewModel
				//  ---------------------------------------------
				var headerElement = self.element.find('#header'); //keep a reference to the header block
				self.productList = new HeaderViewModel({
					element: headerElement
				});

				//  ---------------------------------------------
				//  Create ToolBarViewModel
				//  ---------------------------------------------
				var toolbarElement = self.element.find('#toolbar'); //keep a reference to the header block
				self.topToolbar = new ToolbarViewModel({
					toolbarElement: toolbarElement
				});

				//  ---------------------------------------------
				//  Create ProductsViewModel
				//  ---------------------------------------------
				var productsElement = self.element.find('#products'); //keep a reference to the header block
				self.productList = new ProductsViewModel({
					element: productsElement
				});

				//  ---------------------------------------------
				//  Create SidebarViewModel
				//  ---------------------------------------------
				var sidebarElement = self.element.find('#sidebar');
				self.sidebar = new SidebarViewModel({
					sidebarElement: sidebarElement
				});

				//  ---------------------------------------------
				//  Create PaginationViewModel
				//  ---------------------------------------------
				var paginationElement = self.element.find("#pagination");
				self.pagination = new PaginationViewModel({
					paginationElement : paginationElement
				});

				//  ---------------------------------------------
				//  Create FooterViewModel
				//  ---------------------------------------------
				var footerElement = self.element.find('#footer'); //keep a reference to the main_footer block
				self.footer = new FooterViewModel({
					element: footerElement
				});

				// ko.components.register('my-header', {
				// 	viewModel: { require: 'view-model/header/header'},
				// 	template: { require: 'text!view-model/header/header.tmpl'}
				// })
			};
			return MainViewModel;
		}
);
