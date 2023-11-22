const protected = (req,res,next)=>{
    try {
        if(!req.session.isLogged){
            return res.redirect('/auth/login')
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

const guest = (req,res,next)=>{
    if(req.session.isLogged){
        return res.redirect('/')
    }
    next()
}
module.exports = {
    protected,
    guest
}