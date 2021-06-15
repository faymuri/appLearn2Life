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
    }

//   Files: {
//       type: String
//   },
//
//   idCourse: {
//       
//       type: int
//    }

}, {
    timestamps: true
});

module.exports = model('Assignment', AssignmentSchema);