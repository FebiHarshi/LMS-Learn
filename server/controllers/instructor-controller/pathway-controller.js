const Pathway = require('../../models/Pathway');

const createPathway = async (req, res) => {
  try {
    const pathwayData = req.body;
    const newPathway = new Pathway(pathwayData);
    const savedPathway = await newPathway.save();

    res.status(201).json({
      success: true,
      message: "Pathway created successfully",
      data: savedPathway,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create pathway",
    });
  }
};

const getInstructorPathways = async (req, res) => {
  try {
    const { instructorId } = req.params;
    const pathways = await Pathway.find({ instructorId });

    res.status(200).json({
      success: true,
      data: pathways,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch pathways",
    });
  }
};

const updatePathway = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedPathway = await Pathway.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedPathway) {
      return res.status(404).json({
        success: false,
        message: "Pathway not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Pathway updated successfully",
      data: updatedPathway,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update pathway",
    });
  }
};

const deletePathway = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPathway = await Pathway.findByIdAndDelete(id);

    if (!deletedPathway) {
      return res.status(404).json({
        success: false,
        message: "Pathway not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Pathway deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete pathway",
    });
  }
};

module.exports = {
  createPathway,
  getInstructorPathways,
  updatePathway,
  deletePathway,
};