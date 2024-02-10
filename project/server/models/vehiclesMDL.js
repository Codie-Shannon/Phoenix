// Import Mongoose
// ============================================================================================================================
// ============================================================================================================================
const mongoose = require("mongoose");



// Create Vehicle Schema
// ============================================================================================================================
// ============================================================================================================================
const vehicleSchema = mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, min: 1950, max: 2050, required: true },
    colours: [{ type: String, required: true }],
    icon: {
        category: { type: String, required: true },
        iconimg: { type: String, required: true },
        type: { type: String, required: true },
        shape: { type: String, required: true }
    },
    preview: {
        previewimg:  { type: String, required: true },
        edition: { type: String, require: true },
        price: { type: Number, required: true },
        features: [{ type: String, required: true }],
        description: [{ type: String, required: true }]
    },
});



// Export Vehicle Schema
// ============================================================================================================================
// ============================================================================================================================
module.exports = mongoose.model("Vehicles", vehicleSchema);