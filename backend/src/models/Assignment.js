const {Schema, model} = require('mongoose');


const AssignmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    file: {
       type: String
    },

    dateFinal: {type: Date},

    courseId: {
        type: String,
    },


}, {
    timestamps: true
});

module.exports = model('Assignment', AssignmentSchema);