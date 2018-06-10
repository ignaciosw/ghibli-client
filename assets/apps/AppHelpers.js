App.helpers = {

	// Template files loader
	loadTemplates : function(templates) {

		var tpl = {};

		$.each(templates, function(id, url) {
			$.ajax({
				async : false,
				type: "GET",
				url : url
			}).done(function(template) {
				tpl[id] = template;
			});
		});

		return tpl;
	},

	reloadPage : function(){
		// Reset current route (we need to go to a fake route first, then go back to our current route)
		var route = Backbone.history.getFragment();
		App.router.navigate("null", { trigger: false });
		App.router.navigate(route, { trigger: true });
	},

	loadJSON : function(url){
		var result;
		$.ajax({
			async : false,
			type: "GET",
			url : url
		}).done(function(res) {
			result = res;
		});

		return result;
	},
	
	findDeep : function(obj, subObj, attr){
		return _(obj).chain().
			    pluck(subObj).
			    flatten().
			    findWhere(attr).
			    value();
	},

    removeChar:function(params,value){
        params = params.replace(new RegExp(value, 'g'),'');
        params = params.replace(/[^\w\s]/gi,'');
      return params;
    },

    removeSpace:function(params){
      var arrayOfException = ["'",'"',"/"," ","®","[()]","[.]","[,]","[+]","[&]","[-]","’"];
      for(var i=0; i < arrayOfException.length; i++){
        params = this.removeChar(params,arrayOfException[i]);
      }
      return params;
    },

    deepClone:function(object) {
		var clone = _.clone(object);

		_.each(clone, function(value, key) {
		  if (_.isObject(value)) {
		    clone[key] = App.helpers.deepClone(value);
		  }
		});

		return clone;
	},
}