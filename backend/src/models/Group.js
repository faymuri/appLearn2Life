const {Schema, model} = require('mongoose');


const GroupSchema = new Schema({
    title: { type: String, required: true},

    description: {type: String, required: true},

    institutionId: [{type: Object, required: true}],

    userId: [{type: Object, required: true}],
    
}, {
    timestamps: true
});

module.exports = model('Group', GroupSchema);