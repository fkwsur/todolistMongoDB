const User = require('../models/User');

module.exports = {

  Create : async (req,res) => {
    try {
      let { username, password, password2} = req.body;

      const rows = await User.create({
        username : username,
        password : password,
        password2 : password2
      })
      console.log(rows);
      res.send('1');
    } catch (error) {
      console.log(error);
    }
  },

  Update : async (req,res) => {
    try{
      let { username, password} = req.body;

      const rows = await User.updateOne({
        username : username,
        password : password
      })
      console.log(rows);
      res.send('1');

    }catch(error){
      console.log(error);
    }
  },

  Delete : async (req,res) => {
    try{
      let { username} = req.body;

      const rows = await User.deleteOne({
        username : username
      })
      console.log(rows);
      res.send('1');

    }catch(error){
      console.log(error);
    }
  },

  Find : async (req,res) => {
    try{

      const rows = await User.find()
      console.log(rows);
      res.send(rows);

    }catch(error){
      console.log(error);
    }
  },

}