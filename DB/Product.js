const mongoose = require("mongoose");

// Define the Product schema with specific fields
const productSchema = new mongoose.Schema({
  company: { type: String, required: true }, 
  model: { type: String, required: true },   
  variant: { type: String, required: true }, 
  color: { type: String, required: true },   
  distanceCovered: { type: Number, required: true }, 
  modelYear: { type: Number, required: true },
  registrationYear: { type: Number, required: true }, 
  fuelType: { type: String, required: true }, 
  transmissionType: { type: String, required: true }, 
  bodyType: { type: String, required: true }, 
  price: { type: Number, required: true },    // Price of the car
  images: { type: [String], required: true }, // Array of image URLs (for multiple images)
});

// Export the Product model
module.exports = mongoose.model("Product", productSchema);
