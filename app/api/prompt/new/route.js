import { dbConnect } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async(req,res)=>
{
    const {userId,prompt,tag} = await req.json();
    try{
        await dbConnect();
        const newPrompt = new Prompt({
            creator:userId,
            prompt,
            tag
        })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt),{status:201 })
    }
    catch(err)
    {
        return new Response("Failed To Create new Prompt",{status:500 })
    }

}