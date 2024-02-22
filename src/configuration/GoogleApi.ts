import { Response } from 'express';
import { GoogleGenerativeAI,GenerativeModel,
    GenerateContentResult,EnhancedGenerateContentResponse } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const config = ():GoogleGenerativeAI =>{
    return new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);
};

const generativemodel =(): GenerativeModel=>{
    return config().getGenerativeModel({ model: process.env.GEMINIPRO as string});
};

const generatecontentresult = async(prompt: string):Promise<GenerateContentResult>=>{
    return await generativemodel().generateContent(prompt);
};

const enhancedGenerateContentResponse = async(prompt: string):
Promise<EnhancedGenerateContentResponse>=>{
    return (await generatecontentresult(prompt)).response;
};

const responsetext =async(prompt: string):Promise<string>=>{
    return (await enhancedGenerateContentResponse(prompt)).text();
}

export default {
    responsetext
}