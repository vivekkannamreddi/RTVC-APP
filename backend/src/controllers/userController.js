import  User  from "../models/userModel.js";
import bcrypt,{hash} from "bcrypt";
import {StatusCodes} from "http-status-codes";
import crypto from "crypto";


export const register = async(req,res)=>{
    const {name,username,password} = req.body;


    try{
        
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(StatusCodes.CONFLICT).json({message:"user already exists.."});
        }
        const hashedpass = await bcrypt.hash(password,10);
        const newuser = new User({
            name:name,
            username:username,
            password:hashedpass,
        })
        await newuser.save();
        res.status(StatusCodes.CREATED).json({message:"user registered"});

    }catch(error){
        res.json({message:`registration failed ${error}`});
    }
}

export const login = async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.json({message:"please provide valid credentials"});
    }

    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(StatusCodes.NOT_FOUND).json({message:"user not found.."});
        }
        const isMatch =await bcrypt.compare(password,user.password);
        if(isMatch){
            const token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();
            return res.status(StatusCodes.OK).json({token:token});;

        }
    }catch(error){
        return res.status(500).json({message:"login failed..."});
    }
}

