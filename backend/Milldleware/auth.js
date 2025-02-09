
import jwt from 'jsonwebtoken';

const authMiddleware= async(req, res, next)=>{
    const {token}= req.headers.authorization;
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }
    try{
        const decoded= jwt.verify(token, process.env.jwt_secret);
        req.body.userId= decoded.id;
        next();
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

export {authMiddleware}