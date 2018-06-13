App.PeopleView = Backbone.View.extend({

	initialize : function() {
		App.person = App.people.get(App.personID);
		//get film list
		_.each(App.person.attributes.films, function(film,index){
			var url = film;
			//in case it hasn't been already transformed to film object
			if(typeof url === "string"){
				App.person.attributes.films[index] = App.helpers.loadJSON(url);
			}
		});

		this.data = App.person.toJSON();
		this.tpl = this.template();
	},

	template : function() { 
		return {
			compiled : _.template(App.tpl.people),
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
