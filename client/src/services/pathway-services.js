import { axiosInstance } from "../api/axiosInstance";

export async function createPathwayService(pathwayData) {
  try {
    const response = await axiosInstance.post("/api/pathway/create", pathwayData);
    return response.data;
  } catch (error) {
    console.error("Error creating pathway:", error);
    return {
      success: false,
      message: "Failed to create pathway",
    };
  }
}

export async function getInstructorPathwaysService(instructorId) {
  try {
    const response = await axiosInstance.get(`/api/pathway/get/${instructorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pathways:", error);
    return {
      success: false,
      message: "Failed to fetch pathways",
    };
  }
}

export async function updatePathwayService(pathwayId, updates) {
  try {
    const response = await axiosInstance.put(
      `/api/pathway/update/${pathwayId}`,
      updates
    );
    return response.data;
  } catch (error) {
    console.error("Error updating pathway:", error);
    return {
      success: false,
      message: "Failed to update pathway",
    };
  }
}

export async function deletePathwayService(pathwayId) {
  try {
    const response = await axiosInstance.delete(
      `/api/pathway/delete/${pathwayId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting pathway:", error);
    return {
      success: false,
      message: "Failed to delete pathway",
    };
  }
}