import express, {Application,Request,Response,NextFunction} from "express";

const app: Application = express();
const port: Number = 4000

//menjalankan menggunakan route
// "/" adalah sebuah path endpoint
// () sebuah request handler ia merupakan sebuah function, kita bisa menggunakan sebuah arrow function. didalam function bisa punya 3 parameter
//    yaitu  (req,res,next)  
// app.use("/", (req,res,next)=>{}) 

// // contoh menggunakan Javascript
//app.use("/", (req:any, res:any, next:any)=>{})
// jika kita ingin cepat bisa memakai :any tapi buat apa kita menggunakan typescript jika kita menggunakan any


// contoh menggunakan typescript
app.use("/ganteng", (req:Request, res:Response, next:NextFunction)=>{
    res.status(200).send({status:"200", data:"juan paling ganteng"});
   // res.status(200).send("hello juan ganteng ");


});




//menjalankan server menggunakan callback ()=>
app.listen(port, () => console.log(`server is listening on port ${port}`)
);