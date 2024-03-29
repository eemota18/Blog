const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
	username:{
		type:String,
		required:true,
		unique:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	}

})
UserSchema.pre('save',function(next){
	const user = this
	bcrypt.hash(user.password,10,function(err,encrypt){
		user.password = encrypt
		next()
	})
})
const User = mongoose.model('User',UserSchema)

module.exports = User