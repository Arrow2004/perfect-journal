const { uploadPDF, uploadImage } = require("../config/cloudinary");
const { Journal } = require("../models/journalModel");
const { slug } = require("../utils/slug");
module.exports.GetAddJournalPage =  async (req,res)=>{
    try {
        res.render("adding/addJournal",{
            title: "Jurnal qo'shish",
            url: process.env.URL,
            isLogged: req.session.isLogged
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports.AddJournal = async(req,res)=>{
    try {
        let {journalname,description,journal_view} = req.body;
        journal_source = await uploadPDF(req.files["journal_source"][0]);
        //previewPicture = await uploadImage(req.files["previewPicture"][0])
        previewPicture = "http://res.cloudinary.com/detwtkrcw/image/upload/v1703261339/perfect-journal-pictures/rnbxihoutqmnpf3plyr0.png"
        let newJournal = await Journal.create({
            name: journalname,
            previewPicture,
            journal_source,
            description,
            journal_view,
            query: slug(journalname)
        })
        res.redirect(process.env.URL+"journals/journal/"+newJournal.query)
    } catch (error) {
        console.log("xatolik"+error);
        res.render("error/error",{
            title: "Xatolik yuz berdi",
            data: error
        })
    }
}
module.exports.DeleteJournal = async(req,res)=>{
    try {
        let journal = await Journal.findOneAndDelete({query: req.params["query"]}).lean();
        res.render("adding/deleted",{
            title: "Jurnal o'chirildi",
            url: process.env.URL,
            isLogged: req.session.isLogged
        })
    } catch (error) {
        console.log("xatolik"+error);
        res.render("error/error",{
            title: "Xatolik yuz berdi",
            data: error
        })
    }
}