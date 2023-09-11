const login=(req,res)=>{
    res.send("you are login")
    }
    const register=(req,res)=>{
        res.send("you are register") 
    }
    const register2=(req,res)=>{
        res.send("you are register") 
    }
    const verifylogin=(req,res,next)=>{
    const age=req.query.age;
    if(req.query.age>=18)
    {
        next()
    }
    else
    {
        res.send("you are not eligible for access data(verify)")
    }
    }
    
    const alluserVerify=(req,res,next)=>{
        const age=req.query.age;
        if( req.query.age>=18 && req.query.age<=60)
        {
            next()
        }
        else
        {
            res.send("you are not eligible for access login (alluseverify)")
        }
    }
    
    module.exports={login,register,verifylogin,alluserVerify,register2}
    