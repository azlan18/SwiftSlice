const express = require('express');
const router = express.Router();
const {supabase} = require('../config/database');
const {authenticate} = require('../middleware/auth');

//signup using email and password only 
router.post('/signup', async (req, res) => {
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

//signin using email and password only 
router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({error: 'Email and password are required'})
    }
    const {data, error} = await supabase.auth.signInWithPassword({email, password});
    if(error){
        return res.status(500).json({error: 'Failed to signin', error: error.code})
    } 
    return res.status(200).json({
        message: 'Signin successful',
        user: data.user,
        session: data.session
    })
});

router.get('/get-secret-message',authenticate, async (req, res) => {
    return res.status(200).json({
        message: 'This is a secret message',
        headers: req.headers
    })
});

module.exports = router;

