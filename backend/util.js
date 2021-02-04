const jwt = require("jsonwebtoken");
require ('dotenv').config();

const JWT_SECRET=process.env.JWT_SECRETIVE || 'somethingsecret';

const getToken=(user)=>{
  return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  },JWT_SECRET,{
    expiresIn:'48h',
  });
};

module.exports = getToken;

