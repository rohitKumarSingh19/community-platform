import mongoose from 'mongoose';
const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    comments:[{body:String,date:Date}]
},{timestamps:true});
const Post= mongoose.model('Post',PostSchema);
export default Post;