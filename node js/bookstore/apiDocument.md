//page1

list of all categories=> https://bookstore42348.herokuapp.com/category                         localhost:9800/category
list of all books=> https://bookstore42348.herokuapp.com/books                                 localhost:9800/books



//page2
list of books based categoryid=> https://bookstore42348.herokuapp.com/books?categoryid=1       localhost:9800/books/categoryid=1
list of books based on bookid=>https://bookstore42348.herokuapp.com/books?bookid=1             localhost:9800/books/bookid=1



details of books based on bookid or category id
=> https://bookstore42348.herokuapp.com/books?categoryid=1                                        localhost:9800/details?categoryid=1

=> https://bookstore42348.herokuapp.com/books?categoryid=1                                        localhost:9800/details?bookid=1


Filter on basis of date of book launch=>
Filter on basis of price Low to High=>
Filter on basis of price High to Low=>
sorting(letter: A-Z)=>
sorting(letter: a-z)=>


//page3
Place Order (post)=> localhost:9700/placeOrder (body) > { "name":"suresh", "email":"suresh@gmail.com", "address":"Hno 23,Sector 1", "phone":945645656, "cost":600, "bookid":[4,6,7], "status":"Pending" }



//page4
See all order place=>
Get Order on basis of emailId
https://bookstore42348.herokuapp.com/viewOrder?email=suresh@gmail.com

localhost:9800/viewOrder?email=suresh@gmail.com


//page5
update order (put)=> 
https://bookstore42348.herokuapp.com/updateOrder/6251a39a151064904127bc2c (body) { "status":"In Transit", "bankName":"Axis Bank" }

localhost:9800/updateOrder/6251a39a151064904127bc2c (body) { "status":"In Transit", "bankName":"Axis Bank" }


