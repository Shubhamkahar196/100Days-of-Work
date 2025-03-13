const jwt = require("jsonwebtoken");

// authentication middleware function

const authenticate = async(req, res, next)=>{

    // get the authorization token from the request header

    const token = req.header('Authorization').replace('Bearer', '');

    // try to verify the token 
    try{
        // verify the token using the secret key
        const decoded = jwt.verify(token, 'your-secret-key');

        // if the token is valid add the decoded user data to the request object 
        req.user = decoded;

        //call the next middleware function
        next();
    }catch(error){
        // if the token is invalid or expired, return a 401 error response
        res.status(401).send({error: 'please authenticate'});
    }
};

//export the authentication middleware function

module.exports = authenticate;