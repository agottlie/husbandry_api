# Husbandry Website

## Synopsis

This is a full stack website created for my band Husbandry using an Angular front end framework and an Express backend API.  The majority of the front end is created using standard HTML, CSS and some light Javascript.  For tour dates, there are many date instances, so I decided to create an API to store and call them.  All date objects are saved in a database, and the Angular HTTP function pulls the relevant dates for the various parts of the site.  Each page is its own Angular component, with common elements like the header existing as a constant component on all pages.  The design was created by the bassist in my band Arnau Bosc, and initial styling was completed by Patrick Hiller for an earlier version of the site.


## Requirements

Run `npm install` to install the necessary packages.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Public Location

The site can be accessed [here](http://husbandry.nyc).
The API can be found at https://husbandry-dates.herokuapp.com/


## Approach

While this is generally a pretty simple app to begin with, I wanted to make it much easier to manage and update tour dates, which are the most dynamic part of the site.  Instead of manually coding each date in with repetitive code and adjusting current/past dates after each show, I wanted there to be a way to automate this as much as possible.  I set up the API to serve both as a gateway to data and as a crude CSM.  In this way, anyone in the band could add a tour date without having to access the code.  At the same time, tour dates would be loaded from the API each time the page is loaded, allowing it to pull in real time.  The sidebar now automatically pulls the 6 most imminent upcoming shows, and the dates on the Live page move dynamically from 'Upcoming' to 'Past' once the show date passes.

The rest of the site update was about putting everything in an Angular framework.  This much better organized the code, and allowed for much simple iterating over tour dates.  In addition, expanding the site in the future is now much easier and more scalable.


## Repos

API: https://github.com/agottlie/husbandry_api
Angular: https://github.com/agottlie/husbandry_v2