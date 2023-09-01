const AccountService = require("../service/AccountService");
const formatResponse = require("../middleware/Response");

module.exports = {

  create: async (req, res, next) => {
    const genDigit = Math.floor(Math.random() * 9000000000) +1 
    const sum = 0.00;
    try {
      const { accountName, accountDOB, accountType, initialBalance } = req.body;
      const createAccount = await AccountService.add({
        accountName,
        accountNumber: genDigit,
        accountDOB,
        accountType,
        initialBalance: sum
      });
      const savedAccount = await createAccount.save();

      formatResponse({
        res,
        data: {
          AccountNumber: savedAccount.accountNumber,
          AccountName: savedAccount.accountName,
          AccountType: savedAccount.accountType,
          AccountBalance: savedAccount.initialBalance
        },
        statusCode: 200,
        message: "Account has been generated successfully!"
      })

    } catch (err) {
      next(err)
    }
  },

  resolve: async (req, res, next) => {
    try {
      const  accountNumber  = req.params.accountNumber;
      const foundAccount = await AccountService.retrieveOne(accountNumber);

      formatResponse({
        res,
        data: foundAccount,
        statusCode: 200,
        message: "Account retrieved successfully"
      })
    } catch (err) {
      next(err)
    }
  },

  fetchAll: async (req, res, next) => {
    try {
      const foundUsers = await AccountService.retrieveAll();

      formatResponse({
        res,
        data: foundUsers,
        statusCode: 200,
        message: "Accounts retrieved successfully"
      })
    } catch (err) {
      next(err)
    }

  },


};