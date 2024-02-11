const mongoose =require('mongoose');
const CustSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true, 
    unique:true
  },
  password:{
    type:String,
    require:true
  },
  username:{
    type:String,
    require:true,
    unique:true
  },
  address:{
    type:String,
    require:true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});
const CustModel = mongoose.model("CustModel", CustSchema)
module.exports=CustModel;