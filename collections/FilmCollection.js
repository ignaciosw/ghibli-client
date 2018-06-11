App.FilmCollection = Backbone.Collection.extend({
	//Specify REST URL
	initialize: function () {
		this.url = App.config.url.api + App.config.url.films,
		this.fetch({
			async: false,
            success: this.fetchSuccess,
            error: this.fetchError
        });
	},
	fetchSuccess: function (collection, response) {
        /*
            When a film includes all of the people/locations/vehicles, it just points a single link to ALL.
            But when there's only a few, it has an array of links... so that means I have to tweak it up 
            a little bit so that the json always looks the same when I want to see the list on the template.
            Further explanation inside the code.
            I make this also so I don't have to make so many calls the API to loop through a film and
            its lists of things. The API throws a 404 when you reached the limit per minute.
            Instead I load all items once on first load, and then look through the collections.
        */

        _.each(collection.models, function(model){
            var people = model.attributes.people;
            _.each(people, function(item,index){
                var endpoint = App.config.url.api + App.config.url.people;
                var url = item;
                //if there's no array of id's but just one url of all items, point to the whole collection.
                if(url == endpoint){
                    model.attributes.people = App.people.toJSON();
                }else{
                    //remove api url to get the id and search locally in the collection.
                    //then transform to the backbone model to json.
                    var id = url.replace(endpoint, '');
                    model.attributes.people[index] = App.people.get(id).toJSON();
                }
            });

            var locations = model.attributes.locations;
            _.each(locations, function(item,index){
                var endpoint = App.config.url.api + App.config.url.locations;
                var url = item;
                
                //if there's no array of id's but just one url of all items, point to the whole collection.
                if(url == endpoint){
                    model.attributes.locations = App.locations.toJSON();
                }else{
                    //remove api url to get the id and search locally in the collection.
                    //then transform to the backbone model to json.
                    var id = url.replace(endpoint, '');
                    model.attributes.locations[index] = App.locations.get(id).toJSON();
                }
            });

            var vehicles = model.attributes.vehicles;
            _.each(vehicles, function(item,index){
                var endpoint = App.config.url.api + App.config.url.vehicles;
                var url = item;
                //if there's no array of id's but just one url of all items, point to the whole collection.
                if(url == endpoint){
                    model.attributes.vehicles = App.vehicles.toJSON();
                }else{
                    //remove api url to get the id and search locally in the collection.
                    //then transform to the backbone model to json.
                    var id = url.replace(endpoint, '');
                    console.log(id);
                    model.attributes.vehicles[index] = App.vehicles.get(id).toJSON();
                }
            });
        });
    },

    fetchError: function (collection, response) {
        throw new Error("fetch error");
    }
});