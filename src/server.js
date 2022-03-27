const app=require("./index");

const connect=require("./configs/db")

app.listen(5200,async()=>{
try {
    await connect()
    console.log("listening on port 5200")
    
} catch (err) {
    console.log(err.message)
}

})