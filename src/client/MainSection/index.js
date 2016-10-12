var yo = require('yo-yo')

var el = yo`
  <section class="MainSection">
    
    <div class="MainSection-left">
      <h1 class="MainSection-leftTitle">Aprende diseño, desarrollo y marketing con clases en vivo de líderes de la industria</h1>
      <div class="MainSection-links">
        <a href="#" class="MainSection-button">suscribete ya</a>
        <a href="#" class="MainSection-link">Cómo funcionan los cursos</a>
      </div>
    </div>

    <div class="MainSection-right">
      <a href="#" class="MainSection-trailer">
        <img src="video.jpg" />
      </a>
    </div>

  </section>
`

module.exports = el