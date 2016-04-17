'use strict';

var Decode = require('../index.js').decode;
var trama = '4d43475000bdda0b0000060ddf20041017002000e3c40000baeff3c6b6224502000000000000ea65000402090daec5f7cb302cff3357000038090000930a002a170c03e007c1';
var cello = Decode.init(trama, '127.0.0.1', '3000');

console.log(cello.database());