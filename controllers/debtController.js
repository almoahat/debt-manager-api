const Debt = require('../models/debt');

exports.getDebts = async (req, res) => {
    const debts = await Debt.find();
    res.json(debts);
};

exports.getDebt = async (req, res) => {
    const debt = await Debt.findById(req.params.id);
    if (!debt) return res.status(404).json({ error: 'Debt not found' });
    res.json(debt);
};

exports.createDebt = async (req, res) => {
    const newDebt = new Debt(req.body);
    const savedDebt = await newDebt.save();
    res.status(201).json(savedDebt);
};

exports.updateDebt = async (req, res) => {
    const updatedDebt = await Debt.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDebt) return res.status(404).json({ error: 'Debt not found' });
    res.json(updatedDebt);
};

exports.deleteDebt = async (req, res) => {
    const deletedDebt = await Debt.findByIdAndDelete(req.params.id);
    if (!deletedDebt) return res.status(404).json({ error: 'Debt not found' });
    res.json({ message: 'Debt deleted' });
};
