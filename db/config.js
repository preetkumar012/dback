const mongoose = require('mongoose');
const DB = "mongodb+srv://Asus:Asus1234@cluster0.gcfs3q4.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB).then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log(err);

})

