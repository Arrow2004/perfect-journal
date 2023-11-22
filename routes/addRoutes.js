const { Router } = require("express");
const router = Router();
const upload = require("../config/upload");
const {GetAddJournalPage, AddJournal} = require("../controllers/addingControllers")
const {protected} = require("../middlewares/auth")
router.get("/addJournal",protected,GetAddJournalPage);
router.post("/addJournal",protected,upload.fields([{name: "journal_source", maxCount: 1},{name: "previewPicture",maxCount: 1}]),AddJournal);
module.exports = router;