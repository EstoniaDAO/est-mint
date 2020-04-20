#!/usr/bin/env node

/* eslint-disable consistent-return */
const fs = require('fs');
const transaction = require('../config/dao.json');
const kyc = require('../log/kyc.json');

/**
 * Main function in handleKYC. It takes `kyc.json`, `tx.json`.
 * It returns the completed template required by the transaction handler.
 * @param {Object} addresses, the `kyc.json` file pushed by the verification service
 * @param {Object} tx, template for the transation handler
 * @returns {Object} transation settings
 */
const mintSettings = (addresses, tx) => {
  const settings = tx;
  settings[0].mints = addresses.whitelist.map((address) => [
    address,
    '1',
  ]);
  return JSON.stringify(settings, null, 2);
};

try {
  fs.writeFile(
    './log/transactionSettings.json',
    mintSettings(kyc, transaction),
    (err) => {
      if (err) {
        console.log('Did not save transaction settings');
        console.log(err);
      }
    },
  );
  console.log(mintSettings(kyc, transaction));
} catch (err) {
  console.error(err);
  process.exit(-1);
}
