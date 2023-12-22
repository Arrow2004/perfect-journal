const { Router } = require("express");
const router = Router();
const {GetJournalsPage,GetJournalPage,GetJournalViewPage} = require("../controllers/journalsController")

router.get("/all",GetJournalsPage);
router.get("/journal/:query",GetJournalPage);
router.get("/view/:query",GetJournalViewPage);
module.exports = router;