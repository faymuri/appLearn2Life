const {Schema, model} = require('mongoose');


const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    idGroup: {
        type: int
    }


}, {
    timestamps: true
});

module.exports = model('Course', CourseSchema);