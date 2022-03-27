const express=require("express");

const User=require("../model/usermodel");

const upload=require("../middleware/upload")

const router=express.Router();


router.get("/",async(req,res)=>{

try {
    
const user=await User.find().lean().exec();

return res.status(200).send(user)

} catch (err) {
  return res.status(404).send({message:err.message})
    
}

})

router.post("/",upload.single("profilePic"),async(req,res)=>{
    try {

     // console.log(req.body);
     // console.log(req.file)
    
       const user=await User.create({
         firstName:req.body.firstName,
         profilePic:req.file.path
       })
        return res.status(200).send(user)
        
        } catch (err) {
          return res.status(404).send({message:err.message})
            
        }


});
router.post("/multiple",upload.any("profilePic"),async(req,res)=>{
  try {

    const filePaths=req.files.map((file)=>{
     console.log({file});

     return file.path;
    });

    const user=await User.create({
      firstName:req.body.firstName,
      profilePic:filePaths,
    });

    console.log(filePaths)
      return res.status(200).send(user)
      
      } catch (err) {
        return res.status(404).send({message:err.message})
          
      }


})

module.exports=router
