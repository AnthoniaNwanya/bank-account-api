# BANK ACCOUNT API

##### Description:

##### Clone this Repo:

`git clone https://github.com/AnthoniaNwanya/bank-account-api.git`

##### Install Dependencies:

`npm install`

##### Start :

`npm start`

#### Schema
```
({
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
```

#### Routes

###### Create User Account

###### Method: POST /flutter/create

###### Request:

```
{
  "accountName": "Flutter Limited", 
  "accountDOB": "22-08-2016" , 
  "accountType": "Savings", 
  "initialBalance": 10000
}
```

###### Response:

```
{
  "success": true,
  "status": "success",
  "statusCode": 200,
  "data": {
    "AccountNumber": 8217964013,
    "AccountName": "Flutter Limited",
    "AccountType": "Savings",
    "AccountBalance": 10000
  },
  "message": "Account has been generated successfully!"
}

```

###### Resolve (Get User By Account Number)

###### Method: POST /flutter/resolve

###### Request:

```
{
  "accountNumber": "8217964013"
}
```

###### Response:

```
{
  "success": true,
  "status": "success",
  "statusCode": 200,
  "data": {
    "_id": "64f0f113fb633da595ca3896",
    "accountName": "Flutter Limited",
    "accountNumber": 8217964013,
    "accountDOB": "22-08-1994",
    "accountType": "Savings",
    "initialBalance": 0,
    "createdAt": "2023-08-31T19:59:15.294Z",
    "updatedAt": "2023-08-31T19:59:15.294Z",
    "__v": 0
  },
  "message": "Account retrieved successfully"
}
```

###### Fetch All

###### Method: GET /flutter/fetch-all

###### Response:

```
{
  "success": true,
  "status": "success",
  "statusCode": 200,
  "data": [
    {
      "_id": "64f0f113fb633da595ca3896",
      "accountName": "Flutter Limited",
      "accountNumber": 3298673210,
      "accountDOB": "22-08-1994",
      "accountType": "Savings",
      "initialBalance": 0,
      "createdAt": "2023-08-31T19:59:15.294Z",
      "updatedAt": "2023-08-31T19:59:15.294Z",
      "__v": 0
    },
    {
      "_id": "64f112a4166d48bda366ad89",
      "accountName": "Flutter Limited",
      "accountNumber": 8217964013,
      "accountDOB": "22-08-1994",
      "accountType": "Savings",
      "initialBalance": 0,
      "createdAt": "2023-08-31T22:22:28.383Z",
      "updatedAt": "2023-08-31T22:22:28.383Z",
      "__v": 0
    }
  ],
  "message": "Users retrieved successfully"
}
```


##### Built With:
- Node.js
- Express.js
````
