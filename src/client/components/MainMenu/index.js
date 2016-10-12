var yo = require('yo-yo')

var el = yo`
  <nav class="MainMenu">
    <ul class="MainMenu-container">
      <li class="MainMenu-option"><a href="#" class="MainMenu-link">cursos</a></li>
      <li class="MainMenu-option"><a href="#" class="MainMenu-link">blog</a></li>
      <li class="MainMenu-option"><a href="#" class="MainMenu-link">live</a></li>
      <li class="MainMenu-option"><a href="#" class="MainMenu-link">agenda</a></li>
      <li class="MainMenu-option"><a href="#" class="MainMenu-link">precios</a></li>
      <li class="MainMenu-option"><a href="#" class="MainMenu-link">empleos</a></li>
      <li class="MainMenu-option"><a href="/signin" class="MainMenu-link">iniciar sesion</a></li>
    </ul>
  </nav>
`

module.exports = el
