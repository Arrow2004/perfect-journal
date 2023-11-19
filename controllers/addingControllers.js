const { uploadPDF, uploadImage } = require("../config/cloudinary");
const { Journal } = require("../models/journalModel");
const { slug } = require("../utils/slug");
module.exports.GetAddJournalPage =  async (req,res)=>{
    try {
        res.render("adding/addJournal",{
            title: "Jurnal qo'shish",
            url: process.env.URL
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports.AddJournal = async(req,res)=>{
    try {
        let {journalname,description} = req.body;
        console.log(req.body)
        journal_source = await uploadPDF(req.files["journal_source"][0]);
        previewPicture = await uploadImage(req.files["previewPicture"][0])
        let newJournal = await Journal.create({
            name: journalname,
            previewPicture,
            journal_source,
            description,
            query: slug(journalname)
        })
        res.redirect(process.env.URL+"journals/view/"+newJournal.query)
    } catch (error) {
        console.log("xatolik"+error);
        res.render("error/error",{
            title: "Xatolik yuz berdi",
            data: error
        })
    }
}