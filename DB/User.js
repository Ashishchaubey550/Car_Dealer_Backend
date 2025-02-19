const mongoose = require("mongoose");

// Define the User schema with field validations
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name is required
        trim: true, // Removes extra whitespace
    },
    email: {
        type: String,
        required: true, // Email is required
        unique: true, // Ensures no duplicate emails
        trim: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,  // Fixed the regex pattern
            "Please enter a valid email address.",
        ],
    },
    password: {
        type: String,
        required: true, // Password is required
        minlength: 6, // Ensures a minimum password length
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Export the model
module.exports = mongoose.model("User", userSchema);
