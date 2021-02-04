const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require ('dotenv').config(); 
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());

port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex:true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err));

const itemRouter = require('./routes/items');
const userRouter = require('./routes/users');
app.use(bodyParser.json());
app.use('/items',itemRouter);
app.use('/users',userRouter);


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})