const {Schema, model} = require('mongoose');


const GroupSchema = new Schema({
    title: { type: String, required: true},

    description: {type: String, required: true},

    institutionId: [{}],

    userId: [{}],
    
}, {
    timestamps: true
});

module.exports = model('Group', GroupSchema);