Open City Project Website
=========================

This probably deserves to go inside the [ocp-docker](https://github.com/OpenCityProject/ocp-docker), probably as a submodule

This is the website for the Open City Project, in Christchurch

Requirements
------------

### From Terms of Reference
The website will provide access to the database, give information about the project, contacts, sponsors etc. and allow people to add data.
Anything we build must be able to be edited/built on/tweaked by others. Ideally things will be done to industry standards to allow for scalability. The website will be built using Open Source frameworks and hopefully feed back into them too.

The users of the website include:
* Anonymous users: view data, create account, print tickets at parking meter.
* Registered users: in addition to the anonymous user can also report a bug, and add/review/suggest an edit a POI (Point of Interest).
* Trusted users: in addition to the registered user can also add a poi without moderation e.g. CCC events, museum, UC free talks.
* Admin: in addition to registered user can also delete data, block a user and create a trusted user

### From meeting
* Elliot - node / front-end / all things javascript
* Eddie

### Ben's opinion
* Build a React JS front end only website (nodejs just does serving, include webpack for live reload etc)
* Basically, there's no database, no backend calls. All backend calls go to the api, and the api handles requests (typical Single Page Application)
* This also means potentially in the future, with time and with size growth, we can implement server side rendering
* Good things to also add might be travis and lighthouse


#### Deployment thoughts
Apart from using docker, docker compose and docker swarm, it might also be advantageous to look at metrics measurements, measuring who's on the site, how long etc, such as through google analytics + more

There's also exception handling, fail over, logging to add in to keep tabs on how healthy the site is


