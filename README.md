###Link Share database

##Objectives

#Learning Objectives:

* Tie together Migrations, Models, Routes, and Controllers into a functioning API
* Implement a login system
* Test your routes using Postman

#Performance Objectives

* Writing migrations and models for the various data in your application
* Defining appropriate HTTP routes for the functionality in your application
* Writing controller methods that handle data from the request and return JSON responses
* Querying the database using Sequelize and models
* Hashing passwords and generating access tokens

###API Documentation

----
##USERS
----
POST /users

Create a `user` to create links and write comments.
Required entries:

* name: string
* email: string
* password: string

----
POST /login

Requires correct password and email!

How to verify your account.
Required entries:

* username: string
* email: string
* user_password: string


----
##LINKS
----
POST /:user_id/links

Posting links to websites.
Required entries:

* title: string
* url: string

----
GET /links

Returns all of the links, sorted by the most recent.

----
##COMMENTS
----
POST /:user_id/:link_id/comment

Posts a comment to a particular link.

Required information:

* user_id: id given to the user who submitted the link
* link_id: id given to the link that was created
* text: insert you comments here

----
GET /:user_id/:link_id/comments

Receives all of the comments for a particular link.

Required information:

* user_id: id given to the user who submitted the link
* link_id: id given to the link that was created
