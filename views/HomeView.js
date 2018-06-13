App.HomeView = Backbone.View.extend({

	initialize : function() {
		this.data = App.films.toJSON();
		this.tpl = this.template();
	},

	template : function() { 
		return {
			compiled : _.template(App.tpl.home),
			data : {films : this.data},
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
		//all things that happen after html render
		var self = this;

		//set tab to active on first load
		$("#tab-home").addClass("is-active");
		$("#tab-home a").attr("aria-selected","true");

		$("#sortBy_" + App.films.orderByField).attr("checked","true");

		$(".film-link").on("click", function(e){
			e.preventDefault();
			App.router.navigate("film/" + $(this).data("id"), {trigger:true});
		});

		//SORT
		$("#sortBy_title").on("click", function(e){
			App.films.orderByField = "title";
			App.films.models = App.films.sortBy(App.films.orderByField);
			//reload content after sort
			App.helpers.reloadPage();
		});

		$("#sortBy_release_date").on("click", function(e){
			App.films.orderByField = "release_date";
			App.films.models = App.films.sortBy(App.films.orderByField);
			//reload content after sort
			App.helpers.reloadPage();
		});
	}
});