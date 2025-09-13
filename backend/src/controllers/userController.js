import { User } from "../models/userMode";
import bcrypt,{hash} from "bcrypt";



const register = async(req,res)=>{
    const {name,username,password} = req.body;


    try{
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(httpStatus.FOUND).json({message:"user already exists.."});
        }
        const hashedpass = await bcrypt.hash(password,10);
        const newuser = new User({
            name:name,
            username:username,
            password:hashedpass,
        })
        await newuser.save();
        res.status(httpStatus.CREATED).json({messagge:"user registered"});

    }catch(error){
        res.json({message:`registration failed ${error}`});
    }
}

const login = async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.json({message:"please provide valid credentials"});
    }

    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"user not found.."});
        }
        if(bcrypt.compare(password,user.password)){
            const token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({token:token});;

        }
    }catch(error){
        return res.status(500).json({message:"login failed..."});
    }
}

export {login,register};