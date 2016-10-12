var yo = require('yo-yo')
var empty = require('empty-element')

module.exports = function (ctx, next) {
  var el = yo`
    <div class="Footer-container">
      <div class="Footer-description">
        <p class="Footer-extraInfo">
          Cursos profesionales de desarrollo web y de apps, marketing online, diseño de interfaces, servidores. Con clases en vivo y profesores sabios de la industria.
        </p>
        <a href="#" class="Footer-button">Empieza ya</a>
      </div>
      <div class="Footer-contactInformation">
        <nav class="Footer-nav">
          <ul class="Footer-navList">
            <li class="Footer-navLink">
              <a href="#">Contactanos</a>
            </li>
            <li class="Footer-navLink">
              <a href="#">Historias</a>
            </li>
            <li class="Footer-navLink">
              <a href="#">Prensa</a>
            </li>
            <li class="Footer-navLink">
              <a href="#">FAQ</a>
            </li>
            <li class="Footer-navLink">
              <a href="#">Privacidad</a>
            </li>
            <li class="Footer-navLink">
              <a href="#">Dont click me</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="Footer-contactInformation">
        <ul class="Footer-contactList">
            <li class="Footer-contactLink">
              <a href="#">platzi</a>
            </li>
            <li class="Footer-contactLink">
              <a href="#">@platzi</a>
            </li>
            <li class="Footer-contactLink">
              <a href="#">/platzi</a>
            </li>
            <li class="Footer-contactLink">
              <a href="#">Platzi</a>
            </li>
          </ul>
      </div>
    </div>
  `
  var footer = document.getElementById('footer')
  empty(footer).appendChild(el)
  next()
}
