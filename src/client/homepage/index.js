var page = require('page')
var empty = require('empty-element')

var template = require('./template')
var header = require('./../Header')
var footer = require('./../Footer')

var careersList = [
  {
    image: "frontend.png",
    name: "Frontend Profesional",
    avaibleCourses: 12,
    courses: [
      {
        image: "react.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "videogames.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "frontend.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "nodejs.png",
        name: "Curso diseño y desarrollo web"
      },
      {
        image: "nodejs.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "videogames.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "frontend.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "react.png",
        name: "Curso diseño y desarrollo web"
      },
      {
        image: "nodejs.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "videogames.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "frontend.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "react.png",
        name: "Curso diseño y desarrollo web"
      }
    ]
  },


  {
    image: "videogames.png",
    name: "Videojuegos",
    avaibleCourses: 4,
    courses: [
      {
        image: "videogames.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "react.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "nodejs.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "frontend.png",
        name: "Curso diseño y desarrollo web"
      }
    ]
  },

  {
    image: "videogames.png",
    name: "Videojuegos",
    avaibleCourses: 4,
    courses: [
      {
        image: "videogames.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "react.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "nodejs.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "frontend.png",
        name: "Curso diseño y desarrollo web"
      }
    ]
  },

  {
    image: "react.png",
    name: "Google FullStack Developer",
    avaibleCourses: 8,    
    courses: [
      {
        image: "nodejs.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "videogames.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "frontend.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "react.png",
        name: "Curso diseño y desarrollo web"
      },
      {
        image: "react.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "nodejs.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "frontend.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "react.png",
        name: "Curso diseño y desarrollo web"
      }
    ]
  },

  {
    image: "react.png",
    name: "Google FullStack Developer",
    avaibleCourses: 8,    
    courses: [
      {
        image: "nodejs.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "videogames.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "frontend.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "react.png",
        name: "Curso diseño y desarrollo web"
      },
      {
        image: "react.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "nodejs.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "frontend.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "react.png",
        name: "Curso diseño y desarrollo web"
      }
    ]
  },

  {
    image: "nodejs.png",
    name: "Backend Profesional",
    avaibleCourses: 10,    
    courses: [
      {
        image: "react.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "nodejs.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "frontend.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "react.png",
        name: "Curso diseño y desarrollo web"
      },
      {
        image: "react.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "nodejs.png",
        name: "Curso definitivo de javascript"
      },
      {
        image: "frontend.png",
        name: "Curso Bootstrap y Foundation"
      },
      {
        image: "react.png",
        name: "Curso diseño y desarrollo web"
      },
      {
        image: "react.png",
        name: "Curso profesional de React.js"
      },
      {
        image: "nodejs.png",
        name: "Curso definitivo de javascript"
      }
    ]
  }
]

page('/', header, footer, function () {
  var el = document.getElementById('landing')
  empty(el).appendChild(template(careersList))
})