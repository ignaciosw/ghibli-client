App.LocationCollection = Backbone.Collection.extend({
	//Specify REST URL
	initialize: function () {
		this.url = App.config.url.api + App.config.url.locations,
		this.fetch({
			async: false,
            success: this.fetchSuccess,
            error: this.fetchError
        });
	},
	fetchSuccess: function (collection, response) {
		//console.log(collection);
    },

    fetchError: function (collection, response) {
        throw new Error("fetch error");
    }
});