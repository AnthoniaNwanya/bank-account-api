const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

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
}
},
{ timestamps: true },

);

module.exports = mongoose.model("Account", UserAccountSchema);
