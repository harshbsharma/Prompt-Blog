import mongoose, { mongo } from "mongoose";

let isConnected  = false;

export const dbConnect = async()=>
{
    mongoose.set('strictQuery',true);
    if(isConnected)
    {
        console.log("MongoDB is already Connected");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"promptblog",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected = true;
        console.log("MongoDB Connected Successfully")
    }
    catch(err)
    {
        console.log(err)
    }

}