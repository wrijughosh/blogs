//"use strict";
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://wgcosmos123:sQnctn9iV3mUxG0XwrQhkz2K2RtCZcVQjvdglNqUWAKC13ALXhgzkoByqKy055vf6ObHUZdQzi2SS70wBWmFVg%3D%3D@wgcosmos123.documents.azure.com:10255/?ssl=true";

mongoClient.connect(url, function (err, db){
    if (err) throw err;    
    console.log("Connected to Db");
    var dbo = db.db("hrdb");
    dbo.createCollection("employees", function(err, res){
        if(err) throw err;
        
        //Insert 
        var names = ["John", "Joe", "George", "Richard", "Bill", "Satya", "Glenn"];
        names.forEach(ele => {          
            var objEmployee = {name: ele, Company: "MSFT"};
            dbo.collection("employees").insertOne(objEmployee, function(err, res){
            if(err) throw err;
            console.log("The " + ele + " is inserted!!!");
            });
        });
        
        //Display
        dbo.collection("employees").find({}).toArray(function(err, result){
            if (err) throw err;
            console.log(result);
        });

        db.close();
    });
});

