import jwt from 'jsonwebtoken';
const authMiddleware=(req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1]; // Get token from 'Bearer token' format
    if(!token) 
        return res.status(401).json({message:'Access Denied'});
    try{
        const verified=jwt.verify(token,process.env.JWT_SECRET);
        console.log(token+"   "+ process.env.JWT_SECRET)
        req.user=verified;
        next();
    }catch(error){
        res.status(400).json({message:'Invalid Token'})
    }
};
export default authMiddleware;