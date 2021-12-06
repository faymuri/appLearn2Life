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

    user: {
        type: String,
        required: true
    },

    file: {
       type: String
    },

    dateFinal: {type: Date}

}, {
    timestamps: true
});

module.exports = model('Assignment', AssignmentSchema);