# Angular Phonecat Components
[![devDependency Status](https://david-dm.org/emartech/angular-phonecat-components/dev-status.svg)](https://david-dm.org/emartech/angular-phonecat-components?type=dev)

Component based AngularJS application example (Phonecat) in modern Javascript with Webpack.

### Introduction

The idea came from the [original Angular Phonecat application](https://github.com/angular/angular-phonecat)
to recreate it using modern tooling (using Angular 1.5 with components and new language features in ES6/ES7).
It was first introduced [in our workshop](https://jsconfbp.com/workshops/angular2.html) 
([source code](https://github.com/emartech/journey-towards-angular-2))
where we migrated the application to it's final stage what you can see in this repository.

This final stage is intended to show how close an Angular 1 application can be to Angular 2 in concepts and data flow.

For those not knowing the original repository, it is a phone listing application
where you can filter the list on the main page and view detailed description on phones at the details page.

### Technical details

It uses the latest Angular available (1.5) and many features from ES6 (imports, classes, let etc.).
To make it work in browsers, the code is transpiled with [Babel](https://babeljs.io/) 
([latest preset](https://babeljs.io/docs/plugins/preset-latest/)) and bundled into single files 
with [Webpack](https://webpack.github.io/).

It consists of 3 different entry points.

- ```client/app/main.js``` is the main entry point and holds the application logic
- ```client/app/vendor.js``` is where the third party libraries reside like angular itself
- ```client/app/styles.js``` consists of required stylesheets for the pretty display

For Http calls and data access only services are used.
Components (introduced in Angular 1.5) access data through these services
and pass down to child components if necessary.

Only one way data binding is used in combination with lifecycle events, data flows only up or downwards.
Components don't use the scope or the root scope for any communication.

Components containing application specific business logic considered as smart components.
Those without application specific logic, such as the select component, considered dumb components.
More on this topic can be found in this article.

### Getting started

```bash
git clone https://github.com/emartech/angular-phonecat-components.git
cd angular-phonecat-components
npm i
npm start
```

Now the application is running, open your browser and visit the link ```http://localhost:3000```.
