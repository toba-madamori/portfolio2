require('dotenv')
const express = require('express')
const app = express()

// view engine
app.set('view engine', 'ejs')

// static files
app.use(express.static('public'))

// routes
app.get('/',(req,res)=>{
    res.render('index')
})

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}....`);
})


