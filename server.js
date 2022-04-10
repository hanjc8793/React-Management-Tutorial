const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
   res.send({message: 'Hello Express!'});
});


app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id' : 1,
          'image' : 'https://placeimg.com/64/64/1',
          'name' : '한재철',
          'birthday' : '780625',
          'gender' : '남자',
          'job' : '대학생'
        },
        {
          'id' : 2,
          'image' : 'https://placeimg.com/64/64/2',
          'name' : '한준탁',
          'birthday' : '1111111',
          'gender' : '남자',
          'job' : '초등5'
        },
        {
          'id' : 3,
          'image' : 'https://placeimg.com/64/64/3',
          'name' : '한준서',
          'birthday' : '222222',
          'gender' : '여자',
          'job' : '초등2'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));