(function(){
	// Main application boot
	App.boot = function() {

		App.tpl = App.helpers.loadTemplates({
			"header" : "templates/header.tpl",
			"home" : "templates/home.tpl",
			"film" : "templates/film.tpl",
			"location" : "templates/location.tpl",
			"people" : "templates/people.tpl",
			"vehicle" : "templates/vehicle.tpl",
			"seen" : "templates/seenByMe.tpl"
		});

		// Start the inactivity timer
		App.inactivityTimeout = App.config.timeout*60*1000;
		App.inactivity();
		// Restart it on all clicks
		$(window).on("click", function(e){
			App.inactivityReset();
		});

		//Load all collections
		App.people = new App.PeopleCollection();
		App.vehicles = new App.VehicleCollection();
		App.locations = new App.LocationCollection();
		
		App.films = new App.FilmCollection();
		App.films.models = App.films.sortBy("title");
		App.films.orderByField = "title";

		//load local storage
		App.seenfFilms = new App.FilmCollection();
		App.seenID = new Backbone.LocalStorage("seen-films");

		App.producers = App.getAllProducers();//todo
		App.directors = App.getAllDirectors();//todo

		App.start();
	}

	App.start = function() {
		// Init router object
		App.router = new App.Router({ "container" : App.config.container });
		// Start the main router
		Backbone.history.start();
	}

	App.getAllProducers = function(){
		var producers = [];
		_.each(App.films.models, function(film){
			producers.push(film.get("producer"));
		});
		return _.uniq(producers);
	}

	App.getAllDirectors = function(){
		var directors = [];
		_.each(App.films.models, function(film){
			directors.push(film.get("director"));
		});
		return _.uniq(directors);
	}

	App.inactivity = function() {
		App.inactivityTimer = setTimeout(function(){
			$(window).scrollTop(0);
			var currentRoute = Backbone.history.getFragment();
			if (currentRoute != "") {
				App.router.navigate("", { trigger: true });		
			} else {
				App.inactivityReset();				
			}
		}, App.inactivityTimeout);
	},

	App.inactivityReset = function() {
		clearTimeout(App.inactivityTimer);
		App.inactivity();
	}

})();

// On HTML loaded start the boot
$(document).ready(function() {
	App.boot();
});