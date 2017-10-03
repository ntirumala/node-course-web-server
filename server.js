const express = require('express')
const hbs = require('hbs')

var app = express()
hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('getFullyear', ()=> {
  return new Date().getFullYear()
})
app.set('view engine', 'hbs')


app.use((req, res, next) =>{
  var now = new Date().toString()
  console.log(`${now}: ${req.method} ${req.url}`)
  next()
})

// app.use((req, res, next) =>{
//   var now = new Date().toString()
//   console.log(`${now}: ${req.method} ${req.url}`)
//   res.render('maintenance.hbs')
// })

app.use(express.static(__dirname+'/public'))

app.get('/suktha', (request, response) =>{
  response.render('suktha.hbs')
})

app.get('/maintenance', (request, response) =>{
  response.render('maintenance.hbs')
})

app.get('/about', (request, response) =>{
  response.render('about.hbs',{
    pageTitle: 'About Me',
    pageData: 'SomeText'
  })
})

app.get('/bad', (request, response) =>{
  response.send({
    errorMessage: 'Unable to handle request'
  })
})

app.listen(3000)
