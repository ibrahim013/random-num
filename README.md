
[![Build Status](https://travis-ci.org/ibrahim013/random-num.svg?branch=dev)](https://travis-ci.org/ibrahim013/random-num)  [![Coverage Status](https://coveralls.io/repos/github/ibrahim013/random-num/badge.svg?branch=dev)](https://coveralls.io/github/ibrahim013/random-num?branch=dev)

### Random Number Generator
<hr/>

#### Description
<hr/>
<p>An app to generate random phone numbers in a telecommunication company</p>

####  Feature
<hr/>
<p>Random number generator is shipped with:</p>

* Get Admin token
* Total number need to be generated
* Admin generate phone number

#### API ENDPOINT
<hr/>
Get Admin token

```
[GET] /api/v1/token
query
  ?admin=admin
```

Generate Phone Number

```
[POST] /api/v1/generate
[HEADERS] x-access-token: token
[BODY] numGen
```

Counts

```
[GET] /api/v1/numbers
[HEADERS] x-access-token: token
````
#### Folder Structure
<hr/>
The server directory houses the implementation using

[node.js](https://nodejs.org/en/)

[express](https://expressjs.com/)

#### Get Started
<hr/>

* Clone this repository from a terminal git clone https://github.com/ibrahim013/random-num.git

* cd into the project directory

* install project dependencies `yarn`

* Create .env file and set up the environment variables in `.env-sample`

* and run yarn start to run the application

* Go to http://localhost:8000/

Test
This app uses Mocha, Chai-Http for test
Run `yarn i mocha -g` to install Mocha globally and `yarn i nyc -g` to install nyc globally before running yarn test to run tests
git clone https://github.com/ibrahim013/random-num.git

`yarn test`
