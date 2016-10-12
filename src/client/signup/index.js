var page = require('page')
var empty = require('empty-element')

var header = require('./../Header')
var footer = require('./../Footer')

var template = require('./template')

page('/signup', header, footer, function () {
  var landing = document.getElementById('landing')
  empty(landing).appendChild(template)
})