const mongoose = require('mongoose');

const debtSchema = new mongoose.Schema({
    debtor: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'active' },
    dueDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Debt', debtSchema);
