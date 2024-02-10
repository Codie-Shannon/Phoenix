// Import Axios
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
import axios from "axios";




// Initialize Variables
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
const url = "/api/vehicle";




// Export Class
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
export default class vehicleAPI {
    // Get Vehicle By ID
    // Run getVehicleByID Function to Get Database Database from Server Based on its ID ===========================================
    // ============================================================================================================================
    static async getByID(id) {
        // Get Vehicle from Server Based on its ID
        const res = await axios.get(`${url}/${id}`);

        // Return Vehicle from the Server
        return res.data;
    }



    // Get Vehicle By Category
    // Run getVehicleByCategory Function to Get All Vehicle Database Documents from Server Based on a Specific Category ===========
    // ============================================================================================================================
    static async getByCategory(category) {
        // Get Vehicle from Server Based on a Specific Category
        const res = await axios.get(`${url}/category/${category}`);

        // Return Vehicle Database Documents from the Server
        return res.data;
    }



    // #region Did Not Implement Due to Time Constraint and Client Promise
    /* Add Vehicle
    // Run addVehicle Function to Insert a New Document into the Vehicles Database ================================================
    // ============================================================================================================================
    static async add(post) {
        // Send New Document to Server to be Added to the Vehicles Database
        // Once the New Document is Added to the Database, Get the New Document in Return
        const res = await axios.post(`${url}/create`, post);

        // Return the New Document
        return res.data;
    }



    // Update Vehicle
    // Run updateVehicle Function to Update a Document within the Vehicles Database Based on its ID ===============================
    // ============================================================================================================================
    static async update(id, post) {
        // Update Document within Vehicles Database Based on its ID
        const res = await axios.patch(`${url}/update/${id}`, post);

        // Return the Updated Document
        return res.data;
    }



    // Delete Vehicle
    // Run deleteVehicle Function to Delete a Database Document from the Vehicles Database Based on its ID ========================
    // ============================================================================================================================
    static async delete(id) {
        // Delete Vehicle from Database Based on its ID
        const res = await axios.delete(`${url}/delete/${id}`);

        // Return Deleted Database Document
        return res.data;
    }*/
    // #endregion Did Not Implement Due to Time Constraint and Client Promise
}