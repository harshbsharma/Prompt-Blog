import {dbConnect} from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async(req,res)=>
{
    try
    {
        await dbConnect();
        const prompts = await Prompt.find({}).populate('creator');
        // console.log("This is prompts -> ", prompts)
        return res.status(200).json({
            prompts
        })

    }
    catch(err)
    {
       
        return new Response("Failed to Fetch the Prompts",{status:500});
    }
}