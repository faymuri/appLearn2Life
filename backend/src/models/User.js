const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
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

module.exports = model('User', UserSchema);