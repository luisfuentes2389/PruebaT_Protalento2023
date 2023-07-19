//paso 2 traemos a exprexx y creamos una aplicacion 
const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send('hola desde express')
})

const port = 3000
app.listen(port,()=>{ 
    console.log("servidor en ejecucion en :" + 'http://localhost:${port}')
});

