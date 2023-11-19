const { Router } = require("express");
const router = Router();
const {GetJournalsPage,GetJournalPage} = require("../controllers/journalsController")

router.get("/all",GetJournalsPage);
router.get("/view/:query",GetJournalPage);
module.exports = router;