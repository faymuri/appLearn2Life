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

    groupId: {type: String},

}, {
    timestamps: true
});



module.exports = model('Course', CourseSchema);