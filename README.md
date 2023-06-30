# Personal Portfolio

Site is undergoing a thorough rearchitecture. Numerous improvements are under way, including a fully decoupled frontend and backend: The current site was migrated from a Full-Stack Ruby on Rails application. The public-facing side has been completely upgraded, but due to limitations with Devise, the internal admin portal and login pages are still using Ruby on Rails views. This makes the frontend and backend tightly coupled, and is a very poor practice, especially as the app begins to scale.

The upcoming refactor is a redesign from the ground up, and will include numerous improvements: The frontend will use React's latest features, including the NextJS framework. CSS Modules allow components to be fully self-contained. Additional components will be created for the auth pages that are currently being handled by Devise.

Numerous dependencies have been removed from the backend, and authentication will be handled directly in Ruby on Rails using a short-lived JWT. The backend follows RESTful principles and allows for a possible mobile application further down the road.

See [refactor/2023-architecture](https://github.com/ccentrella/portfolio/tree/refactor/2023-rearchitecture) branch for the latest updates.

## Achievements:
* Built completely responsive, mobile-friendly portfolio website
* Created blog using modern interface and interactive admin panel
* Converted entire public-facing website to SPA app using React

## What's Next
* Refactoring admin code to fully separate frontend and backend
* Upgrading frontend codebase to NextJS


## Activities: 
* Prototype in Adobe XD and implement mobile-first using React, Ruby on Rails, HTML/CSS
* Continuously refactor and improve using incremental lifecycle model
* Follow RESTful principles
* Create website icons using Adobe Illustrator

Technologies Used: React, Ruby on Rails, PostgreSQL, HTML/CSS/SCSS, Adobe Illustrator, Adobe XD, Git
