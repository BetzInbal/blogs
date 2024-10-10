import IgenarelResponsDTO from "../types/DTO/generalResponsDTO";
import UserModel, { IUser } from "../types/models/userModel";
import bcrypt from 'bcrypt'



 const createUser = async (sinupUser: IUser): Promise<IgenarelResponsDTO> => {
    try {
        sinupUser.password = await bcrypt.hash(sinupUser.password, 10)
        const newUser = new UserModel(sinupUser)
        await newUser.save()
        return {
            status:201,
            data:newUser._id as string
        }
    } catch (error) {
        throw new Error ((error as Error).message)       
    }
}

 const getUsers = async (): Promise<IUser[]| IgenarelResponsDTO> => {
    try {
        
        const users:IUser[] = await UserModel.find()
        return users
    } catch (error) {
        throw new Error ((error as Error).message)       
    }
}

 const getUser = async (userId:string): Promise<IUser| IgenarelResponsDTO> => {
    try {
        
        const user:IUser | null = await UserModel.findOne({userId})
        if (user)
        {return user}
        return {
            status:200,
            data:'usrer dasnot exsist'
        }
    } catch (error) {
        throw new Error ((error as Error).message)   
        }
}

const getUserByName = async (userName:string): Promise<IUser| IgenarelResponsDTO> => {
    try {
        
        const user:IUser | null = await UserModel.findOne({"username":userName})
        if (user)
        {return user}
        return {
            status:200,
            data:'usrer dasnot exsist'
        }
    } catch (error) {
        throw new Error ((error as Error).message)   
        }
}

export default {
    createUser,
    getUsers,
    getUserByName,
    getUser
}







/*
import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";

export const createUser = async (req: Request, res: Response) => {};

export const getUsers = async (req: Request, res: Response) => {};

export const getUser = async (req: Request, res: Response) => {};

// Optionally, add DELETE and EDIT functions
*/

/*export const createUser = async (sinupUser: IUser): Promise<IgenarelResponsDTO> => {
    try {
        sinupUser.password = await bcrypt.hash(sinupUser.password, 10)
        const newUser = new UserModel(sinupUser)
        try {
            newUser.save()
            
        return {
            status:201,
            data:newUser._id as string
        }         
        } catch (error) {
            return {
                status:400,
                error:true,
                data:(error as Error).message
            }
        }
        
    } catch (error) {
        return {
            status:
        }

    }
}*/