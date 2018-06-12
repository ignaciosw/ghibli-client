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

		$("#tab-random").on("click", function(e){
			e.preventDefault();
			var shuffleFilms = new Backbone.Collection(App.films.shuffle());
			_.each(App.seenID.records, function(id){
				shuffleFilms.remove(shuffleFilms.get(id));
			});
			if(shuffleFilms.models.length > 0){
				var randomIndex = Math.abs(Math.ceil(Math.random() * shuffleFilms.models.length-1) + 0);
				App.router.navigate("film/" + shuffleFilms.models[randomIndex].get("id"), {trigger:true})
			}else{
				alert("you've seen all of the movies...");
			}
		});
	}

});
