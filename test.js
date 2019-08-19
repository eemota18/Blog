const mongoose = require('mongoose')
const Post = require('./database/models/Post')


mongoose.connect('mongodb://localhost:27017/node_blog2',{ useNewUrlParser: true })


// Post.create({
// 	title:'title',
// 	description:'this is a test',
// 	content:'HAHAHAHAHA'
// },(error,post)=>{
// 	console.log(error,post)
// })

// Post.find({},(err,rec)=>{
// 	console.log(err,rec)
// })
// Post.create({
// 	title:'title2',
// 	description:'this is a test',
// 	content:'HAHAHAHAHA'
// },(error,post)=>{
// 	console.log(error,post)
// })

// Post.findById("5d534a0ed5c3eca5221ea88b",(err,arr)=>{
// 	console.log(err,arr)
// })

Post.findByIdAndUpdate("5d534a0ed5c3eca5221ea88b",{title:'NER'},(err,arr)=>{
	console.log(err,arr)
})