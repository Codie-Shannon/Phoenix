// Import Mongoose
// ============================================================================================================================
// ============================================================================================================================
const mongoose = require("mongoose");



// Create Heading Schema
// ============================================================================================================================
// ============================================================================================================================
const headingSchema = mongoose.Schema({
    page: String,
    heading: String,
    subheading: String,
    isoutline: Boolean
});



// Export Heading Schema
// ============================================================================================================================
// ============================================================================================================================
module.exports = mongoose.model("Headings", headingSchema);