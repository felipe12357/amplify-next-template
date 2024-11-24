"use server"

import { client } from "@/utils/amplify_set_config"
import { revalidatePath } from "next/cache";
import { CreationMatch } from "./models";

export const createMatchAction = async({team1, team2, date}:CreationMatch)=>{
    const response =await client.models.Match.create({ team1, team2, date });
    if(response.data)
        revalidatePath('/admin');
    
    return response; 
}

export const deleteMatchAction = async(id:string)=>{
    await client.models.Match.delete({id});
    revalidatePath('/admin') 
}