module.exports = (req,res,next)=>{
	if ( !req.body.username || !req.body.title || !req.body.subtitle || !req.body.content ){

		return res.redirect('/posts/new')
	}
	if(!req.files){
		return res.redirect('/posts/new')
	}
	next()
}
