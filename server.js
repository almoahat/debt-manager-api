const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const debtRoutes = require('./routes/debtRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/debts', debtRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));
