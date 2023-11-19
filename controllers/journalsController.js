const { Journal } = require("../models/journalModel")

module.exports.GetJournalsPage = async (req,res)=>{
    res.render("journals/journal",{
        title: "Jurnallar ro'yxati",
        url: process.env.URL
    })
}
module.exports.GetJournalPage = async (req,res)=>{
    try {
        let journal = await Journal.findOne({query: req.params["query"]}).lean();
        if(journal){
            res.render("journals/one",{
                title: journal.name,
                url: process.env.URL,
                journal
            })
        }
    } catch (error) {
        console.log(error)
    }
}