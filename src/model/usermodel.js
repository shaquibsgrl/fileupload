const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
{
firstName:{type:String,required:true},
// lastName:{tyep:String,required:false},
// email:{type:String,required:true},
// password:{type:Number,required:true},
// age:{type:Number,required:true},
profilePic:{type:String,required:false}
},
{
    versionKey:false,
    timestamps:true,
}
);

module.exports=mongoose.model("users",userSchema);

