const router = require('express').Router();
const getToken = require('../util');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
let User = require('../models/user.models');


router.route("/").get((req,res) => {
    User.find()
        .then(users =>res.json(users))
        .catch(err =>res.status(400).json('Error :' + err));

});

router.route("/register").post((req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;   

    const newUser = new User({
          name,     
          email,
          password,
       
    });
    newUser.save()
        .then(()=> res.json('New user added'))
        .catch(err =>res.status(400).json('Error :' + err));
    

});
router.route('/signin').post(async(req,res)=>{  

  const signinUser =  await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (signinUser) {
    res.send({
      _id: signinUser._id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,  
      token:getToken(signinUser),     
    });
  }
  
  else {
  res.status(401).json({ message: 'Invalid Email or Password.' });
  }
     
});


module.exports = router;

