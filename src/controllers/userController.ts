import { Request, Response } from "express";
import User, { IUser } from "../types/models/userModel";
import userService from "../services/userService";

export const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.createUser(req.body)
        res.status(result.status).send(result.data)
    } catch (error) {
        res.status(400)
        .json((error as Error).message)
    }
 };

export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUsers()
        res.status(200)
        .json(result)
        
    } catch (error) {
        res.status(400)
        .json(error)
    }
 };

export const getUserById = async (req: Request, res: Response) => { 
    try {
        const result = await userService.getUser(req.body.user.id)
        res.status(200)
        .json(result) 
    } catch (error) {
        res.status(400)
        .json(error)
    }
};

export const getUserByName = async (req: Request, res: Response) => { 
    try {
        const result = await userService.getUserByName(req.params.username)
        res.status(200)
        .json(result) 
    } catch (error) {
        res.status(400)
        .json(error)
    }
};


// Optionally, add DELETE and EDIT functions





