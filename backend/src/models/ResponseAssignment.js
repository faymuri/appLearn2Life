const {Schema, model} = require('mongoose');


const AssignmentSchema = new Schema({
    file: {
        type: String,
        required: true
    },

    assignmentId: {
        type: String,
        required: true
    },

    userId: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = model('Assignment', AssignmentSchema);