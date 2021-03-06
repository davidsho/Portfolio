# Portfolio Site

This project was bootstrapped with Create React App. It is my first React project.

## Project Layout

This project is a website for my personal portfolio, which includes my previous and ongoing projects.

It has two pages: the home page and the portfolio page. The home page is a simple layout showing buttons for navigation,
the current bitcoin value and a div with a short about me section. The home page also shows what I'm currently listening to 
on Spotify and changes the background image accordingly. Both the home and portfolio pages use particles.js. The portfolio page
shows my projects that I am currently undertaking or have undertaken in the past. It also shows the song I'm currently listening
to and has a button to return to the home page. It uses react-router-dom to ensure both pages are loaded upon visit to the site
to minimise delays.

## Todo

- [x] Add portfolio section
- [x] Enable now playing on portfolio
- [ ] Add more than one project on portfolio
- [ ] Write text for projects
- [x] Fix support for mobile
- [x] Improve layout for mobile
- [x] Add default background image
- [x] Edit colouring of text boxes
- [x] Remove particles.js entirely on mobile and while song playing on desktop
- [x] Improve image loading
- [x] New page for crypto tracking
- [x] Add crypto table
- [x] Format crypto table for mobile
- [x] Fix 404 error on /* routes
- [ ] Add back to top button on pages that require it
- [ ] Write API for now playing into index.js so API Key is not exposed client-side