import stream, { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret) {
    throw new Error("Missing Stream API Key or Secret");
}

const streamClient = new StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser=async (userData)=>{
   try{
   await streamClient.upsertUsers([userData]);
   return userData;
   }catch(error){
    console.log("error in upsertStreamUser", error);
   }
}


export const generateStreamToken=async (userId)=>{
    //check user id is the string

    try {
        const userIdStr=userId.toString();
        return streamClient.createToken(userIdStr);

    } catch (error) {
        console.error("error generating the string token",error);
    }
};

