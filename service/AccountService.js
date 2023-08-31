const { NotFoundError, BadRequestError } = require("../middleware/Error");
const AccountRepo = require("../repository/AccountRepo");

const add = async (data) => {
    try {

        const addAccount = await AccountRepo.createUserAccount(data);

        return addAccount
    } catch (e) {
        throw new BadRequestError(e)
    }
};

const retrieveOne = async (data) => {
    try {

        const founddata = await AccountRepo.getUserAccount(data);
        if (!data === undefined) {
            throw new NotFoundError("This account does not exist")
        }
        return founddata;
    } catch (e) {
        throw new BadRequestError(e);

    }

};

const retrieveAll = async (data) => {
    try {

        const retrievedData = await AccountRepo.getAllAccounts(data);
        if (!retrievedData) {
            throw new NotFoundError("User not found")
        }
        return retrievedData

    } catch (e) {
        throw new BadRequestError(e)
    }
};

module.exports = {
    add,
    retrieveOne,
    retrieveAll
};
