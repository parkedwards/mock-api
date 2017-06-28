# mock-api

## User Model
```javascript
  {
    "user_id": '2389742',
    "first_name": "lebron",
    "last_name": "james",
    "email": "a@a.com",
    "password": "pw",
    "points_balance": 1000,
    "status": "gold",
    "next_level": "platinum",
    "birthday": '1989-03-28',
    "gift_claim_date": '2017-06-01'
  }
```

## API Endpoints

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
    birthday,
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

Response object after authenticating:
```javascript
  {
    email,
    user_id,
    first_name,
    last_name,
    points_balance,
    status,
    next_level,
    birthday,
    gift_claim_date
  }
```

