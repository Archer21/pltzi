var yo = require('yo-yo')

// receives an array of objects of the avaibles languages
module.exports = function (langs) {
  var el = yo`
    <ul class="LanguageSelect">
      <li class="LanguageSelect-option">
        <label class="LanguageSelect-optionContainer"><img src="spain.jpg" class="LanguageSelect-optionImage"/><span class="LanguageSelect-text">es</span></label>
      </li>
    </ul>
  `

  return el;
}