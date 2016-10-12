var yo = require('yo-yo')

var course = require('./../components/Course')

var el = yo`
  <a class="NextCourse" href="#">
    <section class="NextCourse-container">
      <div class="NextCourse-date">
        <span class="NextCourse-dateDay">27</span>
        <span class="NextCourse-dateMonth">Sep</span>
      </div>
      <div class="NextCourse-courseDetail">
        ${course({image: 'react.png', name: 'Curso de Reactjs', isNext: true})}   
      </div>
      
    </section>
  </a>
  
`

module.exports = el