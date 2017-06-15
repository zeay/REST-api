const MongoClient=require('mongodb').MongoClient;
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
    db.collection('User').insertOne({
        name:'kumar Saurabh',
        age:22,
        location:'UP,India'
    },(err,result)=>{
        if(err){
            return console.log('something bad happened');
        }
        
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    db.close();
})