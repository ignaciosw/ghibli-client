App.HeaderView = Backbone.View.extend({

	initialize : function() {
		//get film list
		this.data = {};
		this.tpl = this.template();
	},

	template : function() { 
		return {
			compiled : _.template(App.tpl.header),
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
		$(".tabs-title").on("click", function(){
			$(".tabs-title a").removeAttr("aria-selected");
			$(".tabs-title").removeClass("is-active");
			$(this).addClass("is-active");
			$(this).find("a").attr("aria-selected","true");
		});

		//RANDOM FILM LINK
		$("#tab-random").on("click", function(e){
			e.preventDefault();

			//shuffle film list
			var shuffleFilms = new Backbone.Collection(App.films.shuffle());
			//remove seen films
			_.each(App.seenID.records, function(id){
				shuffleFilms.remove(shuffleFilms.get(id));
			});

			//if there are still some unseen ones, choose the first one
			//or else show alert saying that you've seen them all
			if(shuffleFilms.models.length > 0){
				App.router.navigate("film/" + shuffleFilms.models[0].get("id"), {trigger:true})
			}else{
				alert("you've seen all of the movies...");
			}
		});
	}

});
