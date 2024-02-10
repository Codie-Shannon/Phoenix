// Import Locations Schema
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
const Location = require("../models/locationsMDL");




// Export Class
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
module.exports = class locationsAPI {
    // Fetch All ========================================================= Fetch All Locations from the Locations Document Database
    // ============================================================================================================================
    static async fetchAll(req, res) {
        // Run Try / Catch Statement
        try {
            // Get All Locations in Locations Document Database
            const locations = await Location.find();

            // Send All Locations Database Documents to Route
            res.status(200).json(locations);
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }



    // Fetch All Store Names ======================================== Fetch All Location Names from the Locations Document Database
    // ============================================================================================================================
    static async fetchAllStoreNames(req, res) {
        // Run Try / Catch Statement
        try {
            // Get All Locations in Locations Document Database
            const locations = await Location.find({ }, 'name');

            // Send All Locations Database Documents to Route
            res.status(200).json(locations);
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }



    // Fetch By Name ====================================== Fetch a Location from the Locations Document Database Based on its Name
    // ============================================================================================================================
    static async fetchByName(req, res) {
        // Get Name from Request Parameters
        const name = req.params.name;

        // Run Try / Catch Statement
        try{
            // Get Database Document Based on it's Name
            const location = await Location.findOne({ name: name });

            // Send Database Document to Route
            res.status(200).json(location);
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }


    
    // Fetch Head Office ====================================== Fetch the Head Office Location from the Locations Document Database
    // ============================================================================================================================
    static async fetchHeadOffice(req, res) {
        // Run Try / Catch Statement
        try{
            // Get Head Office Database Document
            const location = await Location.findOne({ isheadoffice: true });

            // Send Database Document to Route
            res.status(200).json(location);
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }
}