import { ObjectId } from "mongoose"
import IgenarelResponsDTO from "../types/DTO/generalResponsDTO"
import PostModel, { IPost } from "../types/models/postModel"
import userService from "./userService"



const createPost = async (postToPost: IPost): Promise<IgenarelResponsDTO> => {
    try {
        const newPost = await new PostModel(postToPost)
        await userService.addPostId(newPost.author, newPost._id as ObjectId)
        await newPost.save()
        return {
            status:201,
            data:newPost._id as string
        }
    } catch (error) {
        throw new Error ((error as Error).message)       
    }
}

const getPosts = async (): Promise<IPost[]| IgenarelResponsDTO> => {
    try {
        
        const posts:IPost[] = await PostModel.find().populate('author').populate('comments.author')
        return posts
    } catch (error) {
        throw new Error ((error as Error).message)       
    }
}

const getPostById = async (postId:string): Promise<IPost| IgenarelResponsDTO> => {
    try {
        console.log(postId);
        
        const post:IPost | null = await PostModel.findOne({_id:postId}).populate('author').populate('comments.author')
        console.log(post);
        
        if (post)
        {return post}
        return {
            status:404,
            data:'post dasnot exsist'
        }
    } catch (error) {
        throw new Error ((error as Error).message)   
        }
}

const getPostsByUserId = async (userId:string): Promise<IPost[]| IgenarelResponsDTO> => {
    try {
        
        const posts:IPost[] | null = await PostModel.find({author:userId}).populate('author').populate('comments.author')
        if (posts)
        {return posts}
        return {
            status:200,
            data:'posts on corrent author dasnot exsist'
        }
    } catch (error) {
        throw new Error ((error as Error).message)   
        }
}

export default{
    createPost,
    getPosts,
    getPostById,
    getPostsByUserId
}