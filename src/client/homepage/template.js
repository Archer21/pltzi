var yo = require('yo-yo')

var mainSection = require('./../MainSection')
var nextCourse = require('./../NextCourse')
var plans = require('./../components/Plans')
var coursesList = require('./../components/CoursesList')

module.exports = function (careers) {
  var el = yo`
    <div class="container">
      ${mainSection}
      ${nextCourse}
      ${plans}
      ${coursesList(careers)}
    </div>
  `

  return el
}