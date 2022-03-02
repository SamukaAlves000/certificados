const express = require('express');

const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.static(__dirname + '/dist/certificados'));
console.log(__dirname + 'dist/certificados');
app.get('/*',(req,res)=>{
  res.sendFile(__dirname+'/dist/certificados/index.html');
  console.log(__dirname+'/dist/certificados/index.html')
});

app.listen(PORT,()=>{
      console.log("Servidor iniciado na porta:" + PORT);
});



