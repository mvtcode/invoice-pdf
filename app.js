/**
 * Created by tanmv.
 * User: tanmv
 */

'use strict';

const options = {
  // Export options
  "directory": "/tmp",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'
  "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
  "orientation": "portrait", // portrait or landscape

  // Page options
  "border": {
    "top": "1cm",            // default is 0, units: mm, cm, in, px
    "right": "1cm",
    "bottom": "1cm",
    "left": "1cm"
  },

  "header": {
    "height": "5mm",
    //"contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
  },

  "footer": {
    "height": "3mm"
  },
}

var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.html', 'utf8');

pdf.create(html, options).toFile('./invoiceexample.pdf', function(err, res) {
  console.log(res); // { filename: '/app/businesscard.pdf' }
});