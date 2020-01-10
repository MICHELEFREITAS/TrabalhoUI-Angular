# Microservice Online Shop UI 

This project was implemented with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14 and its purpose is to serve client to see the list of products and allow to choose those that wants to buy, go to cart and then pay it.

So it has 3 microservices to make it work and this UI intends to show all this steps and related data for the user. 

## Run Application

Just run `ng serve` and navigate to `http://localhost:4200/`. 

## Backend dependency

This application is set to listen to url `http://localhost:8071/products` to show the list of products and it just get all that exist in database. 

## How to use it

After the list has been loaded, the user can add individually a product to the cart and when decides, can checkout to the cart's page.

