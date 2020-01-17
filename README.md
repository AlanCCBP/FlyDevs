# FlyDevs
Some exercises with Docker.

Here there are my resolutions of the exercises 2 & 3 sent by Francisco from FlyDevs.

Exercise 1 => 2 Docker instances, one with PHP 7 environment, and another with a MySQL instance, both using docker-compose.

Inside the PHP container, there will be a REST API running SlimPHP (version 4, in this case, because the version 3 is not available anymore), with just a single endpoint with a welcome message.

Alan's Comments:
This is working, but i had troubles with, i guess, the Apache2 VirtualHost configuration and the .htaccess file inside the API folder, because i wasn't able to navigate through the REST API routes, just works with the entry point, and only if i modify the route for that it coincide with the base URL. It sucks, but i never worked with Docker, so i learnt a lot with this kind of exercises.


Exercise 2 => 1 Docker instance using docker-compose, that let us make a connection between NodeJS and ElasticSearch server. This REST API should have two endpoints: one for adding a record, and another for getting all of the records.

Alan's Comments:
In this exercise, i had troubles because ElasticSearch server always responds "Request timeout after 30000ms." to every request that i do.
I am sure that the ElasticSearch server was running, because i was able to insert some records using CURL, but i can't from NodeJS.
I changed the localhost by the 172.24.0.1 IP just because was something that i had read though the internet and it "worked" (using localhost i got "Connection Refused" everytime).


Exercise 3 => 
Alan's Comments:
I wasn't able to finish it :(
