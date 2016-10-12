var yo = require('yo-yo')

var career = require('./../Career')

module.exports = function (careers) {
  var el = yo `
    <section class="CoursesList">
      <div class="CoursesList-container">
        ${
          careers.map(function renderCareer (item) {
            return career(item)
          })
        }
      </div>
    </section>
  `

  return el
}