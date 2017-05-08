const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const pg = require('pg');

const PORT = process.env.PORT || 3000;

const db = new pg.Pool({
  host: 'ec2-23-21-224-199.compute-1.amazonaws.com',
  user: 'pnjbvhhzbtyqau',
  password: '279117c43900cebd4a023349a90b72dc219a2beeb257aa72bc990fbfc3c720bb',
  port: '5432',
  database: 'd5m1l1dsgrghdi',
  ssl: true
});

db.connect((err) => {
  if (err) { console.error(err); }
  else console.log('successfully connected to mock db')
});

db.query(`create table if not exists "users" (
  _id serial primary key,
  username varchar(256) unique not null,
  password varchar(256) not null,
  first_name varchar(256) not null,
  last_name varchar(256) not null
)`, (err) => {
    if (err) { console.error(err) }
  });

app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/users', (req, res) => {
  db.query('select * from users', (err, users) => {
    if (err) { return res.status(400).json(err) }
    return res.status(202).json(users);
  })
})

app.post('/create', (req, res) => {
  console.log(req.body);
  const { username, password, first_name, last_name } = req.body;
  db.query('insert into users (username, password, first_name, last_name) values ($1, $2, $3, $4)', [username, password, first_name, last_name], (err) => {
    if (err) {
      return res.status(400).json(err);
    }

    return res.status(201).send(`Successfully inserted ${username}`);
  })
})

app.post('/authenticate', (req, res) => {
  const { username, password } = req.body;
  db.query('select password from users where username= $1 limit 1', [username], (err, user) => {
    if (err) {
      console.error(err);
      return res.status(400).json(err);
    }

    if (!user.rows[0]) return res.status(401).send(`no users found`);
    const db_password = user.rows[0].password;
    if (db_password !== password) return res.status(402).send(`incorrect password`);

    return res.status(201).send(`successfully logged in as ${username}`);
  });
});

app.listen(PORT, () => { console.log(`listening on port ${PORT}!`); })