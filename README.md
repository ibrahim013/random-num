
[![Build Status](https://travis-ci.org/ibrahim013/random-num.svg?branch=dev)](https://travis-ci.org/ibrahim013/random-num)  [![Coverage Status](https://coveralls.io/repos/github/ibrahim013/random-num/badge.svg?branch=dev)](https://coveralls.io/github/ibrahim013/random-num?branch=dev)

### Random Number Generator
<hr/>

#### Description
<hr/>
<p>An app to generate random phone numbers in a telecommunication company</p>

####  Feature
<hr/>
<p>Random number generator is shipped with:</p>
- Get Admin token
- Total number need to be generated
- Admin genrate phone number

#### API ENDPOINT
<hr/>
Admin token
```
[GET] /api/v1/token
query
  ?admin=admin
```
Generate Phone Number
```
[POST] /api/v1/generate
[HEADERS] x-access-token: token
```
Counts
```
[GET] /api/v1/numbers
[HEADERS] x-access-token: token
````