# AllTheDocs
AllTheDocs was created as a capstone project to showcase our team's ability to create full-stack applications. The project idea was spawned from the observation that new developers often need multiple sources of assistance while coding to find helpful terms and knowledge. The hopes is that AllTheDocs will assist new developers with their learning journey and give them the support they need to quickly produce quality applications. Hope you enjoy!

## Live Link To The App
[AllTheDocs](https://allthedocs.audreycious.now.sh/)

## Screenshots
<img src="/images/allthedocs_homepage-view.png" width="550" height="400" >
<img src="/images/allthedocs_search-view.png" width="550" height="400" >

## Summary
This app uses a documentation server, **AllTheDocs Server**, to reply to a search term with information from MDN and React documentation *(e.g. fetch(), .concat, String)*. The app also uses the StackExchange API to give the user the top 5 results from StackOverflow; as well as, the top 5 videos from Youtube using the Youtube API. The documentation server has queries added daily and will expand into other documentations in the future. The user creates and account which logs their search history and allows them to quickly search the same term again. In the future, the user account will also store favorites so that the user can keep their top searches always available.

## Built With
* HTML
* CSS
* Javascript
* jQuery
* Node.js
* Express.js
* Postgres
* DBeaver
* Mocha
* Chai

## How to use this API
### Base URL: https://allthedocs.herokuapp.com/api

#### Users:
##### URL: /users  
You MUST be logged in or send your credentials as a Bearer Token in the headers to use this endpoint. (e.g. {"Authorization": "Bearer [Username]:[Password]})  

##### Methods:    POST, to gather user search history

##### Response body example (200): 
        {
            userSearchHistory: [{}, {}, ...]
                                                }

##### Sample call:    
        fetch(url/users, {
            ContentType: "application/json",
            method : "POST",
            headers: {
                Authorization: "Bearer YourBearerToken"
            }
        }

#### URL: /users/history  
You MUST be logged in or send your credentials as a Bearer Token in the headers to use this endpoint. (e.g. {"Authorization": "Bearer [Username]:[Password]})

##### Methods:    POST, to post new user search history

##### Params: 
searchname=[alphanumeric], **required**

##### Response body example (201): 
        {}

##### Sample call:    
        fetch(url/users/history, {
            ContentType: "application/json",
            method : "POST",
            headers: {
                Authorization: "Bearer YourBearerToken"
            }
            body: JSON.stringify({
                searchname: "Fetch"
            })
        }   

#### Signup:  
##### URL: /signup

##### Methods:    POST, to register a new user
                
##### Response body example (201): 
        {
            username: "MyUsername",
            password: "MyPassword"
                                    }

##### Response body example (400): 
        {
            error: "Username already exists"
                                                }

##### Sample call:    
        fetch(url/signup, {
            ContentType: "application/json",
            method : "POST",
            body: JSON.stringify({
                username: "MyUsername",
                password: "MyPassword"
            })
        }

#### Documents:
##### URL: /documents
You MUST be logged in or send your credentials as a Bearer Token in the headers to use this endpoint. (e.g. {"Authorization": "Bearer [Username]:[Password]})

##### Methods:    GET, to get all the documents 

##### Response body example (200): 
        {
            documents: [{}, {}, ...],
                                        }

##### Sample call:    
        fetch(url/documents, {
            ContentType: "application/json",
            headers: {
                Authorization: "Bearer YourBearerToken"
            }
            method : "GET"
        }

#### POST, to search the database for documents matching the searchTerm

##### Params: 
searchTerm=[alphanumeric], **required**  
user=[object with username=[string] and password=[string]], **required**

##### Response body example (201): 
        {
            id: "someLongUUID",
            user_id: "someLongUUID",
            searchname: "MySearch"
                                        }

##### Sample call:    
        fetch(url/documents, {
            ContentType: "application/json",
            method : "POST",
            body: JSON.stringify({
                username: "MyUsername",
                password: "MyPassword"
            })
        }   

#### Login:
##### URL: /login

##### Methods:    POST, to login

##### Params: 
username=[string], **required**  
password=[string], **required**

##### Response body example (200): 
        {
            id: "someLongUUID",
            username: "MyUsername",
            password: "MyPassword"
                                    }

##### Response body example (400): 
        {
            error: "Username not found, please signup"
                                                        }

##### Sample call:    
        fetch(url/login, {
            ContentType: "application/json",
            method : "POST",
            body: JSON.stringify({
                username: "MyUsername",
                password: "MyPassword"
            })
        }   

## Frontend
This app uses **AllTheDocs** at [AllTheDocs Frontend](https://github.com/Audreycious/AllTheDocs/)

## Authors
Audrey Foss - **_Project Manager_**  
[Portfolio](https://audreycious.github.io/Portfolio/)

Emanuel Rouse - **_Product Manager_**  
[Portfolio](https://emanualrouse.github.io/Portfolio/)

Ian Neville - **_Design Lead_**

## Acknowledgments
All - Thank you to Jose Sanchez for being our mentor and leader
Audrey - Thank you to my wife for your constant support
