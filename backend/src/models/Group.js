const {Schema, model} = require('mongoose');


const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }

    students: 
    

}, {
    timestamps: true
});

module.exports = model('Group', GroupSchema);