/**
 * Created by tanmv.
 * User: tanmv
 */

'use strict';

var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.html', 'utf8');
var options = { format: 'Letter', format: 'A4' };

pdf.create(html, options).toFile('./invoiceexample.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});