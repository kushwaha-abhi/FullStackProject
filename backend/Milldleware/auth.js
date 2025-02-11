
import jwt from 'jsonwebtoken';

const authMiddleware= async(req, res, next)=>{

    const {token}= req.headers;
    if(!token){
        return res.status(401).json({ success:false , message: "Unauthorized LogIn again"});
    }
    try{
        const decoded= jwt.verify(token, process.env.jwt_secret);
        req.body.userId= decoded.id;
        next();
    }catch(error){
        console.error(error);
        return res.status(500).json({ success:false , message: "Server Error"});
    }
}

export default authMiddleware ;