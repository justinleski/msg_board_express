# msg_board_express
### Purpose
The ultimate goal of this small project was to strengthen my understanding of routes and apply them. It is important to note that the current functionality of this app does not permanently store messages --as evident by the lack of database. But, I plan to dive into this soon.

### Challenges Faced
#### Routing
Routing was the main challenege but a fun one at that. Understanding how Express treats routes alowed me to better tailor this app to it's purpose while maintaining a clean codebase. The one issue I had was my understanding of how the `indexRouter` works. Initially, I thought a needed a new router for each page to be `use`d by the `app`. So, I had an unnecessary `newRouter` which was intended to route to `/new` every time a button was pressed. Although, what I failed to realize at the time was that since we're directing from the index page, we had to use `indexRouter` and then another `get` to handle the get requests as this was scoped to the index page.