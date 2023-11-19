const { Journal } = require("../models/journalModel")

module.exports.GetJournalsPage = async (req,res)=>{
    try {
        let journals = await Journal.find({}).lean();
        console.log(journals)
        res.render("journals/journal",{
            title: "Jurnallar ro'yxati",
            url: process.env.URL,
            journals
        })
    } catch (error) {
        console.log(error)
    }
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