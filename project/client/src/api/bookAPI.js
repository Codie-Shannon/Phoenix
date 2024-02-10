// Import Axios
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
import axios from "axios";




// Initialize Variables
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
const url = "/api/book/vehicle";




// Export Class
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
export default class bookAPI {
    // Get All Makes
    // Run getAllMakes Function to Get All the Vehicle Makes from the Server ======================================================
    // ============================================================================================================================
    static async getAllMakes() {
        // Get All the Vehicle Makes from the Server
        const res = await axios.get(`${url}/makes/`);

        // Return All the Vehicle Makes from the Server
        return res.data;
    }



    // Get Models By Make
    // Run getModelsByMake Function to Get All the Vehicle Models By a Specific Make from the Server ==============================
    // ============================================================================================================================
    static async getModelsByMake(make) {
        // Get All Vehicle Models By a Specific Make from the Server
        const res = await axios.get(`${url}/models/${make}`);

        // Return Vehicle Makes from the Server
        return res.data;
    }



    // Get Vehicle Colours
    // Run getVehicleColours Function to Get Colours for a Specific Vehicle Based on a Specific Make and Model ====================
    // ============================================================================================================================
    static async getVehicleColours(make, model) {
        // Get Vehicle Colours for a Specific Vehicle Based on the Make and Model
        const res = await axios.get(`${url}/colours/${make}/${model}`);

        // Return Colours from the Server
        return res.data;
    }
}