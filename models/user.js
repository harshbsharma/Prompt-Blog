import mongoose from 'mongoose';

import {Schema,model,models} from 'mongoose';

const UserSchema = new Schema(
    {
        email:
        {
            type:String,
            unique:[true,'Email Already Exist'],
            require:[true,'Email Required']
        },
        username:{
            type:String,
            require:[true,'Email Required'],
            match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 
            "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
        },
        image:{
            type:String
        }
    }
)


export default mongoose.models.User || mongoose.model("User", UserSchema);
// export default User;
