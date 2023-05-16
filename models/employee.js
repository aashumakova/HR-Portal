const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const evaluationSchema = new Schema({
    content: { 
        type: String, 
        required: true 
    },
    rating: { 
        type: Number, 
        min: 1, 
        max: 5, 
        dafault: 5 },
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }, 
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const employeeSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true,
        enum: ['RN', 'LVN', 'MA']
    },
    dateHired: {
        type: Date, 
        required: true
    },
    license: {
        type: Boolean, 
        default: true
    },
    evaluation: [evaluationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);