const express = require('express')
const app = express()

//View engine
app.set('view engine', 'ejs')

//Static
app.use(express.static('public'))

//App
app.get('/home', async (req, res) => {
    res.render('index')
});


app.listen(8080, () => {
    console.log("Servidor rodando");
})