import User from "../model/User";

export const getAllUser = async (req, res, next) => {
    let users;
    try{
        users = await User.find();
        if(!users){
            return res.status(404).json({message: "user not found"})
        }
        return res.status(200).json({users})
    }
    catch(err){
        console.log(err)
    }

}

export const signup = async(req, res, next) => {
    const {name, email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(200).json({message: "User already exists"})
        }

    }
    catch(err) {
        console.log(err)
    }
    const user = new User({name, email, password});
    try {
        await user.save();
    }
    catch(err) {
        console.log(err)
    }
    return res.status(200).json({data:user});
}

export const login = async(req, res, next) => {
    const {email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
        if(existingUser) {
            if(password == existingUser.password) {
                return res.status(200).json({message: "login sucessful"})
            }
            else {
                return res.status(404).json({message: "incorrect password"})
            }

        }
        else {
            return res.status(400).json({message: "User does not exists"})
        }

    }
    catch(err) {
        console.log(err)
    }
    return res.status(200).json({user})
    
}