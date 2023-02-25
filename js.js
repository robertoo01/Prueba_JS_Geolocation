//Código de prueba
const express = require('express');
const app = express();

app.get('https://robertoo01.github.io/Prueba', (req, res) => {
  res.send("Prueba");
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('API');
});
