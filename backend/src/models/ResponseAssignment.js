const {Schema, model} = require('mongoose');


const ResponseAssignmentSchema = new Schema({
    file: {
        type: String,
        required: true
    },

    comment: {
        type: String,
    },

    assignmentId: {
        type: String,

    },

    userId: {
        type: String,

    },

}, {
    timestamps: true
});

module.exports = model('ResponseAssignment', ResponseAssignmentSchema);