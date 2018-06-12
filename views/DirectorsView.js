App.DirectorsView = Backbone.View.extend({

	initialize : function() {
		//get film list
		this.data = App.directors.sort();
		this.tpl = this.template();
	},

	template : function() { 
		return {
			compiled : _.template(App.tpl.directors),
			data : {directors : this.data},
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
		//set tab to active on first load
		$("#tab-directors").addClass("is-active");
		$("#tab-directors a").attr("aria-selected","true");
	}

});
