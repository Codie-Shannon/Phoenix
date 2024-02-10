// Import Vehicles Schema
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
const Vehicle = require("../models/vehiclesMDL");




// Export Class
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
module.exports = class bookAPI {
    // Fetch All Makes ================================================ Fetch All Vehicle Makes from the Vehicles Document Database
    // ============================================================================================================================
    // ============================================================================================================================
    static async fetchAllMakes(req, res){
        // Run Try / Catch Statement
        try{
            // Get All Distinct Vehicle Makes from the Vehicles Database 
            const makes = await Vehicle.find({ }, 'make').distinct('make');

            // Send Vehicle Make Database Documents to Route
            res.status(200).json(makes);
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }



    // Fetch Models By Make ======== Fetch All Distinct Vehicle Models from the Vehicles Document Database Based on a Specific Make
    // ============================================================================================================================
    // ============================================================================================================================
    static async fetchModelsByMake(req, res){
        // Get Vehicle Make from Request Parameters
        const make = req.params.make;

        // Run Try / Catch Statement
        try{
            // Get All Distinct Vehicle Models Related to a Specific Vehicle Make
            const models = await Vehicle.find({ 'make': make }, 'model').distinct('model');

            // Send Vehicle Model Database Documents to Route
            res.status(200).json(models);
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }



    // Fetch Colours for Specific Vehicle ===== Fetch All Colours for a Specific Vehicle from the Vehicle Document Database Based on the Make and Model
    // ================================================================================================================================================
    // ================================================================================================================================================
    static async fetchVehicleColours(req, res){
        // Get Make and Model from Request Parameters
        const make = req.params.make;
        const model = req.params.model;

        // Run Try / Catch Statement
        try{
            // Get Colours for Specific Vehicle from the Vehicles Document Database Based on its Make and Model
            const colours = await Vehicle.findOne({ 'make': make, 'model': model }, 'colours');

            // Send Colour Database Documents to Route
            res.status(200).json(colours);
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }
}