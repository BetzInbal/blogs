import { Request, Response, NextFunction } from "express";
import Post, { IPost } from "../types/models/postModel";
import User from "../types/models/userModel";
import postService from "../services/postService";

// Create a new post
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await postService.createPost(req.body)
    res.status(result.status)
    .send(result.data)
  } catch (error) {
    res.status(400)
    .json((error as Error).message)
    
  }
 };

// Delete a post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { };


// Get all posts
export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await postService.getPosts()
    res.status(200)
    .send(result)
  } catch (error) {
    res.status(400)
    .json((error as Error).message)
    
  }
 };


// Get a single post by ID
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { 
  try {
    const result = await postService.getPostById(req.params.id)
    res.status(200)
    .json(result)
  } catch (error) {
    res.status(400)
    .json((error as Error).message)
    
  }
};


// Update a post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { };


// Add a comment to a post
export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { };


