const express=require('express')
const app = express();
const mysql=require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db= mysql.createConnection({
    user:"root",
    host:'localhost',
    password:'admin',
    database:'meet',
});

//main meet  post
app.post('/addmain',(req,res)=>{
    const maintitle=req.body.maintitle;
    const started=req.body.started;
    const maintime=req.body.maintime;
    const maindes=req.body.maindes;
    db.query("INSERT INTO main (maintitle,started,maintime,maindes) VALUE (?,?,?,?)",[maintitle,started,maintime,maindes],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("inserting into main table")
        }
    }
    )
})
//mom meet post
app.post('/addmom',(req,res)=>{
    
    const subtitle= req.body.subtitle;
     const status = req.body.status;
    const duedate = req.body.duedate;
  

db.query("INSERT INTO abc (subtitle,status,duedate) VALUES (?,?,?)",[subtitle,status,duedate],
(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        res.send("inserting in meet table ")
    }
}
)
})
// mom get 
app.get('/getmom',(req,res)=>{
    console.log("oooo")
    db.query("Select * from abc",(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("dispalying in meet table ")
        }
    })
})
//emp get
app.get('/getemp',(req,res)=>{
  
    db.query("Select * from emp",(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.listen(3001,()=>{
    console.log("db working")
})