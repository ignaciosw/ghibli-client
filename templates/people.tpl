<h1>People</h1>
<h3><strong>Name:</strong> <%= name %></h3>
<strong>Gender:</strong> <%= gender %><br>
<strong>Age:</strong> <%= age %><br>
<strong>Hair Color:</strong> <%= hair_color %><br>
<strong>Eye Color:</strong> <%= eye_color %><br><br>
<strong>Films:</strong> <br>
<% _.each(films, function(film, index){ %>
	<a href="#" class="film-link" data-id="<%= film.id %>"><%= film.title %></a><br>
<% }); %>