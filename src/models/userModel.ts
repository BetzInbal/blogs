import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  username: string;
  password:string
  email: string;
  profile: {
    bio: string;
    socialLinks?: string[];
  };
  posts: Schema.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  username:{
    type:String,
    min:[3,'min lenght for name is 3 leeters'],
    required:[true,'user name is required'],
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:[true,'email is required'],
    unique:true
  },
  profile:{
    bio:{
      type:String,
      min:[10,'min lenght for bio is 10 leeters'],
      required:[true,'bio is required']
    },
    socialLinks:{
      type:String
    }
  }
  ,
  posts:{
    type:[Schema.Types.ObjectId,],
    ref:'posts'
  ,default:[]
}
  
});

export default mongoose.model<IUser>("user", UserSchema);
