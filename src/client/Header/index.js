var yo = require('yo-yo')
var empty = require('empty-element')

var logo = require('./../components/Logo')
var languageSelect = require('./../components/LanguageSelect')
var mainMenu = require('./../components/MainMenu')
var button = require('./../components/Button')

module.exports = function (ctx, next) {
  var el = yo`
    <div class="Header-container">
      ${logo}
      <div class="Header-menuContainer">
        ${languageSelect()}
        ${mainMenu}
        ${button}
      </div>
    </div>
  `

  var header = document.getElementById('header')
  empty(header).appendChild(el)
  next()
}