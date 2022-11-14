import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 27017;

app.use(express.json())
app.use(cors())

const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    cartItems: [
        {
            id: Number,
            title: String,
            price: Number,
            description: String,
            category: String,
            image: String,
            rating: Number,
            ratingcount: Number,
        }
    ]
})

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/ecomm').catch((err) => {
    throw err;
});

app.get('/ecomm', (req, res) => {
    User.find().then(data => {res.json(data)
                    console.log(data)})
    .catch(error => res.json(error))
});

/*
app.patch('/ecomm', (req,res) => {
    
});
*/


app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});

