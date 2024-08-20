const mongoose = require('mongoose');

const mongoURI = "mongodb://kishan:Kishan123@ac-rxacdd7-shard-00-00.otvcmgr.mongodb.net:27017,ac-rxacdd7-shard-00-01.otvcmgr.mongodb.net:27017,ac-rxacdd7-shard-00-02.otvcmgr.mongodb.net:27017/GoFoodmern?ssl=true&replicaSet=atlas-i3q5u0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {

    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err)
            console.log("----", err)
        else {

            console.log("Lakshmi");
            const fetched_data = await mongoose.connection.db.collection("food");
                fetched_data.find({}).toArray(async function(err,data){   // empty curly-bracket is written to fetch all the data of food collection
                const foodCategory = await mongoose.connection.db.collection("foodCat");
                foodCategory.find({}).toArray(function(err,catData){     // empty curly-bracket is written to fetch all the data of foodcat collection
                    if(err) console.log(err)
                 else {
                global.food_items =data;
                global.foodCategory =catData;
                }
                })
                //  if(err) console.log(err)
                //  else {
                // global.food_items =data;
                // }
              })
        }
    });

}

module.exports = mongoDB;



