import mongoose, { Schema, Document, Types } from "mongoose";

export interface IComment {
  content: string;
  author: Schema.Types.ObjectId;
  createdAt: Date;
}

export interface IPost extends Document {
  title?: string;
  content: string;
  author: Schema.Types.ObjectId;
  comments: IComment[];
}

const CommentSchema = new Schema<IComment>({
  content:{
    type:String,
    required:true
  },
  author:{
    type: Schema.Types.ObjectId,
    ref:'user',
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
});

const PostSchema = new Schema<IPost>({
  title:{
    type:String,
    default:""
  },
  content:{
    type:String,
    required:[true, 'post mast hev content']
  },
  author:{
    type:Schema.Types.ObjectId,
    ref:'user'
  },
  comments:{
    type:[CommentSchema],
    default:[]
  }
})

export default mongoose.model<IPost>("post", PostSchema);
