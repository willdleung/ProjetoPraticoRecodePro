const express = require ("express"); 
const cors = require ("cors");

const app = express();


app.use(express.json())
app.use(cors())

app.listen (3333, () => {
    console.log ("Servidor ativo!")
});

module.exports = app