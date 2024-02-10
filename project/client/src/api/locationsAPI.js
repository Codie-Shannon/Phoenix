// Import Axios
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
import axios from "axios";




// Initialize Variables
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
const url = "/api/locations";




// Export Class
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
export default class locationsAPI {
    // Get All Locations
    // Run getAll Function to Get All the Locations from the Server ======================================================
    // ============================================================================================================================
    static async getAll() {
        // Get All the Lodations from the Server
        const res = await axios.get(url);

        // Return All the Locations from the Server
        return res.data;
    }



    // Get All Location Names
    // Run getAllStoreNames Function to Get All the Location Names from the Server =============================================
    // ============================================================================================================================
    static async getAllStoreNames() {
        // Get All the Lodation Names from the Server
        const res = await axios.get(`${url}/names/any`);

        // Return All the Location Names from the Server
        return res.data;
    }



    // Get Locations By Name
    // Run getLocationByID Function to Get Database Document from Server Based on its Name ==========================================
    // ============================================================================================================================
    static async getLocationByName(name) {
        // Get Location from Server Based on its Name
        const res = await axios.get(`${url}/${name}`);

        // Return Location from the Server
        return res.data;
    }


    
    // Get Head Office
    // Run getHeadOffice Function to Get the Head Office's Database Document from the Server ======================================
    // ============================================================================================================================
    static async getHeadOffice() {
        // Get Head Office Location from Server
        const res = await axios.get(`${url}/office/head`);

        // Return Head Office Location from Server
        return res.data;
    }
}