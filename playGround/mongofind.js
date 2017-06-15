//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to the database');
    }
    console.log('connected to database');
/*    db.collection('todos').insertOne({
        task:'need to do something',
        status:false
    },(err,result)=>{
        if(err){
            return console.log('Something bad happened')
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })*/
/* db.collection('User').insertOne({
        name:'kumar Saurabh',
        age:22,
        location:'UP,India'
    },(err,result)=>{
        if(err){
            return console.log('something bad happened');
        }
        
        console.log(JSON.stringify(result.ops,undefined,2));
    })*/
  /*db.collection('todos').find({status:false}).toArray().then((docs)=>{
      console.log('Todos are:-');
      let document=JSON.stringify(docs,undefined,2);
      console.log(document);
  },(err)=>{
      console.log('unable to ffetch todos',err);
  })*/
  db.collection('User').find().count((err,data)=>{
      console.log(data);
  });
    //how to find collection's document with exact id.
    db.collection('User').find({
        //typing new is not important in front of ObjectID
//        _id:ObjectID('59417b9b4052c2022cde278f')
        name:'kumar Saurabh'
    }).count((err,data)=>{
        if(err) return err;
        console.log(data);
     })
//    db.close();
})