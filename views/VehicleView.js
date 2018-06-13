App.VehicleView = Backbone.View.extend({

	initialize : function() {
		App.vehicle = App.vehicles.get(App.vehicleID);
		//here in all cases "films" does not come as array of strings but as plain string
		var url = App.vehicle.attributes.films;
		//in case it hasn't been already transformed to film object
		if(typeof url === "string"){
			App.vehicle.attributes.films = App.helpers.loadJSON(url);
		}
		this.data = App.vehicle.toJSON();
		this.tpl = this.template();
	},

	template : function() { 
		return {
			compiled : _.template(App.tpl.vehicle),
			data : this.data,
		}
	},

	render : function() {
		// Generate template HTML version
		var html = this.tpl.compiled(this.tpl.data);
		// Set this view's html
		$(this.el).html(html);
		return this;
	},

	afterRender : function() {
		//all things happening after html render
		$(".film-link").on("click", function(e){
			e.preventDefault();
			App.router.navigate("film/" + $(this).data("id"), {trigger:true});
		});
	}

});
