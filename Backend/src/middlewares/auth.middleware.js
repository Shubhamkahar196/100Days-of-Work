import jwt from 'jsonwebtoken'

const authMiddleware = async(req,res,next) =>{
    const token = req.header("Authorization").replace("Bearer","");

    if(!token){
        res.status(401).json({
            message: "Access denied . no token provide"
        });
        return;
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    }catch(error){
        res.status(400).json({
            message: "Invalid token"
        })
    }
};

export default authMiddleware;