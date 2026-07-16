const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    embedding: {
        type: [Number],
        required: true,
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model('Doc', docSchema, 'docs');