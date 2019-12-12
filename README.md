LINK TO MY APP

http://react-tutorial-rank.herokuapp.com/videos

USER STORIES

Our users would be aspiring or current developers who want a way to cut through YouTube and find the best tutorials for each language

WIREFRAME LINK

Will turn in written copy to Will if needed. I used YouTube and Facebook as an inspiration. Video posting and commenting inspired by YouTube and Facebook with general posting with profiles/avatars associated with each video. Also, each user has a profile which outlines what languages they want to learn. 

DESCRIPTION

This is a great application for aspiring developers to visit and post their favorite tutorials for learning programming and also rate and review existing posted tutorials. If an aspiring developer needed to learn a language quickly, they could find the video that other developers have had success with in learning that language efficiently. 

TECHNOLOGIES USED

The MERN STACK including using REDUX for the frontend and SASS, Bootstrap and FontAwesome. Entity Relationship Diagrams gives further detail in what was used for routing, auth etc. 

INSTALLATION STEPS

Another developer would need to 

Fork the github repos and then:

1)install the following dependencies for react-tutorial-rank:
axios, moment, react-router-dom, react-redux, redux-thunk, uuid, react-devtools-extension, react-moment, react-router, react-dom
2)install the following dependencies for node-tutorial-rank:
bcryptjs, config, cors, express, express-validator, gravatra, jsonwebtoken, mongoose, request

or they could do an npm install requirements script for both repos

ENTITY RELATIONSHIP DIAGRAMS

Using the MERN stack with Express and React communicating with MongoDB Atlas. Deployed to Heroku using Config to link the MongoDB through a JSON file that contains the MongoURI. Used JSONWebToken for Authentication. Also using Axios to do client-side HTTP routing. And react-router for basic site routing. 


FUTURE FEATURES / UNSOLVED PROBLEMS

Want to add a search function which will allow you to look up videos by language.
Need to add a moderation feature which will allow me (the moderator) to approve any user profiles, posts etc.
Would like to add functionality where users could contact other users who make their profiles public, to ask questions about certain videos or languages etc. 

// COMPLETED!! - Want to add Reddit-type functionality where the top-liked videos appear at the top of the page