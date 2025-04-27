const express = require("express");
const { createPathway, getInstructorPathways, updatePathway, deletePathway } = require("../../controllers/instructor-controller/pathway-controller");
const router = express.Router();

router.post("/create", createPathway);
router.get("/get/:instructorId", getInstructorPathways);
router.put("/update/:id", updatePathway);
router.delete("/delete/:id", deletePathway);

module.exports = router;