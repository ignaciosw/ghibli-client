App.Router = Backbone.Router.extend({

	initialize : function(params) {
		this.container = params.container;
	},

	//add all the routes pointing to methods
	routes : {
		"" : "home",
		"film/:id" : "showFilm",
		"location/:id" : "showLocation",
		"people/:id" : "showPeople",
		"vehicle/:id" : "showVehicle"
	},

	home : function() {
		this.currentPage = "home";
		this.changePage([
			new App.HeaderView(),
			App.view = new App.HomeView()
		]);
	},

	showFilm : function(id) {
		this.currentPage = "film";
		this.changePage([
			new App.HeaderView(),
			App.view = new App.FilmView()
		]);	
	},

	showLocation : function(id) {
		this.currentPage = "location";
		this.changePage([
			new App.HeaderView(),
			App.view = new App.LocationView()
		]);
	},

	showPeople : function(id) {
		this.currentPage = "people";
		this.changePage([
			new App.HeaderView(),
			App.view = new App.PeopleView()
		]);
	},

	showVehicle : function(id) {
		this.currentPage = "vehicle";
		this.changePage([
			new App.HeaderView(),
			App.view = new App.VehicleView()
		]);
	},

	changePage : function(views) {
		var self = this;
		$(this.container).html("");
		// Build template html
		var $html = $("<div></div>");
		$html.addClass("main-container-inner");
		$html.addClass(this.currentClass);
		$html.attr("id",this.currentPage);

		_.each(views, function(view) {
	        view.render();
	        $html.append($(view.el).html());
		});
		
		// Append the new page
        $.when(

        	$(this.container).append($html)

        ).done(function() {
        	// Set events for each view
        	_.each(views, function(view) {
        		if (typeof view.afterRender == "function") {
	       			view.afterRender();
	       		}
			});
        });
	}
});