const express = require('express')
const expressEdge  = require('express-edge')
const mongoose = require('mongoose')
const parser = require('body-parser')
const fileUpload = require('express-fileupload')
const app = express()

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storeController = require('./controllers/store')
const getPostController = require('./controllers/getPost')
const storePost = require('./middleware/store')
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const logInController = require('./controllers/logIn')
const logInUserController = require('./controllers/loginUser')
mongoose.connect('mongodb://localhost:27017/node_blog',{ useNewUrlParser: true })


app.use(express.static('public'))
app.use(expressEdge)
app.use(fileUpload())


app.set('views' ,`${__dirname}/views`)

app.use(parser.json())
app.use(parser.urlencoded({extended:true}))
app.get('/auth/login',logInController)
app.post('/users/register',storeUserController)
app.get('/auth/register',createUserController)
app.use('/post/store',storePost)
app.use('/posts/new',createPostController)
app.get('/',homePageController)
app.post('/post/store',storeController)
app.get('/post/:id', getPostController)
app.post('/users/logIn',logInUserController)





app.listen(4000,()=>{
	console.log('App listen on 4000')
})