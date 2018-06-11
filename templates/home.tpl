<div>Sort by: <input type="radio" name="sort" value="name" id="sortBy_title">&nbsp;Title | 
<input type="radio" name="sort" value="name" id="sortBy_release_date">&nbsp;Release Date</div>
<table class="home" width="100%">
	<tr>
		<th>Title</th>
		<th>Release Date</th>
	</tr>
	<tbody>
<% _.each(films, function(film){ %>
	<tr>
		<td>
			<a href="#" class="film-link" data-id="<%= film.id %>"><%= film.title %></a>
		</td>
		<td>
			<%= film.release_date %>
		</td>
	</tr>

<% }); %>
</tbody>

</table>