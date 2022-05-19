let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8030;
const mongoLiveUrl = "mongodb+srv://Suresh:Suresh123@cluster0.mton8.mongodb.net/zommato?retryWrites=true&w=majority"
const bodyParser = require('body-parser');
const cors = require('cors');

// middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors())


app.get('/',(req,res) => {
    res.send("Welcome to Express")
})

//book categories
app.get('/category',(req,res) => {
    db.collection('category').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//books
app.get('/books',(req,res) => {
    // let id = req.params.id;
    // let id  = req.query.id
    // console.log(">>>id",id)
    let query = {};
    let categoryid = Number(req.query.categoryid)
    let bookid = Number(req.query.bookid)
    if(categoryid){
        query = {category_id:categoryid}
    }else if(bookid){
        query = {book_id:bookid}
    }

    db.collection('books').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//book details
app.get('/details',(req,res) => {
    let categoryid = Number(req.query.categoryid)
    let bookid = Number(req.query.bookid)
    if(categoryid){
        query = {category_id:categoryid}
    }else if(bookid){
        query = {book_id:bookid}
    }

    db.collection('details').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

// place Order
app.post('/placeOrder',(req,res) => {
    db.collection('orders').insertOne(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order Placed')
    })
})

// View Order
app.get('/viewOrder',(req,res) => {
    let email = req.query.email;
    let query = {};
    if(email){
        query = {"email":email}
    }
    db.collection('orders').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

// delete order
app.delete('/deleteOrders',(req,res)=>{
    db.collection('orders').remove({},(err,result) => {
        res.send('order deleted')
    })
})


//update orders
app.put('/updateOrder/:id',(req,res) => {
    let oId = mongo.ObjectId(req.params.id);
    db.collection('orders').updateOne(
        {_id:oId},
        {$set:{
            "status":req.body.status,
            "bank_name":req.body.bankName
        }},(err,result) => {
            if(err) throw err
            res.send(`Status Updated to ${req.body.status}`)
        }
    )
})




// Connection with db
MongoClient.connect(mongoLiveUrl, (err,client) => {
    if(err) console.log(`Error while connecting`);
    db = client.db('bookstore');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})