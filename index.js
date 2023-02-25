//CÓDIGO PRUEBA
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || '5500';
const multer = require('multer');


app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});


const users = [
  { id: 1, latitud: 90.12, longitud:-3.14 },
  { id: 2, latitud: 78.12, longitud:-31.14 },
  { id: 3, latitud: 91.56, longitud:-3.45}
];


app.get('/', (req, res) => {
  
    res.json(users);
})

app.post('/', multer().none(), function (req, res){
    //let data = req.body;
    res.send('Data Received: ' + JSON.stringify(req.body));
    users.push(JSON.stringify(req.body));
  });

app.listen(port, () => {
    console.log('[Express App] The app is listening on port: ${port}');
})