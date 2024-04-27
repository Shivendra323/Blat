const mongoose = require('mongoose');

// Schema for sports channel subscriber
const sportsChannelSubscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true // Ensure each subscriber has a unique email
    },
    timestamp: {
        type: Date,
        default: Date.now // Set the default value to the current timestamp
    }
});

// Model for sports channel subscriber
const Sports = mongoose.model('Sports', sportsChannelSubscriberSchema);

// Schema for travel channel subscriber
const travelChannelSubscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Model for travel channel subscriber
const Travel = mongoose.model('Travel', travelChannelSubscriberSchema);

// Schema for food channel subscriber
const foodChannelSubscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Model for food channel subscriber
const Food = mongoose.model('Food', foodChannelSubscriberSchema);

// Schema for technology channel subscriber
const technologyChannelSubscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Model for technology channel subscriber
const Technology = mongoose.model('Technology', technologyChannelSubscriberSchema);

// Schema for cinema channel subscriber
const cinemaChannelSubscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Model for cinema channel subscriber
const Cinema = mongoose.model('Cinema', cinemaChannelSubscriberSchema);

module.exports = { Sports, Travel, Food, Technology, Cinema };
