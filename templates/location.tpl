<h1>Location</h1>
<h3><strong>Name:</strong> <%= name %></h3>
<strong>Terrain:</strong> <%= terrain %><br>
<strong>Climate:</strong> <%= climate %><br>
<strong>Surface water:</strong> <%= surface_water %><br><br>
<strong>Films:</strong> <br>
<% _.each(films, function(film, index){ %>
	<a href="#" class="film-link" data-id="<%= film.id %>"><%= film.title %></a><br>
<% }); %>