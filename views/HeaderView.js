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
	}

});
