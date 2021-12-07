const {Schema, model} = require('mongoose');


const CourseSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    groupId: [{}],

}, {
    timestamps: true
});



module.exports = model('Course', CourseSchema);