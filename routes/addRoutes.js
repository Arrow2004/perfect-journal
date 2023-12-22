const { Router } = require("express");
const router = Router();
const upload = require("../config/upload");
const {GetAddJournalPage, AddJournal, DeleteJournal} = require("../controllers/addingControllers")
const {protected} = require("../middlewares/auth")
router.get("/addJournal",protected,GetAddJournalPage);
router.post("/addJournal",protected,upload.fields([{name: "journal_source", maxCount: 1}]),AddJournal);
router.get("/deleteJournal/:query",protected,DeleteJournal);
module.exports = router;