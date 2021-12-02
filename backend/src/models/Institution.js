const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');


const InstitutionSchema = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    documentId: {type: String, required: true},
    institutionCode: {type: String},
}, {
    timestamps: true
});

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);

}

module.exports = model('Institution', InstitutionSchema);