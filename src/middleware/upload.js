const multer=require("multer");
const path=require("path");


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname,"../upload"))
    },
    filename: function (req, file, callback) {
      const uniquePrefix = Date.now() 
      callback(null, uniquePrefix+"-"+ file.originalname)
    }
  });


  const fileFilter =(req, file, callback)=> {
      console.log({file})
      

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted

    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"){
        
        // To accept the file pass `true`, like so:
        callback(null, true)
    }else{

        // To reject this file pass `false`, like so:
        callback(null, false)
    }
  
  }


const option={
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        filesize:1024*1024*5
    },
}


const upload=multer(option);

module.exports=upload;

