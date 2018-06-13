# ghibli-client

Notes on commits:

Sunday June 10th

First commit. A skeleton of my typical Backbone application, with empty Collections, Models and Views.
This took me literally no time at all since I always have an empty app like this, and I just added a few things in 10 minutes and did the commit. That means empty files for Collections, Models, Templates and Views.
A config file was added providing API url and endpoints.
Added a header template with the studio logo.
The application by default has a feature that brings the browser to the homepage every X minutes after no clicks. The timeout can be set in the config file under assets/config/global.conf

No special coding yet, that should come later this week.

ToDo: add routes/views/collections/templates for producers and directors

ToDo: add routes/views/templates and flag for "seen by me"

ToDo: add input to do a filter/search by title

------------------------------------------------------------

Monday June 11th

I'm not using models separately so I removed the 'models' folder.
the homepage (film list) is created and I finished the views/template for "seen" films. All seen filmID's will be stored locally.
Updated foundation css and js, and added html features for the header. (tab links)

All of the collections are loaded intially and then the application uses them locally to query the data.

updated live version:
http://nachomartinez.art/ghibli-client/

------------------------------------------------------------

Tuesday June 12th

Film details page is done. It includes an "eye icon" to toggle between seen/unseen.
List of all producers and directors available, in alphabetical order.
Random unseen film.

PENDING:

- Details for People, Locations, Vehicles
- General overwiew of code, performance, final wrap.

updated live version:
http://nachomartinez.art/ghibli-client/

------------------------------------------------------------

Wednesday June 13th

Details page for People.

- Pending: Locations, Vehicles.
- General overwiew of code, performance, final wrap.

updated live version:
http://nachomartinez.art/ghibli-client/


