const JOI = require("joi").extend(require('@joi/date'))

const postSchema = JOI.object({
    accountName: JOI.string()
        .min(3)
        .max(30)
        .required(),
        
    accountDOB: JOI.date()
        .format('DD-MM-YYYY')
        .required(),

    accountType: JOI.string()
        .valid("Savings", "Checkings", "Fixed Deposit")
        .required(),

    initialBalance: JOI.number()  

})

const resolveSchema = JOI.object({
    accountNumber: JOI.number()
        .required(),  

})

module.exports = { 
    postSchema,
    resolveSchema
 }