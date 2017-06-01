# mock-api

## API Endpoints

### To pull list of products:
https://infinite-crag-99070.herokuapp.com/products

### To create user:
```GET```
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
https://infinite-crag-99070.herokuapp.com/authenticate
```javascript
  const body = {
    username,
    password,
    first_name,
    last_name
  }
```

### To pull all records
https://infinite-crag-99070.herokuapp.com/users