require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

//user signin and signup routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});