const AccountSchema = require("../schema/AccountSchema");

const createUserAccount = async (data) => {
    const createAccount = await AccountSchema.create(data);
    return createAccount
};

const getUserAccount = async (data) => {
    const getAccount = await AccountSchema.findOne({"accountNumber": data});
    return getAccount;
};

const getAllAccounts = async () => {
    const getAccounts = await AccountSchema.find({});
    return getAccounts;

};

module.exports = {
    createUserAccount,
    getUserAccount,
    getAllAccounts
    // updateOne,
    // deleteOne,
};
