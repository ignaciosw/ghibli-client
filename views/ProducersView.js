App.ProducersView = Backbone.View.extend({

	initialize : function() {
		//get film list
		this.data = App.producers.sort();
		this.tpl = this.template();
	},

	template : function() { 
		return {
			compiled : _.template(App.tpl.producers),
			data : {producers : this.data},
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
		$("#tab-producers").addClass("is-active");
		$("#tab-producers a").attr("aria-selected","true");

	}

});
