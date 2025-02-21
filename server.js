const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// POST /bfhl - Processing JSON input
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: "Invalid input" });
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const highestAlphabet = alphabets.length ? [alphabets.sort().pop()] : [];

        res.status(200).json({
            is_success: true,
            user_id: "Sunidhi_Gupta_16032003",
            email: "sunidhi.x.gupta@gamil.com",
            roll_number: "22BCS11521",
            numbers,
            alphabets,
            highest_alphabet: highestAlphabet
        });

    } catch (error) {
        res.status(500).json({ is_success: false, error: error.message });
    }
});


app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
