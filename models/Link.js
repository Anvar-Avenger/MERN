const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    link: {type: String, required: true, unique: true},
    // code: {type: Number, required: true, unique: true},
    clicks: {type: Number, default: 0},
    date: {type: Date, default: Date.now()},
    user: {type: Types.ObjectId, ref: 'user'} // Relation
});

module.exports = model('link', schema);