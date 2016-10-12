var yo = require('yo-yo')
var course = require('./../Course')

module.exports = function (career) {
  
    return yo`
      <article class="Career">
        <header class="Career-header">
          <div class="Career-imageContainer">
            <img class="Career-image" src="${career.image}" />
          </div>
          <div class="Career-body">
            <p class="Career-text">Carrera de</p>
            <h3 class="Career-name">${career.name}</h3>
            <p class="Career-text">
              <strong class="Career-avaibleCourses">${career.avaibleCourses}</strong> disponibles
            </p>
          </div>
        </header>
        <div class="Career-list">
          ${
            career.courses.map(function renderCourse (item) {
              return yo`<a class="Career-course" href="#">
                ${course(item)}                  
              </a>`
            })
          }
        </div>
      </article>
    `
  
}