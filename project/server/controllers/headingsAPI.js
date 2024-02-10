// Import Headings Schema
// ============================================================================================================================
// ============================================================================================================================
const Headings = require("../models/headingsMDL");



// Export Class
// ============================================================================================================================
// ============================================================================================================================
module.exports = class headingsAPI {
    // Fetch By Page =================================== Fetch a Heading from the Headings Document Database Based on its Page Name
    // ============================================================================================================================
    static async fetchByPage(req, res){
        // Get Page from Request Parameters
        const page = req.params.page;

        // Run Try / Catch Statement
        try{
            // Get the First Database Document with a Page Value of page
            const heading = await Headings.findOne({ page: page });

            // Send Database Document to Route
            res.status(200).json(heading);
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }
}