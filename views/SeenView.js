App.SeenView = Backbone.View.extend({

	initialize : function() {
		//create the collection on each load in case there are new changes in the local data
		App.seen = new Backbone.Collection(App.films.toJSON());
		//then sort by title
		App.seen.models = App.seen.sortBy("title");
		App.seen.orderByField = "title";
		//finally filter with "seen" ID's and populate
 		App.seen.models = App.helpers.filterById(App.films, App.seenID.records);
		
		this.data = App.seen.toJSON();
		this.tpl = this.template();
	},

	template : function() { 
		return {
			compiled : _.template(App.tpl.seen),
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
		$("#tab-seen").addClass("is-active");
		$("#tab-seen a").attr("aria-selected","true");

		$("#sortBy_" + App.seen.orderByField).attr("checked","true");

		$(".film-link").on("click", function(e){
			e.preventDefault();
			App.router.navigate("film/" + $(this).data("id"), {trigger:true});
		});
	}
});