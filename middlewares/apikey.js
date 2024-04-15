
// SINGLE ROUTE BASED MIDDLEWARE        
function apiKey(req, res, next){

     const api_key = '1234567';
     console.log(req.query.api_key);
     const user_api_key = req.query.api_key;
     if(user_api_key && (user_api_key === api_key)) {
         
         next(); 
     } else {
        res.json({ message: "Not allowed"});
     }
}

module.exports = apiKey;