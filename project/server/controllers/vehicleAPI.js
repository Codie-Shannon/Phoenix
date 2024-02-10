// Import File System from NodeJS
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
const fs = require("fs");




// Import Vehicles Schema
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
const Vehicle = require("../models/vehiclesMDL");




// Export Class
// ============================================================================================================================
// ============================================================================================================================
// ============================================================================================================================
module.exports = class vehicleAPI {
    // Fetch By ID ============================================ Fetch a Vehicle from the Vehicles Document Database Based on its ID
    // ============================================================================================================================
    // ============================================================================================================================
    static async fetchByID(req, res){
        // Get ID from Request Parameters
        const id = req.params.id;

        // Run Try / Catch Statement
        try{
            // Get Database Document Based on it's ID
            const vehicle = await Vehicle.findById(id, ['make', 'model', 'year', 'preview.features', 'preview.description', 'preview.price', 'preview.previewimg', 'preview.edition']);

            // Send Database Document to Route
            res.status(200).json(vehicle);
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }



    // Fetch By Category ===================================== Fetch Vehicles from the Vehicles Document Database Based on Category
    // ============================================================================================================================
    // ============================================================================================================================
    static async fetchByCategory(req, res){
        // Get Category from Request Parameters
        const category = req.params.category;

        // Run Try / Catch Statement
        try{
            // Get Database Documents Based on Their Category 
            const vehicle = await Vehicle.find({ 'icon.category': category }, ['_id', 'make', 'model', 'year', 'icon.category', 'icon.iconimg', 'icon.type', 'icon.shape']);

            // Send Database Documents to Route
            res.status(200).json(vehicle);
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }



    // #region Did Not Implement Due to Time Constraint and Client Promise
    // Create ============================================================ Create a New Document for the Vehicles Document Database
    // ============================================================================================================================
    // ============================================================================================================================
    static async create(req, res){
        // Get Database Document from Request Body
        const vehicle = req.body;

        // Get the New Vehicle's File Names for it's Icon and Preview Images and Add Them to the vehicle Object
        vehicle["icon.iconimg"] = req.files[0].filename;
        vehicle["preview.previewimg"] = req.files[1].filename;

        // Convert New Vehicle's Category to Lowercase (Utilized for findByCategory Function)
        vehicle["icon.category"] = vehicle["icon.category"].toString().toLowerCase();

        // Run Try / Catch Statement
        try {
            // Create New Document in Vehicles Database
            await Vehicle.create(vehicle);

            // Send "Vehicle Added" Message to Route
            res.status(201).json({ message: "Vehicle Added" })
        }
        catch(error) {
            // Send Error Message to Route
            res.status(400).json({ message: error.message })
        }
    }


    
    // Update ============================================= Update a Document within the Vehicles Document Database Based on its ID
    // ============================================================================================================================
    // ============================================================================================================================
    static async update(req, res){
        // Declare Update Image Function
        // ============================================================================================================================
        const updateImage = (req, index, directory, old_image) => {
            // Check if the Image Needs to be Updated
            if(req.files) {    
                // Run Try / Catch Statement
                try {
                    // Remove Old Image from Directory
                    fs.unlinkSync(directory + old_image);
                }
                catch(error) {
                    // Display Error to Console
                    console.log(error);
                }

                // Return New Image File Name
                return req.files[index].filename;
            }
            else {
                // Return Old Image File Name
                return old_image;
            }
        }


        // Get Database Document ID from Request Parameters
        const id = req.params.id;

        // Get Database Document from Request Body
        const newVehicle = req.body;

        // Check if newVehicle Contains a Value for the the Icon Image
        if('icon.iconimg' in newVehicle) {
            // Get Image
            let icon = updateImage(req, 0, "./uploads/icons/", req.body.old_icon);

            // Set Updated Vehicle's Image File Name
            newVehicle["icon.iconimg"] = icon;
        }

        // Check if newVehicle Contains a Value for the Icon Image
        if('preview.previewimg' in newVehicle) {
            // Get Image
            let preview = updateImage(req, 1, "./uploads/previews/", req.body.old_preview);

            // Set Updated Vehicle's Image File Name
            newVehicle["preview.previewimg"] = preview;
        }

        // Check if newVehicle Contains a Value for the Vehicle Category
        if('icon.category' in newVehicle) {
            // Convert New Vehicle's Category to Lowercase (Utilized for findByCategory Function)
            vehicle["icon.category"] = vehicle["icon.category"].toString().toLowerCase();
        }

        // Run Try / Catch Statement
        try {
            // Find and Update Database Document Based on its ID
            await Vehicle.findByIdAndUpdate(id, newVehicle, { useFindAndModify: false });

            // Send "Vehicle Updated" Message to Route
            res.status(200).json({ message: "Vehicle Updated" });
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }



    // Delete ============================================= Delete a Document within the Vehicles Document Database Based on its ID
    // ============================================================================================================================
    // ============================================================================================================================
    static async delete(req, res) {
        // Get Database Document ID from Request Parameters
        const id = req.params.id;

        // Run Try / Catch Statement
        try {
            // Find and Delete Database Document Based on its ID
            const result = await Vehicle.findByIdAndDelete(id);

            // Check if the Deleted Database Document has any Stored Images
            if(result['icon.iconimg'] != "" || result['preview.previewimg']){
                // Run Try / Catch Statement
                try{
                    // Remove Deleted Database Document's Images from Uploads Folder
                    if(result['icon.iconimg'] != "") { fs.unlinkSync("./uploads/icons/" + result.icon); }
                    if(result['preview.previewimg'] != "") { fs.unlinkSync("./uploads/previews/" + result.preview); }
                }
                catch(error) {
                    // Display Error to Console
                    console.log(error);
                }
            }

            // Send "Vehicle Deleted" Message to Route
            res.status(200).json({ message: "Vehicle Deleted" });
        }
        catch(error) {
            // Send Error Message to Route
            res.status(404).json({ message: error.message });
        }
    }
    // #endregion Did Not Implement Due to Time Constraint and Client Promise
}