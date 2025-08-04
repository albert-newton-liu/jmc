## Jubilee Multicultural Church Website
This repository contains the source code for the official website of the Jubilee Multicultural Church, which I write for my friend, daneil. The site is a modern, responsive single-page application built with React, designed to inform the community about upcoming events, provide contact information, and facilitate giving. You can view the live website here: https://jubileemulticulturalchurch.com/

## Features
Events Page: Displays a list of upcoming church events with details such as date, time, and location. Events are loaded dynamically with a "Load More" button for a better user experience.

Contact Page: A dedicated page with essential contact information, including a contact form for visitors to send messages directly.

Giving Page: Provides clear and secure bank details for church offerings and donations, emphasizing the importance of stewardship.

Responsive Design: The entire site is built to be fully responsive, ensuring an optimal viewing experience on desktops, tablets, and mobile devices.

## Project Structure
The project follows a standard React folder structure:
```
src/
├── components/          # Reusable UI components
├── constants/           # Constant data like event details
├── pages/               # Main page components (e.g., Giving, Contact, Events)
│   ├── Giving.css
│   ├── Giving.js
│   ├── Contact.css
│   ├── Contact.js
│   ├── Events.css
│   ├── Events.js
│   └── ...
├── App.js               # Main application component and routing setup
├── index.js             # Entry point of the application
└── ...
```


## Technologies Used
React: A JavaScript library for building user interfaces.

React Router: For handling client-side routing.

CSS: For all styling and layout.

JavaScript (ES6+): The primary language used for logic.

## Future Improvements
Dynamic Content: Integrate a backend or a Headless CMS (e.g., Firebase, Sanity) to manage events and other content dynamically.

Image Optimization: Implement lazy loading and image compression to improve page load times.

Sermons/Media Library: Add a section for sharing sermon videos, audio, or articles.

Authentication: Implement a simple user authentication system for administrative purposes.
