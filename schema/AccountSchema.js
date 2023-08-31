const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

// require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;
const UserAccountSchema = new mongoose.Schema({
  id: ObjectId,

  accountName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: Number,
  },
  accountDOB: {
    type: String,
    required: true,
  },
  accountType : {
    type: String,
    enum: ["Savings", "Checkings", "Fixed Deposit"],
    required: true,
  },
  initialBalance:  {
    type: Number,
    // get: v => (v/100).toFixed(2),
    // set: v => v*100
}
},
{ timestamps: true },
// { 
//   toJSON: { getters: true } 
// }
);

module.exports = mongoose.model("Account", UserAccountSchema);
