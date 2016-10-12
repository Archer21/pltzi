var yo = require('yo-yo')

module.exports = function (course) {
  var el = yo`
    <section class="Course">
      <div class="Course-icon">
        <img src="${course.image}" />
      </div>

      <div class="Course-detail">
        <strong class="Course-soon ${ course.isNext ? 'isNext' : 'isHidden' }">Proximamente</strong>
        <h2 class="Course-title">${ course.name }</h2>
      </div>
    </section> 
  `

  return el
}