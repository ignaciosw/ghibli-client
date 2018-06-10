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
		});

		// Start the inactivity timer
		App.inactivityTimeout = App.config.timeout*60*1000;
		App.inactivity();
		// Restart it on all clicks
		$(window).on("click", function(e){
			App.inactivityReset();
		});

		App.start();
	}

	App.start = function() {
		// Init router object
		App.router = new App.Router({ "container" : App.config.container });
		// Start the main router
		Backbone.history.start();
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