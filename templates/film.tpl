<div>
	<div>
		<h1>Film</h1>
		<a href="#" class="seen"><img class="gray-eye" style="height: 50px; float:right" src="./assets/img/icon-eye.png" title="Not seen by me"></a></div>
</div>
<div>
	<h3>Title: <%= title %></h3>
</div>
<div>
	<strong>Description</strong> : <%= description %><br>
	<strong>Director</strong> : <%= director %><br>
	<strong>Producer</strong> : <%= producer %><br><br>
</div>
<table class="responsive-card-table unstriped" width="100%">
	<tbody>
	    <tr>
	      	<td valign="top" width="34%">
	      		<strong>People:</strong> <br>
				<% _.each(people, function(person){ %>
					<div><a class="person-link" href="#" data-id="<%= person.id %>"><%= person.name %></a></div>
				<% }); %>
				</td>
			<td valign="top" width="33%">
				<strong>Locations:</strong>
				<% _.each(locations, function(location){ %>
					<div><a class="location-link" href="#" data-id="<%= location.id %>"><%= location.name %></a></div>
				<% }); %>
			</td>
			<td valign="top" width="33%">
				<strong>Vehicles:</strong>
				<% _.each(vehicles, function(vehicle){ %>
					<div><a class="vehicle-link" href="#" data-id="<%= vehicle.id %>"><%= vehicle.name %></a></div>
				<% }); %>
			</td>
		</tr>
	</tbody>
</table>