const express = require('express');
const router = express.Router();
const supabase = require('../config/database');
const authenticate = require('../middleware/auth');

router.post('/signup', authenticate, async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({error: 'Email and password are required'})
    }
    const {data, error} = await supabase.auth.signUp({email, password});
    if(error){
        return res.status(500).json({error: 'Failed to signup'})
    } 
    return res.status(200).json({
        message: 'Signup successful',
        user: data.user,
        session: data.session
    })
});





