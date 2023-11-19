const { Router } = require("express");
const router = Router();
const upload = require("../config/upload");
const {GetAddJournalPage, AddJournal} = require("../controllers/addingControllers")

router.get("/addJournal",GetAddJournalPage);
router.post("/addJournal",upload.fields([{name: "journal_source", maxCount: 1},{name: "previewPicture",maxCount: 1}]),AddJournal);
module.exports = router;