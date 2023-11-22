module.exports.GetAuthPage= async(req,res)=>{
    try {
        res.render("auth/signin",{
            title: "Hisobga kirish",
            url: process.env.URL,
            loginError: req.flash("loginError")
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports.Auth = async (req,res)=>{
    try {
            if(process.env.ADMIN_PASS===req.body.password){
                req.session.isLogged = true;
                res.redirect('/add/addJournal')
            }else{
                req.flash('loginError',`Login yoki parol xato!!!`)
                res.redirect('/auth/login')
            }        
    } catch (e) {
        console.log(e)
    }
}