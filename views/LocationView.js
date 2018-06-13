App.LocationView = Backbone.View.extend({

	initialize : function() {
		App.location = App.locations.get(App.locationID);
		//get film list
		_.each(App.location.attributes.films, function(film,index){
			var url = film;	
			//in case it hasn't been already transformed to film object
			if(typeof url === "string"){
				App.location.attributes.films[index] = App.helpers.loadJSON(url);
			}
		});
		
		this.data = App.location.toJSON();
		this.tpl = this.template();
	},

	template : function() { 
		return {
			compiled : _.template(App.tpl.location),
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
