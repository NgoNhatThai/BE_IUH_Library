"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BankAccountModel = Schema({
  bankId: String,
  bankName: String,
  accountNumber: String,
  accountName: String
}, {
  timestamps: true
});
var BankAccount = mongoose.model('BankAccount', BankAccountModel);
module.exports = BankAccount;