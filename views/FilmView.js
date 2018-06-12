App.FilmView = Backbone.View.extend({

	initialize : function() {
		App.film = App.films.get(App.filmID);
		this.data = App.film.toJSON();//transform the whole model to JSON.
		this.tpl = this.template();
	},

	template : function() { 
		return {
			compiled : _.template(App.tpl.film),
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

		//find if film is seen
		if(_.indexOf(App.seenID.records, App.filmID) > -1){
			$(".seen").find("img").removeClass("gray-eye").attr("title","Seen by me");
		}

		//seen button beheaviour
		$(".seen").on("click", function(e){
			e.preventDefault();
			if($(this).find("img").hasClass("gray-eye")){
				App.seenID.records.push(App.filmID);
				App.seenID.save();
				$(this).find("img").removeClass("gray-eye").attr("title","Seen by me");
			}else{
				App.seenID.records = _.without(App.seenID.records, App.filmID);
				App.seenID.save();
				$(this).find("img").addClass("gray-eye").attr("title","Not seen by me");
			}
		});

		//set links behaviour
		$(".person-link").on("click", function(e){
			e.preventDefault();
			App.router.navigate("people/" + $(this).data("id"), {trigger:true});
		});

		$(".location-link").on("click", function(e){
			e.preventDefault();
			App.router.navigate("location/" + $(this).data("id"), {trigger:true});
		});

		$(".vehicle-link").on("click", function(e){
			e.preventDefault();
			App.router.navigate("vehicle/" + $(this).data("id"), {trigger:true});
		});
	}

});