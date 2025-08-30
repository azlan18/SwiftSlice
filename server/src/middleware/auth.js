//import supabase client 
const { supabase } = require('../config/database')
//auth middleware
const authenticate = async (req, res, next) => {
    try{    
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(401).json({error: 'No token provided'})
        }
        const {data:{ user }, error } = await supabase.auth.getUser(token);
        if(error){
            return res.status(401).json({error: 'Invalid token'})
        }
        req.user = user;
        next();
    }catch(error){
        return res.status(500).json({error: 'Authentication failed', headers: req.headers})
    }
}

module.exports = {authenticate};