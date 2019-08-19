const User = require('../database/models/User')
const bcrypt = require('bcrypt')
module.exports =(req,res)=>{
	const {email,password} = req.body
	User.findOne({email},(err,user)=>{
		if(user){
			bcrypt.compare(password,user.password,(err,result)=>{
				if(result){
					res.redirect('/')
				}
				else{
					res.redirect('/auth/logIn')
				}
			})
		}else{
			return res.redirect('/auth/logIn')
		}
	})

}