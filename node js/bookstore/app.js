let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8030;
const mongoUrl = process.env.mongoUrl;
// const mongoUrl = process.env.mongoLiveUrl;


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
    let categoryid = Number(req.query.category_id)
    let bookid = Number(req.query.book_id)
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

// //book details
// app.get('/details/:id',(req,res) => {
//     //let restId = Number(req.params.id);
//     let restId = mongo.ObjectId(req.params.id)
//     db.collection('zomato').find({_id:restId}).toArray((err,result) => {
//         if(err) throw err;
//         res.send(result)
//     })
// })


// //discount
// app.get('/menu',(req,res) => {
//     let query = {}
//     let restId = Number(req.query.restId)
//     if(restId){
//         query = {restaurant_id:restId}
//     }
//     db.collection('menu').find(query).toArray((err,result) => {
//         if(err) throw err;
//         res.send(result)
//     })
// })

// Connection with db
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log(`Error while connecting`);
    db = client.db('bookstore');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})