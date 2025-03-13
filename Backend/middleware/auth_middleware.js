const jwt = require("jsonwebtoken");

//an authentication middleware function,
//  which checks if a user is authenticated

const authenticate = async(req,resizeBy,next) =>{
// extract the authorization token from the requrest header
 // the token is expected to be in the format "Bearer token"

 const token = req.header('authorization').replace('Bearer','');

 // attempt to verify the token 
 try{
    //verify the token using the secret key
    // if the token is valid this will return the decoded payload

    const decoded = jwt.verify(token,'your-secret-key');

    // store the decoded user data in the request object
    req.user = decoded;

    // call the next middleware function in the chain
    next();
 }catch(error){
    //if the token is invalid or expired, return a 401 error response
    res.status(401).send({
        error: 'Please authenticate'
    });
 }
}

//export the authentication middleware function
 
module.exports = authenticate;