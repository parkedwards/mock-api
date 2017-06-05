# mock-api

## API Endpoints

### To pull list of products:
```GET```
https://infinite-crag-99070.herokuapp.com/products

### To pull all users
```GET```
https://infinite-crag-99070.herokuapp.com/users

### To create user:
```POST```
https://infinite-crag-99070.herokuapp.com/create
```javascript
  const body = {
    first_name,
    last_name,
    email,
    password,
  }
```

### To Authenticate:
```POST```
https://infinite-crag-99070.herokuapp.com/login
```javascript 
  const body = {
    email,
    password,
  }
```
