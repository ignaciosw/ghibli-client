App.LocationView = Backbone.View.extend({

	initialize : function(params) {
		this.data = {};
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
		//all things that happen after html render
	}

});
