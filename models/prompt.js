import mongoose from 'mongoose';
import {Schema,model,models} from "mongoose";

const PromptSchema = new Schema(
    {
        creator:
        {
            type:Schema.Types.ObjectId,
            ref:'User'
        },
        prompt:{
            type:String,
            require:[true,'Prompt is Required']
        },
        tag:{
           type:String,
           require:[true,'Tag is Required']
        }
    }
);

export default mongoose.models.Prompt || mongoose.model('Prompt', PromptSchema);

// const Prompt = models.Prompt || model('Prompt', PromptSchema);

// export default Prompt;