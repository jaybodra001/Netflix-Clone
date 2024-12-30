import { User } from "../models/user.model.js";

export async function signup(req,res) {
    try{
        const {email,password,username} = req.body

        if(!email || !password || !username){
            return res.status(400).json({success:false,message:"All fields are reuired!!!"})
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,})$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({success:false,message:"Invalid email address!!!"})
        }

        if(password.length < 6){
            return res.status(400).json({success:false,message:"Password must be at least 6"})
        }

        const existingUserByEmail = await User.findOne({ email: email });
        if(existingUserByEmail){
            return res.status(400).json({success:false,message:"Email already exists!!!"})
        }

        const existingUserByUsername = await User.findOne({username:username})
        if(existingUserByUsername){
            return res.status(400).json({success:false,message:"Username already exists!!!"})
        }

        const PROFILE_PICS = ["/1.jpg","/2.jpg","/3.jpg"]

        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)]

        const newUser = new User({
            email,
            password,
            username,
            image
        })

        

        await newUser.save()
        res.status(201).json({success:true,message:"User created successfully!!!"})


    }catch(e){
        console.log("Error in SignUp controller:"+e.message)
        res.status(500).json({success:false,message:"Internal server error!!!"})


    }
}

export async function login(req,res) {
    res.send("login route")
}

export async function logout(req,res) {
    res.send("lohout route")
}